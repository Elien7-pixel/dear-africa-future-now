
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, User } from 'lucide-react';
import { useComments, useAddComment } from '@/hooks/useComments';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface CommentSectionProps {
  articleId: string;
}

const CommentSection = ({ articleId }: CommentSectionProps) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const { toast } = useToast();
  
  const { data: comments, isLoading } = useComments(articleId);
  const addCommentMutation = useAddComment();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!author.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both name and comment fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      await addCommentMutation.mutateAsync({
        articleId,
        author: author.trim(),
        content: content.trim(),
      });
      
      setAuthor('');
      setContent('');
      
      toast({
        title: "Success",
        description: "Your comment has been added!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-16 border-t pt-8">
      <div className="flex items-center mb-8">
        <MessageCircle className="h-6 w-6 mr-3 text-african-orange" />
        <h3 className="text-2xl font-bold text-african-green">Comments</h3>
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-lg font-semibold mb-4 text-african-green">Leave a Comment</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-african-orange"
            required
          />
        </div>
        <textarea
          placeholder="Your comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-african-orange mb-4"
          required
        />
        <Button 
          type="submit" 
          className="bg-african-orange hover:bg-african-orange/90"
          disabled={addCommentMutation.isPending}
        >
          {addCommentMutation.isPending ? 'Adding...' : 'Add Comment'}
        </Button>
      </form>

      {/* Comments List */}
      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-african-orange mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading comments...</p>
        </div>
      ) : comments && comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-african-blue/20 rounded-full flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-african-blue" />
                </div>
                <div>
                  <h5 className="font-semibold text-african-green">{comment.author}</h5>
                  <p className="text-sm text-gray-500">
                    {format(new Date(comment.created_at), 'MMM dd, yyyy at h:mm a')}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
