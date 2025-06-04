
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">Our Partners</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Collaborating with organizations across Africa to create meaningful change and empower communities together.
          </p>
        </div>
      </section>

      {/* VCIA Partner */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
            <div className="h-96 overflow-hidden">
              <img 
                src="/lovable-uploads/8357f86d-2300-452c-9520-0b708d875d93.png" 
                alt="VCIA - Vaal Community In Action"
                className="w-full h-full md:object-cover object-contain"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-african-dark">VCIA (Vaal Community In Action)</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A non-profit organization based in the Vaal area (south of Johannesburg) focusing on gender-based violence and climate change. Our blog collaborates with VCIA on climate change activities, such as promoting waste segregation in public spaces like parks and schools by installing color-coded bins to reduce pollution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section-container bg-african-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-african-dark">Join Our Partnership Network</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We are actively seeking partnerships with NGOs, activists, municipalities, and corporates who share our vision of creating positive change across Africa. Together, we can amplify our impact and reach more communities in need.
          </p>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-african-dark">NGOs</h3>
                <p className="text-sm text-gray-600 mt-2">Non-profit organizations working on climate, health, and social issues</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-african-dark">Activists</h3>
                <p className="text-sm text-gray-600 mt-2">Individual advocates passionate about African development</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-african-dark">Municipalities</h3>
                <p className="text-sm text-gray-600 mt-2">Local governments committed to sustainable development</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-african-dark">Corporates</h3>
                <p className="text-sm text-gray-600 mt-2">Companies with social responsibility initiatives</p>
              </div>
            </div>
          </div>
          
          {/* Partner with us button */}
          <div className="text-center mt-12">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg">
              <Link to="/contact">Partner with us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
