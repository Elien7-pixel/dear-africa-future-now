-- Update the Laudato Si article to use the new generated image
UPDATE articles 
SET image_url = '/src/assets/laudato-si-image.jpg'
WHERE title ILIKE '%laudato si%' OR title ILIKE '%caring for our common home%';