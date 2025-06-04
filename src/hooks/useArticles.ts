
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Article = Tables<'articles'>;

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }
      
      return data;
    },
  });
};

export const useArticle = (id: string) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching article:', error);
        throw error;
      }
      
      return data;
    },
  });
};

export const useLikeArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ articleId, currentLikes }: { articleId: string; currentLikes: number }) => {
      const { data, error } = await supabase
        .from('articles')
        .update({ likes: currentLikes + 1 })
        .eq('id', articleId)
        .select()
        .single();
      
      if (error) {
        console.error('Error updating article likes:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      queryClient.invalidateQueries({ queryKey: ['article'] });
    },
  });
};

export const useUnlikeArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ articleId, currentLikes }: { articleId: string; currentLikes: number }) => {
      const { data, error } = await supabase
        .from('articles')
        .update({ likes: Math.max(0, currentLikes - 1) })
        .eq('id', articleId)
        .select()
        .single();
      
      if (error) {
        console.error('Error updating article likes:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      queryClient.invalidateQueries({ queryKey: ['article'] });
    },
  });
};
