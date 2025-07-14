
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Article = Tables<'articles'> & {
  image_url: string;
};

// Helper function to format image URLs consistently
const formatImageUrl = (url: string | null, title: string = ''): string => {
  const DEFAULT_IMAGE = '/lovable-uploads/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png';
  const WATER_CRISIS_IMAGE = '/lovable-uploads/50c344c1-e86b-4356-984f-3557ad5270a1.png';

  // Return default if no URL provided
  if (!url || url.trim() === '') return DEFAULT_IMAGE;

  // Special case for water crisis articles
  if (title.toLowerCase().includes("water crisis") || 
      title.toLowerCase().includes("blue gold")) {
    return WATER_CRISIS_IMAGE;
  }

  // Climate advocacy article now uses default icon instead of uploaded image
  if (title.toLowerCase().includes("power of voices") || 
      title.toLowerCase().includes("activists, influencers, and innovators") ||
      title.toLowerCase().includes("climate change advocacy")) {
    return DEFAULT_IMAGE;
  }

  // Ensure URL has correct prefix
  if (!url.startsWith('http') && !url.startsWith('/lovable-uploads/')) {
    return `/lovable-uploads/${url}`;
  }

  return url;
};

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      console.log('Fetching articles from Supabase...');
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }

      const processed = (data || []).map(article => ({
        ...article,
        image_url: formatImageUrl(article.image_url, article.title)
      }));

      console.log('Processed articles with image URLs:', processed);
      return processed;
    },
    staleTime: 5 * 60 * 1000 // 5 minutes cache
  });
};

export const useArticle = (id: string | undefined) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: async () => {
      if (!id) throw new Error('Article ID is required');
      
      console.log(`Fetching article ${id} from Supabase...`);
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error(`Error fetching article ${id}:`, error);
        throw error;
      }

      const processed = data ? {
        ...data,
        image_url: formatImageUrl(data.image_url, data.title)
      } : null;

      console.log(`Processed article ${id} with image URL:`, processed?.image_url);
      return processed;
    },
    enabled: !!id
  });
};

export const useArticleLikes = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ articleId, increment }: { articleId: string; increment: boolean }) => {
      const { data, error } = await supabase.rpc(increment ? 'increment_likes' : 'decrement_likes', {
        article_id: articleId
      });

      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      queryClient.invalidateQueries({ queryKey: ['article', variables.articleId] });
    }
  });
};
