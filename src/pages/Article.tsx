
import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useArticle, useLikeArticle, useUnlikeArticle } from '@/hooks/useArticles';
import CommentSection from '@/components/CommentSection';
import { format } from 'date-fns';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [hasLiked, setHasLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(0);
  
  if (!id) {
    return <Navigate to="/blog" replace />;
  }

  const { data: article, isLoading, error } = useArticle(id);
  const likeArticleMutation = useLikeArticle();
  const unlikeArticleMutation = useUnlikeArticle();

  useEffect(() => {
    if (article) {
      setCurrentLikes(article.likes);
    }
  }, [article]);

  const handleLike = () => {
    if (!article) return;
    
    if (hasLiked) {
      unlikeArticleMutation.mutate({ 
        articleId: article.id, 
        currentLikes: currentLikes 
      });
      setHasLiked(false);
      setCurrentLikes(prev => Math.max(0, prev - 1));
    } else {
      likeArticleMutation.mutate({ 
        articleId: article.id, 
        currentLikes: currentLikes 
      });
      setHasLiked(true);
      setCurrentLikes(prev => prev + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-african-orange"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-african-orange hover:bg-african-orange/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'mental health':
        return 'bg-emerald-100 text-emerald-700';
      case 'climate action':
        return 'bg-green-100 text-green-700';
      case 'equity and equality':
      case 'social equality':
        return 'bg-blue-100 text-blue-700';
      case 'inspirational':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-african-beige/60 text-african-brown';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-african-blue hover:text-african-blue/90 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {format(new Date(article.date), 'MMMM dd, yyyy')}
              </div>
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${
                  hasLiked 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                }`}
                disabled={likeArticleMutation.isPending || unlikeArticleMutation.isPending}
              >
                <Heart className={`h-4 w-4 ${hasLiked ? 'fill-current' : ''}`} />
                <span>{currentLikes}</span>
              </button>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">{article.title}</h1>
            <p className="text-xl text-gray-700">{article.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {article.image_url && (
              <div className="mb-8">
                <img 
                  src={article.image_url} 
                  alt={article.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
            
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </div>
            </div>

            <CommentSection articleId={article.id} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
