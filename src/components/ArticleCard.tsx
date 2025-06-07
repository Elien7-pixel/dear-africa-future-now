
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Heart, Share2 } from 'lucide-react';
import type { Article } from '@/hooks/useArticles';
import { useLikeArticle } from '@/hooks/useArticles';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const likeArticleMutation = useLikeArticle();
  const { toast } = useToast();

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    likeArticleMutation.mutate({ 
      articleId: article.id, 
      currentLikes: article.likes || 0
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const url = `${window.location.origin}/article/${article.id}`;
    
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: url,
      }).catch((error) => {
        console.log('Error sharing:', error);
        fallbackShare(url);
      });
    } else {
      fallbackShare(url);
    }
  };

  const fallbackShare = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Link Copied",
        description: "Article link has been copied to your clipboard!",
      });
    }).catch(() => {
      toast({
        title: "Share",
        description: `Share this article: ${url}`,
      });
    });
  };

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

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'mental health':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'climate action':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'equity and equality':
      case 'social equality':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        );
    }
  };

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        {article.image_url ? (
          <img 
            src={article.image_url} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          getCategoryIcon(article.category)
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
          <div className="flex items-center gap-3">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(article.date), 'MMM dd, yyyy')}
            </div>
            <button
              onClick={handleLike}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600 transition-colors"
              disabled={likeArticleMutation.isPending}
            >
              <Heart className="h-4 w-4" />
              <span>{article.likes || 0}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-african-dark line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
        <Link 
          to={`/article/${article.id}`}
          className="inline-flex items-center text-african-blue hover:text-african-blue/90 transition-colors"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
