-- Create a storage bucket for article images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('article-images', 'article-images', true);

-- Create policy to allow public read access to article images
CREATE POLICY "Article images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'article-images');

-- Create policy to allow authenticated users to upload article images
CREATE POLICY "Authenticated users can upload article images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'article-images' AND auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update article images
CREATE POLICY "Authenticated users can update article images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'article-images' AND auth.role() = 'authenticated');