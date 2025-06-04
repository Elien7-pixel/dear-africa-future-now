
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-african-blue/20 via-african-green/10 to-african-beige/30 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c310d3f2-3baf-4246-b942-1ef14edc7f54.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-african-dark">
            Dear African Child
          </h1>
          <div className="w-24 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            Empowering Africa's youth through climate action, mental health awareness, and social equality initiatives across the continent.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-african-orange hover:bg-african-orange/90 text-white px-8 py-3">
              <Link to="/blog">Explore Our Stories <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-african-blue text-african-blue hover:bg-african-blue hover:text-white px-8 py-3">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-dark">Our Mission</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
            To create awareness about climate change, promote mental health, and advocate for social equality 
            across African communities through storytelling, education, and community engagement.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-container bg-african-blue/5">
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
      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-dark">Climate Action</h3>
            <p className="text-gray-600 leading-relaxed">
              Addressing climate change challenges affecting African communities through education, advocacy, and sustainable practices.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-dark">Mental Health</h3>
            <p className="text-gray-600 leading-relaxed">
              Promoting mental wellness and providing resources for psychological support in underserved communities.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-african-dark">Social Equality</h3>
            <p className="text-gray-600 leading-relaxed">
              Advocating for equal rights and opportunities for all Africans, regardless of gender, background, or social status.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-container bg-african-green/10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-african-dark">Call to Action</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Join us in creating a brighter future for all Africans.
          </p>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="bg-african-blue/10 py-16">
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
