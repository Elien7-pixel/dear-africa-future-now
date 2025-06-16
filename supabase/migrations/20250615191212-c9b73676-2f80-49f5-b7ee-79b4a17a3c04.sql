


-- Remove all existing articles
DELETE FROM articles;

-- Insert the new article with the correct image
INSERT INTO articles (
  id,
  title,
  excerpt,
  content,
  category,
  date,
  image_url,
  likes
) VALUES (
  gen_random_uuid(),
  'EMBRACING CHANGE: A CALL TO ACTION',
  'Africa is not only a continent of breathtaking beauty, rich biodiversity, and vibrant cultures but also a land facing critical environmental challenges.',
  'Article by: Oswell Jeranyama
Social Work Practitioner.
Republic of Ireland.

Africa is not only a continent of breathtaking beauty, rich biodiversity, and vibrant cultures but also a land facing critical environmental challenges. From widespread deforestation and expanding deserts to the increasingly dire consequences of climate change, the threats are vast and urgent. These are not abstract issues; they represent the lives, aspirations, and heritage of countless communities.

However, there is a beacon of hope: You. Your ideas, passion, and resilience are the catalysts for a brighter future. This space is more than just a platform; it embodies the spirit of unity and determination, showcasing what is possible when we collectively embrace knowledge and innovation.

Together, we can honour the wisdom of our ancestors, promote solutions born from our communities, and hold the global community accountable for its role. By planting seeds of transformation, advocating for justice, and crafting a sustainable narrative, we can change the course of history. The journey will be challenging, but remember, every monumental change begins with a single, purposeful step.

To the young dreamers, determined activists, and guardians of our planet—this is your home to voice your thoughts, expand your understanding, and drive action. The future is not simply a legacy; it is a creation, built with intention and courage.',
  'Climate Action',
  CURRENT_DATE,
  'lovable-uploads/c2aa71b4-080a-444c-a87e-1bd455a074f1.png',
  0
);

-- Create article_likes table for enhanced like functionality
CREATE TABLE IF NOT EXISTS public.article_likes (
  id UUID NOT NULL PRIMARY KEY,
  likes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert the article into article_likes table with the same ID
INSERT INTO article_likes (id, likes)
SELECT id, 0 FROM articles;

-- Enable realtime for article_likes table
ALTER TABLE public.article_likes REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.article_likes;

