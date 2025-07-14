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
    const colors = {
      'mental health': 'bg-emerald-100 text-emerald-700',
      'climate action': 'bg-green-100 text-green-700',
      'equity and equality': 'bg-blue-100 text-blue-700',
      'social equality': 'bg-blue-100 text-blue-700',
      'inspirational': 'bg-purple-100 text-purple-700'
    };
    
    return colors[category.toLowerCase()] || 'bg-african-beige/60 text-african-brown';
  };

  const articleUrl = `${window.location.origin}/article/${article.id}`;

  // Enhanced image URL handling with specific article detection
  const getImageUrl = (article: Article): string => {
    const title = article.title.toLowerCase();
    
    // Water crisis article gets river/boat image
    if (title.includes("water crisis") || title.includes("blue gold")) {
      return '/lovable-uploads/50c344c1-e86b-4356-984f-3557ad5270a1.png';
    }
    
    // Climate advocacy article gets the uploaded image
    if (title.includes("power of voices") || 
        title.includes("activists, influencers, and innovators") ||
        title.includes("climate change advocacy")) {
      return '/lovable-uploads/39b0c7b5-ccdc-44c6-a6c2-7c6bc5583f89.png';
    }
    
    // Use article's image_url or default
    return article.image_url || '/lovable-uploads/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png';
  };

  const imageUrl = getImageUrl(article);

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-shadow group">
      <div className="p-6">
        {/* Image with enhanced error handling */}
        <div className="flex items-center justify-center mb-4 h-48 overflow-hidden rounded-lg bg-gray-100">
          <img 
            src={imageUrl}
            alt={`Featured image for ${article.title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              e.currentTarget.src = '/lovable-uploads/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png';
              e.currentTarget.classList.add('object-contain', 'p-4');
            }}
            loading="lazy"
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

        <h3 className="text-xl font-bold mb-2 text-african-dark line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <Link 
          to={`/article/${article.id}`}
          className="inline-flex items-center text-african-blue hover:text-african-blue/90 transition-colors font-medium"
          onClick={() => window.scrollTo(0, 0)}
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
