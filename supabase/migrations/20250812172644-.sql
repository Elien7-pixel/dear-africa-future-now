-- Update the narrative sovereignty article to use the uploaded image
UPDATE articles 
SET image_url = '/lovable-uploads/2e8b0e1e-b094-4c3d-aab4-50ef1e874eb4.png',
    updated_at = NOW()
WHERE title = 'NARRATIVE SOVEREIGNTY';