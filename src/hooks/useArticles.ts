import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Article = Tables<'articles'> & {
  image_url: string;
};

// Helper function to format image URLs consistently
const formatImageUrl = (url: string | null, title: string = ''): string => {
  const SUPABASE_STORAGE_URL = 'https://pgvuicbtevezvusewztx.supabase.co/storage/v1/object/public/article-images';
  const DEFAULT_IMAGE = `${SUPABASE_STORAGE_URL}/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png`;
  const WATER_CRISIS_IMAGE = `${SUPABASE_STORAGE_URL}/50c344c1-e86b-4356-984f-3557ad5270a1.png`;
  const CLIMATE_ADVOCACY_IMAGE = `${SUPABASE_STORAGE_URL}/47876403-bc33-4a8f-aee5-faa8c47d4090.png`;
  const EMBRACING_CHANGE_IMAGE = `${SUPABASE_STORAGE_URL}/1e400cbe-7f12-44b4-b2a0-111642b17d08.png`;
  const LAUDATO_SI_IMAGE = `${SUPABASE_STORAGE_URL}/561f4c7e-ebc5-49b6-bcca-0707ad33c4c2.png`;

  // Return default if no URL provided
  if (!url || url.trim() === '') return DEFAULT_IMAGE;

  // Special case for water crisis articles
  if (title.toLowerCase().includes("water crisis") || 
      title.toLowerCase().includes("blue gold")) {
    return WATER_CRISIS_IMAGE;
  }

  // Climate advocacy article uses the uploaded protest image
  if (title.toLowerCase().includes("power of voices") || 
      title.toLowerCase().includes("activists, influencers, and innovators") ||
      title.toLowerCase().includes("climate change advocacy")) {
    return CLIMATE_ADVOCACY_IMAGE;
  }

  // Embracing Change article uses the new uploaded image
  if (title.toLowerCase().includes("embracing change") || 
      title.toLowerCase().includes("call to action")) {
    return EMBRACING_CHANGE_IMAGE;
  }

  // Laudato Si' article uses the specific uploaded image
  if (title.toLowerCase().includes("laudato si") || 
      title.toLowerCase().includes("caring for our common home")) {
    return LAUDATO_SI_IMAGE;
  }

  // If URL is a Supabase Storage URL, return as is
  if (url.startsWith('http')) {
    return url;
  }

  // If URL starts with /lovable-uploads/, convert to Supabase Storage URL
  if (url.startsWith('/lovable-uploads/')) {
    const filename = url.replace('/lovable-uploads/', '');
    return `${SUPABASE_STORAGE_URL}/${filename}`;
  }

  // If it's just a filename, assume it's in Supabase Storage
  return `${SUPABASE_STORAGE_URL}/${url}`;
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
      // Direct database update instead of RPC call to avoid TypeScript issues
      const { data: currentArticle, error: fetchError } = await supabase
        .from('articles')
        .select('likes')
        .eq('id', articleId)
        .single();

      if (fetchError) throw fetchError;

      const newLikes = increment 
        ? (currentArticle.likes || 0) + 1 
        : Math.max((currentArticle.likes || 0) - 1, 0);

      const { data, error } = await supabase
        .from('articles')
        .update({ likes: newLikes })
        .eq('id', articleId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      queryClient.invalidateQueries({ queryKey: ['article', variables.articleId] });
    }
  });
};
