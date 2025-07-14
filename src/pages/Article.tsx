import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useArticle } from '@/hooks/useArticles';
import CommentSection from '@/components/CommentSection';
import { format } from 'date-fns';
import EnhancedShareButton from '@/components/EnhancedShareButton';
import EnhancedLikeButton from '@/components/EnhancedLikeButton';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article, isLoading, error } = useArticle(id);

  // Enhanced image URL handling with specific article detection
  const getImageUrl = (article: any): string => {
    if (!article) return '/lovable-uploads/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png';
    
    const title = article.title.toLowerCase();
    
    // Water crisis article gets river/boat image
    if (title.includes("water crisis") || title.includes("blue gold")) {
      return '/lovable-uploads/50c344c1-e86b-4356-984f-3557ad5270a1.png';
    }
    
    // Climate advocacy article uses the uploaded protest image
    if (title.includes("power of voices") || 
        title.includes("activists, influencers, and innovators") ||
        title.includes("climate change advocacy")) {
      return '/lovable-uploads/47876403-bc33-4a8f-aee5-faa8c47d4090.png';
    }

    // Embracing Change article uses the new uploaded image
    if (title.includes("embracing change") || 
        title.includes("call to action")) {
      return '/lovable-uploads/1e400cbe-7f12-44b4-b2a0-111642b17d08.png';
    }
    
    // Use article's image_url or default
    return article.image_url || '/lovable-uploads/7dfb5ad9-690c-419d-b7f0-376e1d5ba627.png';
  };

  // Scroll to top and set meta tags
  useEffect(() => {
    if (!article) return;

    window.scrollTo(0, 0);
    document.title = `${article.title} - Dear African Child`;

    // Update social meta tags
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const imageUrl = getImageUrl(article);
    const fullImageUrl = imageUrl.startsWith('http') 
      ? imageUrl 
      : `${window.location.origin}${imageUrl}`;

    setMetaTag('og:title', article.title);
    setMetaTag('og:description', article.excerpt);
    setMetaTag('og:image', fullImageUrl);
    setMetaTag('og:url', window.location.href);

    return () => {
      document.title = 'Dear African Child';
    };
  }, [article]);

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

  const articleUrl = window.location.href;
  const imageUrl = getImageUrl(article);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="bg-african-blue/5 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-african-blue hover:text-african-blue/90 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {format(new Date(article.date), 'MMMM dd, yyyy')}
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <EnhancedLikeButton articleId={article.id} />
                <EnhancedShareButton
                  title={article.title}
                  excerpt={article.excerpt}
                  url={articleUrl}
                />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-african-dark mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-gray-700">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="mb-12">
              <img 
                src={imageUrl}
                alt={article.title}
                className="w-full h-auto max-h-[32rem] object-cover rounded-lg mx-auto"
                onError={(e) => {
                  console.error('Article image failed to load:', imageUrl);
                  // Hide the image if it fails to load, don't show fallback
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
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
