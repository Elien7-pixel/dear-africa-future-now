
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ArticleImageUpdater from '@/components/ArticleImageUpdater';

const UpdateArticleImage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-african-blue hover:text-african-blue/90 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-african-green mb-8 text-center">
            Update Article Image
          </h1>
          
          <ArticleImageUpdater />
        </div>
      </div>
    </div>
  );
};

export default UpdateArticleImage;
