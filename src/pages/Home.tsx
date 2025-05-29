
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { useArticles } from '@/hooks/useArticles';
import ArticleCard from '@/components/ArticleCard';

const Home = () => {
  const staggeredRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { data: articles, isLoading } = useArticles();

  useEffect(() => {
    // Animation observer for scrolling elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-element').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with the uploaded image */}
      <section className="hero-section" style={{ 
        backgroundImage: `url('/lovable-uploads/3fcfa1e1-008c-4072-a04e-cdb0d43488c2.png')`,
        backgroundPosition: 'center 20%', 
        backgroundSize: 'cover' 
      }}>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 py-32 md:py-48 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Dear African Child
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Welcome to Dear African Child—a blog dedicated to empowering and uplifting African communities through awareness and advocacy.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 animate-scale-in">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-gradient-to-b from-white to-emerald-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary fade-in-element">Our Mission</h2>
          <div className="eco-divider fade-in-element"></div>
          <p className="text-xl max-w-3xl mx-auto fade-in-element">
            To empower African communities through education and advocacy, promoting mental health, social equity, and environmental justice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="eco-card staggered-item" ref={el => staggeredRefs.current[0] = el}>
            <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center mb-6 mx-auto overflow-hidden">
              <img 
                src="/lovable-uploads/e76b280b-d0fe-4af4-ad2e-90fef1fa575b.png" 
                alt="Mental Health Matters" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-primary">Mental Health</h3>
            <p className="text-center text-gray-600">
              Providing resources and breaking stigmas around mental health in African communities.
            </p>
          </div>
          
          <div className="eco-card staggered-item" ref={el => staggeredRefs.current[1] = el}>
            <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center mb-6 mx-auto overflow-hidden">
              <img 
                src="/lovable-uploads/ea1b91a7-6cb4-4d55-a2d2-5d32bc8bd8bb.png" 
                alt="Social Equity - African Unity" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-primary">Social Equity</h3>
            <p className="text-center text-gray-600">
              Advocating for gender equality and social justice across African communities.
            </p>
          </div>
          
          <div className="eco-card staggered-item" ref={el => staggeredRefs.current[2] = el}>
            <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center mb-6 mx-auto overflow-hidden">
              <img 
                src="/lovable-uploads/0d6ba091-696f-447f-8119-0d626392bf06.png" 
                alt="Climate Action - Keep It Green" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-primary">Climate Action</h3>
            <p className="text-center text-gray-600">
              Raising awareness about climate change and promoting environmental justice in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary fade-in-element">Latest Articles</h2>
          <div className="eco-divider fade-in-element"></div>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-african-orange mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles?.slice(0, 3).map((article, index) => (
              <div key={article.id} className="staggered-item" ref={el => staggeredRefs.current[index + 3] = el}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white fade-in-element">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-african-beige/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-african-dark">Stay Connected</h2>
              <p className="text-lg text-gray-700">
                Subscribe to our newsletter for the latest articles and updates on African community empowerment.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <NewsletterSubscription />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
