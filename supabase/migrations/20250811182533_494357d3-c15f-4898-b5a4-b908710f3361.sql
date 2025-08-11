-- Allow anyone to insert articles (for public article creation)
CREATE POLICY "Anyone can create articles" 
ON public.articles 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to update articles (for likes and edits)
CREATE POLICY "Anyone can update articles" 
ON public.articles 
FOR UPDATE 
USING (true);