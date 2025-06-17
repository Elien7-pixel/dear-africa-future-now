
-- Enable Row Level Security on article_likes table
ALTER TABLE public.article_likes ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow all users to read article likes (since this is public data)
CREATE POLICY "Allow public read access to article likes" 
ON public.article_likes 
FOR SELECT 
USING (true);

-- Create a policy to allow all users to update article likes (for the like functionality)
CREATE POLICY "Allow public update access to article likes" 
ON public.article_likes 
FOR UPDATE 
USING (true);
