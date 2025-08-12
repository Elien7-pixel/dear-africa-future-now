
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface EnhancedLikeButtonProps {
  articleId: string;
  className?: string;
}

const EnhancedLikeButton = ({ articleId, className = "" }: EnhancedLikeButtonProps) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if article was liked in this session
  useEffect(() => {
    const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '{}');
    setIsLiked(likedArticles[articleId] || false);
  }, [articleId]);

  // Fetch initial like count and set up real-time subscription
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('likes')
          .eq('id', articleId)
          .single();

        if (error) {
          console.error('Error fetching likes:', error);
        } else if (data) {
          setLikes(data.likes || 0);
        }
      } catch (error) {
        console.error('Error fetching likes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();

    // Set up real-time subscription
    const channel = supabase
      .channel('article-likes-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'articles',
          filter: `id=eq.${articleId}`
        },
        (payload) => {
          if (payload.new && typeof payload.new.likes === 'number') {
            setLikes(payload.new.likes);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [articleId]);

  const handleLike = async () => {
    const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '{}');
    const wasLiked = likedArticles[articleId] || false;

    // Prevent multiple likes from same visitor
    if (wasLiked) {
      return;
    }

    // Update local state immediately for smooth UX
    setIsLiked(true);
    setIsAnimating(true);
    
    // Update localStorage
    likedArticles[articleId] = true;
    localStorage.setItem('likedArticles', JSON.stringify(likedArticles));

    try {
      // Increment like count in database
      const { error } = await supabase
        .from('articles')
        .update({ likes: likes + 1, updated_at: new Date().toISOString() })
        .eq('id', articleId);

      if (error) {
        console.error('Error updating likes:', error);
        // Revert local state on error
        setIsLiked(false);
        likedArticles[articleId] = false;
        localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
      }
    } catch (error) {
      console.error('Error updating likes:', error);
      // Revert local state on error
      setIsLiked(false);
      likedArticles[articleId] = false;
      localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
    }

    // Reset animation
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (isLoading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
        <span className="text-sm text-gray-400">...</span>
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      disabled={isLiked}
      className={`flex items-center gap-2 transition-all duration-200 hover:bg-red-50 focus:ring-2 focus:ring-red-200 focus:outline-none disabled:cursor-not-allowed ${
        isAnimating ? 'scale-110' : 'scale-100'
      } ${className}`}
      aria-label={`${isLiked ? 'Liked' : 'Like'} this article. ${likes} likes`}
      role="button"
      tabIndex={0}
    >
      <Heart 
        className={`h-5 w-5 transition-all duration-200 ${
          isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500 hover:text-red-500'
        } ${isAnimating ? 'animate-pulse' : ''}`}
      />
      <span className={`text-sm font-medium ${isLiked ? 'text-red-500' : 'text-gray-600'}`}>
        {likes}
      </span>
    </Button>
  );
};

export default EnhancedLikeButton;
