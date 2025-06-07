
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
      
      // Add a random image to one of the articles if they don't have images
      if (data && data.length > 0) {
        const randomImages = [
          '/lovable-uploads/4beebcca-0f9d-43c6-aab8-9458e05e54a7.png',
          '/lovable-uploads/2b0541c8-9ee8-420c-af46-779a21599afc.png',
          '/lovable-uploads/dbce2d24-6a96-453a-9739-e19f644a6c00.png'
        ];
        
        // Add random image to the first article that doesn't have one
        const articlesWithImages = data.map((article, index) => {
          if (!article.image_url && index === 0) {
            return {
              ...article,
              image_url: randomImages[Math.floor(Math.random() * randomImages.length)]
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
      
      // Add random image if article doesn't have one
      if (data && !data.image_url) {
        const randomImages = [
          '/lovable-uploads/4beebcca-0f9d-43c6-aab8-9458e05e54a7.png',
          '/lovable-uploads/2b0541c8-9ee8-420c-af46-779a21599afc.png',
          '/lovable-uploads/dbce2d24-6a96-453a-9739-e19f644a6c00.png'
        ];
        
        return {
          ...data,
          image_url: randomImages[Math.floor(Math.random() * randomImages.length)]
        };
      }
      
      return data;
    },
  });
};
