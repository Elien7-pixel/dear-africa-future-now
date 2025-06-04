
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">Hello! I Need Therapy</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <div className="bg-african-orange text-white px-6 py-3 rounded-full inline-block text-lg font-semibold">
            Coming Soon
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/a7f730c4-c941-4879-a940-4ff30d41a754.png" 
                alt="Hello! I Need Therapy" 
                className="w-full h-full md:object-cover object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview - Centered */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-african-dark">Overview</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Offering therapy sessions to Africans from low-income/marginalized communities affected by climate change.
            </p>
          </div>

          {/* Subsections */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Free Therapy for Climate Refugees */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold mb-4 text-african-dark">Free Therapy for Climate Refugees</h3>
              <p className="text-gray-700">
                Collaborating with NGOs to provide mental health support to climate refugees seeking safety.
              </p>
            </div>

            {/* Documentaries */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold mb-4 text-african-dark">Documentaries</h3>
              <p className="text-gray-700">
                Producing documentaries that highlight the impacts of climate change in African countries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
