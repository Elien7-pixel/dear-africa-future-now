
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Article } from '@/hooks/useArticles';
import { format } from 'date-fns';
import EnhancedShareButton from './EnhancedShareButton';
import EnhancedLikeButton from './EnhancedLikeButton';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
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

  const articleUrl = `${window.location.origin}/article/${article.id}`;

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/lovable-uploads/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png" 
            alt="African community discussion"
            className="h-12 w-12 object-cover rounded"
            onError={(e) => {
              console.error('Article card image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
          <div className="flex items-center gap-3">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(article.date), 'MMM dd, yyyy')}
            </div>
            <EnhancedLikeButton articleId={article.id} />
            <EnhancedShareButton
              title={article.title}
              excerpt={article.excerpt}
              url={articleUrl}
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-african-dark line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
        <Link 
          to={`/article/${article.id}`}
          className="inline-flex items-center text-african-blue hover:text-african-blue/90 transition-colors"
          onClick={() => window.scrollTo(0, 0)}
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
