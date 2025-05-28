
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-green/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">Our Services</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our upcoming services aimed at supporting African communities through mental health resources, climate change awareness, and more.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-african-brown text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Services Coming Soon</h2>
          <p className="mt-2 text-lg">
            We're currently developing these services to better support our communities.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Therapy Service */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/3 flex items-center justify-center p-12 bg-emerald-50">
                <div className="w-32 h-32 rounded-lg bg-white shadow-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c3a45e17-d891-4292-b018-33c6f675b6df.png" 
                    alt="Hello! I Need Therapy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-african-dark">Hello! I Need Therapy</h2>
                <div className="w-16 h-1 bg-african-orange mb-6"></div>
                <p className="mb-4 text-lg">
                  Our upcoming service aims to offer therapy sessions to Africans from low-income and marginalized communities 
                  who have been affected by climate change and other social challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Documentary Service */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3 flex items-center justify-center p-12 bg-blue-50">
                <div className="w-32 h-32 rounded-lg bg-white shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop" 
                    alt="Documentary Production" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-african-dark">Documentary Series</h2>
                <div className="w-16 h-1 bg-african-blue mb-6"></div>
                <p className="mb-4 text-lg">
                  We're producing a series of documentaries that highlight the impacts of climate change in African countries, 
                  showcasing both the challenges faced by communities and the innovative solutions being developed.
                </p>
              </div>
            </div>
          </div>

          {/* Climate Refugee Support */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/3 flex items-center justify-center p-12 bg-green-50">
                <div className="w-32 h-32 rounded-lg bg-white shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop" 
                    alt="Climate Refugee Support" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-african-dark">Climate Refugee Support</h2>
                <div className="w-16 h-1 bg-african-orange mb-6"></div>
                <p className="mb-4 text-lg">
                  In partnership with NGOs, we are developing a program to provide comprehensive support to climate refugees, 
                  including mental health services, resource connections, and advocacy efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-african-beige/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-african-dark">Get Involved</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            We welcome partnerships, volunteers, and support to help bring these services to life.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="bg-african-green hover:bg-african-green/90">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
