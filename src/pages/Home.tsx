
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-[url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]">
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 py-32 md:py-48 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Dear African Child
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Welcome to Dear African Child, a social media blog where we empower and uplift African communities through awareness and advocacy.
          </p>
          <Button asChild size="lg" className="bg-african-orange hover:bg-african-orange/90 text-white text-lg px-8">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-african-dark">Our Mission</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            To empower African communities through education and advocacy, promoting mental health, social equity, and environmental justice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-african-beige/20 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-african-green rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-african-dark">Mental Health</h3>
            <p className="text-center text-gray-600">
              Providing resources and breaking stigmas around mental health in African communities.
            </p>
          </div>
          
          <div className="bg-african-beige/20 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-african-brown rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-african-dark">Social Equity</h3>
            <p className="text-center text-gray-600">
              Advocating for gender equality and social justice across African communities.
            </p>
          </div>
          
          <div className="bg-african-beige/20 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-african-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-african-dark">Climate Action</h3>
            <p className="text-center text-gray-600">
              Raising awareness about climate change and promoting environmental justice in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-african-green/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-african-dark">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating a brighter future for all Africans. Together we can make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-african-orange hover:bg-african-orange/90 text-white">
              <Link to="/blog">Read Our Blog</Link>
            </Button>
            <Button asChild size="lg" className="bg-african-brown hover:bg-african-brown/90 text-white">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts - Placeholder */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-african-dark">Latest Articles</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden shadow-md card-hover">
              <img 
                src={`https://source.unsplash.com/random/400x250?africa,nature,${item}`} 
                alt="Blog post" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-african-dark">Blog Post Title</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.
                </p>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-african-orange hover:underline"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-african-blue hover:bg-african-blue/90 text-white">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
