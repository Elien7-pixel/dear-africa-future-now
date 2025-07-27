import { supabase } from "@/integrations/supabase/client";

// List of images that need to be uploaded to Supabase Storage
const imagesToUpload = [
  '7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png',
  '50c344c1-e86b-4356-984f-3557ad5270a1.png', 
  '47876403-bc33-4a8f-aee5-faa8c47d4090.png',
  '1e400cbe-7f12-44b4-b2a0-111642b17d08.png',
  '561f4c7e-ebc5-49b6-bcca-0707ad33c4c2.png'
];

export async function uploadImagesToSupabase() {
  console.log('Starting image upload to Supabase Storage...');
  
  for (const imageName of imagesToUpload) {
    try {
      // Fetch the image from the public folder
      const response = await fetch(`/lovable-uploads/${imageName}`);
      if (!response.ok) {
        console.error(`Failed to fetch ${imageName}:`, response.statusText);
        continue;
      }

      const blob = await response.blob();
      
      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('article-images')
        .upload(imageName, blob, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) {
        console.error(`Error uploading ${imageName}:`, error);
      } else {
        console.log(`Successfully uploaded ${imageName}:`, data);
      }
    } catch (error) {
      console.error(`Error processing ${imageName}:`, error);
    }
  }
  
  console.log('Image upload process completed.');
}