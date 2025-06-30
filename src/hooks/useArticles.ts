
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
      
      // Process articles and ensure correct image URLs
      if (data && data.length > 0) {
        const articlesWithImages = data.map((article) => {
          console.log(`Processing article: ${article.title}`);
          console.log(`Original image_url: ${article.image_url}`);
          
          // Special handling for water crisis article
          const isWaterCrisisArticle = article.title.toLowerCase().includes("water crisis") || 
                                       article.title.toLowerCase().includes("blue gold");
          
          if (isWaterCrisisArticle) {
            const updatedArticle = {
              ...article,
              image_url: '/lovable-uploads/50c344c1-e86b-4356-984f-3557ad5270a1.png'
            };
            console.log(`Water crisis article detected - forced image URL: ${updatedArticle.image_url}`);
            return updatedArticle;
          }
          
          // For other articles, process normal image URL logic
          if (article.image_url && !article.image_url.startsWith('/lovable-uploads/') && !article.image_url.startsWith('http')) {
            const updatedArticle = {
              ...article,
              image_url: `/lovable-uploads/${article.image_url}`
            };
            console.log('Updated article image URL:', updatedArticle.image_url);
            return updatedArticle;
          }
          
          console.log('Article image URL (unchanged):', article.image_url);
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
      
      console.log(`Fetching single article: ${data?.title}`);
      console.log(`Original image_url from DB: ${data?.image_url}`);
      
      // Special handling for water crisis article
      const isWaterCrisisArticle = data?.title.toLowerCase().includes("water crisis") || 
                                   data?.title.toLowerCase().includes("blue gold");
      
      if (isWaterCrisisArticle) {
        const updatedData = {
          ...data,
          image_url: '/lovable-uploads/50c344c1-e86b-4356-984f-3557ad5270a1.png'
        };
        console.log(`Water crisis article detected - forced image URL: ${updatedData.image_url}`);
        return updatedData;
      }
      
      // For other articles, process normal image URL logic
      if (data && data.image_url && !data.image_url.startsWith('/lovable-uploads/') && !data.image_url.startsWith('http')) {
        const updatedData = {
          ...data,
          image_url: `/lovable-uploads/${data.image_url}`
        };
        console.log('Final article image URL:', updatedData.image_url);
        return updatedData;
      }
      
      console.log('Final article image URL (unchanged):', data?.image_url);
      return data;
    },
  });
};
