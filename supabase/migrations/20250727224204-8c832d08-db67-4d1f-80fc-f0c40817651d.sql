INSERT INTO public.article_likes (id, likes) 
VALUES ('0c321835-f1dc-4605-91d4-092c252720dd', 0)
ON CONFLICT (id) DO NOTHING;