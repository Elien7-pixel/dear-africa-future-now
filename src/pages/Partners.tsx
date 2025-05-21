
import React from 'react';
import { Button } from '@/components/ui/button';
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
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="VCIA Organization" 
                  className="w-full h-full object-cover"
                />
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
                <h3 className="text-xl font-semibold mb-3 text-african-brown">Joint Initiatives:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Community waste management programs</li>
                  <li>Educational workshops on environmental sustainability</li>
                  <li>Gender-based violence awareness campaigns</li>
                  <li>Youth empowerment programs focused on climate action</li>
                </ul>
                <Button className="bg-african-green hover:bg-african-green/90">
                  Learn More About VCIA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-african-dark">Our Impact Together</h2>
            <div className="w-20 h-1 bg-african-orange mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-african-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-african-dark">500+</h3>
              <p className="text-gray-600">
                Community members educated on waste management and recycling
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-african-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-african-dark">20+</h3>
              <p className="text-gray-600">
                Color-coded waste bins installed in public spaces
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-african-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-african-dark">300+</h3>
              <p className="text-gray-600">
                Women and girls supported through gender-based violence awareness programs
              </p>
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
              <Button asChild className="bg-african-brown hover:bg-african-brown/90 text-white">
                <Link to="/contact">Propose a Partnership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
