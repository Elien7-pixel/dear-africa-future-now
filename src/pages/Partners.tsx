
import React from 'react';

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
            <div className="h-96 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img 
                src="/lovable-uploads/8357f86d-2300-452c-9520-0b708d875d93.png" 
                alt="VCIA - Vaal Community In Action"
                className="w-full h-full object-cover"
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
    </div>
  );
};

export default Partners;
