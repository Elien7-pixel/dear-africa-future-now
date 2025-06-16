
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
}

const ImageGenerator = ({ onImageGenerated }: ImageGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAndUploadImage = async () => {
    setIsGenerating(true);
    
    try {
      console.log('Starting image generation...');
      
      // Generate image using edge function
      const { data, error } = await supabase.functions.invoke('generate-article-image', {
        body: {
          prompt: 'A diverse group of African people having an animated conversation outside in a beautiful safari landscape. They are standing under an acacia tree with rolling hills and golden grasslands in the background. The lighting is warm and natural, capturing the essence of community dialogue in an African setting. The people are wearing a mix of traditional and modern clothing, showing engagement and passion in their discussion. Ultra-realistic, high quality photography style.'
        }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(`Failed to generate image: ${error.message}`);
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to generate image');
      }

      console.log('Image generated successfully');

      // Convert base64 to blob
      const base64Data = data.imageData.split(',')[1];
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });

      // Create a unique filename
      const filename = `generated-article-${Date.now()}.png`;

      // Convert blob to file
      const file = new File([blob], filename, { type: 'image/png' });

      console.log('Uploading image to storage...');

      // Upload to Supabase storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('images')
        .upload(filename, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error(`Failed to upload image: ${uploadError.message}`);
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filename);

      console.log('Image uploaded successfully:', publicUrl);
      
      onImageGenerated(publicUrl);
      toast.success('Image generated and uploaded successfully!');

    } catch (error) {
      console.error('Error in image generation process:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={generateAndUploadImage}
      disabled={isGenerating}
      className="bg-african-orange hover:bg-african-orange/90"
    >
      {isGenerating ? 'Generating Image...' : 'Generate Safari Image'}
    </Button>
  );
};

export default ImageGenerator;
