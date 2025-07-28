-- Update all articles to use the correct Supabase Storage URLs
UPDATE articles 
SET image_url = 'https://pgvuicbtevezvusewztx.supabase.co/storage/v1/object/public/article-images/561f4c7e-ebc5-49b6-bcca-0707ad33c4c2.png' 
WHERE title ILIKE '%laudato si%' OR title ILIKE '%caring for our common home%';

UPDATE articles 
SET image_url = 'https://pgvuicbtevezvusewztx.supabase.co/storage/v1/object/public/article-images/47876403-bc33-4a8f-aee5-faa8c47d4090.png' 
WHERE title ILIKE '%power of voices%' OR title ILIKE '%climate change advocacy%';

UPDATE articles 
SET image_url = 'https://pgvuicbtevezvusewztx.supabase.co/storage/v1/object/public/article-images/50c344c1-e86b-4356-984f-3557ad5270a1.png' 
WHERE title ILIKE '%water crisis%' OR title ILIKE '%blue gold%';

UPDATE articles 
SET image_url = 'https://pgvuicbtevezvusewztx.supabase.co/storage/v1/object/public/article-images/1e400cbe-7f12-44b4-b2a0-111642b17d08.png' 
WHERE title ILIKE '%embracing change%' OR title ILIKE '%call to action%';

UPDATE articles 
SET image_url = 'https://pgvuicbtevezvusewztx.supabase.co/storage/v1/object/public/article-images/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png' 
WHERE image_url IS NULL OR image_url = '' OR image_url LIKE '/lovable-uploads/%';