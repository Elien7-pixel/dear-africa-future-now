
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useComments, useCreateComment, useLikeComment } from '@/hooks/useComments';
import { Heart, MessageCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface CommentSectionProps {
  articleId: string;
}

const CommentSection = ({ articleId }: CommentSectionProps) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());
  const { toast } = useToast();
  
  const { data: comments, isLoading } = useComments(articleId);
  const createCommentMutation = useCreateComment();
  const likeCommentMutation = useLikeComment();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in both name and comment fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      await createCommentMutation.mutateAsync({
        articleId,
        name: name.trim(),
        comment: comment.trim(),
      });
      
      setName('');
      setComment('');
      
      toast({
        title: "Comment Posted",
        description: "Your comment has been posted successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to post comment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLike = (commentId: string, currentLikes: number) => {
    const hasLiked = likedComments.has(commentId);
    
    if (hasLiked) {
      // Unlike the comment
      const newLikes = Math.max(0, currentLikes - 1);
      likeCommentMutation.mutate({ 
        commentId, 
        currentLikes: newLikes 
      });
      setLikedComments(prev => {
        const newSet = new Set(prev);
        newSet.delete(commentId);
        return newSet;
      });
    } else {
      // Like the comment
      const newLikes = currentLikes + 1;
      likeCommentMutation.mutate({ 
        commentId, 
        currentLikes: newLikes 
      });
      setLikedComments(prev => new Set(prev).add(commentId));
    }
  };

  return (
    <div className="mt-12 border-t pt-8">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="h-5 w-5 text-african-orange" />
        <h3 className="text-2xl font-bold text-african-dark">Comments</h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h4 className="text-lg font-semibold mb-4 text-african-dark">Leave a Comment</h4>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
            required
          />
          <Textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full min-h-[100px] resize-none"
            required
          />
          <Button 
            type="submit" 
            className="bg-african-orange hover:bg-african-orange/90 text-white"
            disabled={createCommentMutation.isPending}
          >
            {createCommentMutation.isPending ? 'Posting...' : 'Post Comment'}
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-african-orange mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading comments...</p>
          </div>
        ) : comments && comments.length > 0 ? (
          <div className="max-h-96 overflow-y-auto space-y-4">
            {comments.map((comment) => {
              const hasLiked = likedComments.has(comment.id);
              const displayLikes = hasLiked ? comment.likes + 1 : comment.likes;
              
              return (
                <div key={comment.id} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-semibold text-african-dark">{comment.name}</h5>
                      <p className="text-sm text-gray-500">
                        {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <button
                      onClick={() => handleLike(comment.id, comment.likes)}
                      className={`flex items-center gap-1 text-sm transition-colors ${
                        hasLiked 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-gray-600 hover:text-red-500'
                      }`}
                      disabled={likeCommentMutation.isPending}
                    >
                      <Heart className={`h-4 w-4 ${hasLiked ? 'fill-current' : ''}`} />
                      <span>{displayLikes}</span>
                    </button>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-600">
            <MessageCircle className="h-12 w-12 mx-auto mb-2 text-gray-400" />
            <p>No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
