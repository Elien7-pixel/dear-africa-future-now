import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { uploadImagesToSupabase } from '@/utils/uploadImages';
import { useToast } from '@/hooks/use-toast';

export function ImageUploadButton() {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleUpload = async () => {
    setIsUploading(true);
    try {
      await uploadImagesToSupabase();
      toast({
        title: "Success",
        description: "All images have been uploaded to Supabase Storage!",
      });
    } catch (error) {
      console.error('Upload failed:', error);
      toast({
        title: "Error",
        description: "Failed to upload images. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Button 
      onClick={handleUpload} 
      disabled={isUploading}
      className="fixed top-4 right-4 z-50"
    >
      {isUploading ? 'Uploading Images...' : 'Upload Images to Supabase'}
    </Button>
  );
}