
import React from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-orange/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">Our Partners</h1>
          <div className="w-20 h-1 bg-african-green mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            We collaborate with dedicated organizations that share our vision for a more equitable, environmentally conscious Africa.
          </p>
        </div>
      </section>

      {/* Main Partner */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 flex items-center justify-center p-8 bg-emerald-50">
                <div className="w-48 h-32 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c310d3f2-3baf-4246-b942-1ef14edc7f54.png" 
                    alt="VCIA - Vaal Community In Action" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-8">
                <h2 className="text-3xl font-bold mb-4 text-african-dark">VCIA (Vaal Community In Action)</h2>
                <div className="w-16 h-1 bg-african-orange mb-6"></div>
                <p className="mb-4 text-lg">
                  VCIA is a non-profit organization based in the Vaal area (south of Johannesburg) focusing on gender-based violence 
                  and climate change initiatives.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-african-brown">Our Collaboration:</h3>
                <p className="mb-4">
                  Our blog collaborates with VCIA on climate change activities, such as promoting waste segregation in public spaces 
                  like parks and schools by installing color-coded bins to reduce pollution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Partnerships */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-african-dark">Future Partnerships</h2>
            <div className="w-20 h-1 bg-african-green mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We are actively seeking partnerships with NGOs across Africa to initiate programs that combat climate change and 
              promote social and gender equality.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-african-dark">Organizations We Hope To Partner With:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="min-w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-african-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Environmental conservation organizations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="min-w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-african-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Mental health advocacy groups</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="min-w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-african-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Women's rights and gender equality organizations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="min-w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-african-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Youth development and education organizations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="min-w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-african-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Community development NGOs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="min-w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-african-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Government agencies focused on climate and social initiatives</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-african-brown hover:bg-african-brown/90 transition-colors">
                Propose a Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
