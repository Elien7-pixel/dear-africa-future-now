
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">Hello! I Need Therapy</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img 
                src="/lovable-uploads/a7f730c4-c941-4879-a940-4ff30d41a754.png" 
                alt="Hello! I Need Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-african-dark">Overview</h2>
            <p className="text-lg text-gray-700">
              Offering therapy sessions to Africans from low-income/marginalized communities affected by climate change.
            </p>
          </div>

          {/* Free Therapy for Climate Refugees */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-african-dark">Free Therapy for Climate Refugees</h2>
            <p className="text-lg text-gray-700">
              Collaborating with NGOs to provide mental health support to climate refugees seeking safety.
            </p>
          </div>

          {/* Documentaries */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-african-dark">Documentaries</h2>
            <p className="text-lg text-gray-700">
              Producing documentaries that highlight the impacts of climate change in African countries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
