
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface LikeButtonProps {
  itemId: string;
  itemType: 'article' | 'comment';
  initialLikes?: number;
}

const LikeButton = ({ itemId, itemType, initialLikes = 0 }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if item was liked in this session
  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem('likedItems') || '{}');
    const key = `${itemType}_${itemId}`;
    setIsLiked(likedItems[key] || false);
  }, [itemId, itemType]);

  const handleLike = async () => {
    const likedItems = JSON.parse(localStorage.getItem('likedItems') || '{}');
    const key = `${itemType}_${itemId}`;
    const wasLiked = likedItems[key] || false;
    const newLikedState = !wasLiked;
    
    // Update local state immediately for smooth UX
    setIsLiked(newLikedState);
    setIsAnimating(true);
    
    // Update localStorage
    likedItems[key] = newLikedState;
    localStorage.setItem('likedItems', JSON.stringify(likedItems));

    try {
      // Update database
      const tableName = itemType === 'article' ? 'articles' : 'comments';
      const newLikeCount = newLikedState ? likes + 1 : likes - 1;
      
      const { error } = await supabase
        .from(tableName)
        .update({ likes: newLikeCount })
        .eq('id', itemId);

      if (error) {
        console.error('Error updating likes:', error);
        // Revert local state on error
        setIsLiked(wasLiked);
        likedItems[key] = wasLiked;
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
      } else {
        setLikes(newLikeCount);
      }
    } catch (error) {
      console.error('Error updating likes:', error);
      // Revert local state on error
      setIsLiked(wasLiked);
      likedItems[key] = wasLiked;
      localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }

    // Reset animation
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      className={`flex items-center gap-1 transition-all duration-200 hover:bg-red-50 focus:ring-2 focus:ring-red-200 focus:outline-none ${
        isAnimating ? 'scale-110' : 'scale-100'
      }`}
      aria-label={`${isLiked ? 'Unlike' : 'Like'} this ${itemType}`}
      role="button"
      tabIndex={0}
    >
      <Heart 
        className={`h-4 w-4 transition-all duration-200 ${
          isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500 hover:text-red-500'
        } ${isAnimating ? 'animate-pulse' : ''}`}
      />
      <span className={`text-sm ${isLiked ? 'text-red-500' : 'text-gray-500'}`}>
        {likes}
      </span>
    </Button>
  );
};

export default LikeButton;
