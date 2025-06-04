
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Comment = Tables<'comments'>;

export const useComments = (articleId?: string) => {
  return useQuery({
    queryKey: ['comments', articleId],
    queryFn: async () => {
      const query = supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (articleId) {
        query.eq('article_id', articleId);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching comments:', error);
        throw error;
      }
      
      return data;
    },
    enabled: !!articleId,
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ articleId, name, comment }: { articleId: string; name: string; comment: string }) => {
      const { data, error } = await supabase
        .from('comments')
        .insert([{ article_id: articleId, name, comment }])
        .select()
        .single();
      
      if (error) {
        console.error('Error creating comment:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['comments', variables.articleId] });
    },
  });
};

export const useLikeComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ commentId, currentLikes }: { commentId: string; currentLikes: number }) => {
      const { data, error } = await supabase
        .from('comments')
        .update({ likes: currentLikes })
        .eq('id', commentId)
        .select()
        .single();
      
      if (error) {
        console.error('Error updating comment likes:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['comments', data.article_id] });
    },
  });
};
