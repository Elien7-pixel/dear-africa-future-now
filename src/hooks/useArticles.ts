
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
      
      // Update image URLs to use the correct lovable-uploads path format
      if (data && data.length > 0) {
        const articlesWithImages = data.map((article) => {
          if (article.image_url && !article.image_url.startsWith('/lovable-uploads/') && !article.image_url.startsWith('http')) {
            return {
              ...article,
              image_url: `/lovable-uploads/${article.image_url}`
            };
          }
          return article;
        });
        
        return articlesWithImages;
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
      
      // Update image URL to use the correct lovable-uploads path format
      if (data && data.image_url && !data.image_url.startsWith('/lovable-uploads/') && !data.image_url.startsWith('http')) {
        return {
          ...data,
          image_url: `/lovable-uploads/${data.image_url}`
        };
      }
      
      return data;
    },
  });
};
