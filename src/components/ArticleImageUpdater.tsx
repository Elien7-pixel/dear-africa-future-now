
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import ImageGenerator from './ImageGenerator';

const ArticleImageUpdater = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateArticleImage = async (imageUrl: string) => {
    setIsUpdating(true);
    
    try {
      console.log('Updating article image to:', imageUrl);
      
      // Update the article with the new image
      const { error } = await supabase
        .from('articles')
        .update({ 
          image_url: imageUrl,
          updated_at: new Date().toISOString()
        })
        .eq('title', 'EMBRACING CHANGE: A CALL TO ACTION');

      if (error) {
        console.error('Error updating article:', error);
        throw new Error(`Failed to update article: ${error.message}`);
      }

      console.log('Article updated successfully');
      toast.success('Article image updated successfully!');
      
      // Reload the page to show the new image
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error('Error updating article image:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to update article image');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-african-dark">Update Article Image</h3>
      <p className="text-gray-600 mb-4">
        Generate a new safari-themed image for the article "Embracing Change: A Call to Action"
      </p>
      
      <ImageGenerator onImageGenerated={updateArticleImage} />
      
      {isUpdating && (
        <p className="mt-4 text-sm text-gray-600">
          Updating article with new image...
        </p>
      )}
    </div>
  );
};

export default ArticleImageUpdater;
