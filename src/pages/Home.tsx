
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Globe, Mail, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { useArticles } from '@/hooks/useArticles';
import ArticleCard from '@/components/ArticleCard';
import ImageModal from '@/components/ImageModal';

const Home = () => {
  const { data: articles, isLoading } = useArticles();
  const featuredArticles = articles?.slice(0, 3) || [];
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-african-blue/20 via-african-green/10 to-african-beige/30 py-20 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/13af3390-8eef-4513-b440-e895683dde4f.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
            Dear African Child
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white mb-12 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            Welcome to Dear African Child—a blog dedicated to empowering and uplifting African communities through awareness and advocacy.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-transparent hover:bg-african-green/20 text-white px-3 py-2 md:px-8 md:py-3 shadow-lg text-sm md:text-base">
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-gradient-to-b from-white to-african-green/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-green">Our Mission</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
            To empower African communities through education and advocacy, promoting mental health, social and gender equalities and equities and environmental justice.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-container bg-gradient-to-b from-african-green/5 to-african-blue/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-green">Our Vision</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
            A future where every African child has access to mental health resources, lives in a sustainable 
            environment, and enjoys equal opportunities regardless of their background or circumstances.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-container bg-gradient-to-b from-african-blue/5 to-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg border transition-shadow">
            <div className="w-56 h-56 mx-auto mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/4beebcca-0f9d-43c6-aab8-9458e05e54a7.png" 
                alt="Climate Action"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-green">Climate Action</h3>
            <p className="text-gray-600 leading-relaxed">
              Addressing climate change challenges affecting African communities through education, advocacy, and sustainable practices.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg border transition-shadow">
            <div className="w-56 h-56 mx-auto mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/2b0541c8-9ee8-420c-af46-779a21599afc.png" 
                alt="Mental Health"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-green">Mental Health</h3>
            <p className="text-gray-600 leading-relaxed">
              Promoting mental wellness and providing resources for psychological support in underserved communities.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg border transition-shadow group">
            <div className="w-56 h-56 mx-auto mb-6 overflow-hidden rounded-lg relative">
              <img 
                src="/lovable-uploads/dbce2d24-6a96-453a-9739-e19f644a6c00.png" 
                alt="Equity and Equality"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <Button
                  onClick={() => setIsImageModalOpen(true)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 hover:bg-white/30 text-white border border-white/20"
                  size="sm"
                >
                  <ZoomIn className="mr-2 h-4 w-4" />
                  Enlarge
                </Button>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-green">Equity and Equality</h3>
            <p className="text-gray-600 leading-relaxed">
              Advocating for equal rights and opportunities for all Africans, regardless of gender, background, or social status.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="section-container bg-gradient-to-b from-white to-african-green/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-green">Latest Articles</h2>
            <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              Discover our latest insights and stories from the African community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-african-orange hover:bg-african-orange/90">
              <Link to="/blog">View All Articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="section-container bg-gradient-to-b from-white to-african-green/10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-green">Call to Action</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Join us in creating a brighter future for all Africans.
          </p>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="bg-gradient-to-b from-african-green/10 to-african-blue/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-african-orange mr-3" />
              <h2 className="text-3xl font-bold text-african-green">Stay Connected</h2>
            </div>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Subscribe to our newsletter and be the first to know about new articles, events, and initiatives.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        src="/lovable-uploads/dbce2d24-6a96-453a-9739-e19f644a6c00.png"
        alt="Equity and Equality"
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
      />
    </div>
  );
};

export default Home;
