
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-african-blue/20 via-african-green/10 to-african-beige/30 py-20 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/13af3390-8eef-4513-b440-e895683dde4f.png')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
            Dear African Child
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white mb-8 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            Welcome to Dear African Child—a blog dedicated to empowering and uplifting African communities through awareness and advocacy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-african-green hover:bg-african-green/90 text-white px-8 py-3 shadow-lg">
              <Link to="/blog">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-gradient-to-b from-white to-african-green/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-dark">Our Mission</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
            To empower African communities through education and advocacy, promoting mental health, social and gender equalities and equities and environmental justice.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-container bg-gradient-to-b from-african-green/5 to-african-blue/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-dark">Our Vision</h2>
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
            <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/4beebcca-0f9d-43c6-aab8-9458e05e54a7.png" 
                alt="Climate Action"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-dark">Climate Action</h3>
            <p className="text-gray-600 leading-relaxed">
              Addressing climate change challenges affecting African communities through education, advocacy, and sustainable practices.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg border transition-shadow">
            <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/2b0541c8-9ee8-420c-af46-779a21599afc.png" 
                alt="Mental Health"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-dark">Mental Health</h3>
            <p className="text-gray-600 leading-relaxed">
              Promoting mental wellness and providing resources for psychological support in underserved communities.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg border transition-shadow">
            <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/dbce2d24-6a96-453a-9739-e19f644a6c00.png" 
                alt="Equity and Equality"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-dark">Equity and Equality</h3>
            <p className="text-gray-600 leading-relaxed">
              Advocating for equal rights and opportunities for all Africans, regardless of gender, background, or social status.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-container bg-gradient-to-b from-white to-african-green/10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-dark">Call to Action</h2>
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
              <h2 className="text-3xl font-bold text-african-dark">Stay Connected</h2>
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
    </div>
  );
};

export default Home;
