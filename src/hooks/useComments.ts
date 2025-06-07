
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Comment = Tables<'comments'>;

export const useComments = (articleId: string) => {
  return useQuery({
    queryKey: ['comments', articleId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('article_id', articleId)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching comments:', error);
        throw error;
      }
      
      return data;
    },
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ articleId, author, content }: { articleId: string; author: string; content: string }) => {
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            article_id: articleId,
            name: author,
            comment: content,
          }
        ])
        .select()
        .single();
      
      if (error) {
        console.error('Error adding comment:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['comments', data.article_id] });
    },
  });
};
