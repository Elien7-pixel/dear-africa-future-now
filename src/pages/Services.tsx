
import React from 'react';
import { Button } from '@/components/ui/button';

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
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Therapy Session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-african-dark">Hello! I Need Therapy</h2>
                <div className="w-16 h-1 bg-african-orange mb-6"></div>
                <p className="mb-4 text-lg">
                  Our upcoming service aims to offer therapy sessions to Africans from low-income and marginalized communities 
                  who have been affected by climate change and other social challenges.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-african-brown">Key Features:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Free and low-cost therapy sessions with qualified professionals</li>
                  <li>Specialized support for climate refugees seeking safety</li>
                  <li>Group therapy sessions focusing on community healing</li>
                  <li>Virtual therapy options for those in remote areas</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button disabled className="bg-african-green/60 cursor-not-allowed">
                    Coming Soon
                  </Button>
                  <Button variant="outline">Join Waitlist</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Documentary Service */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Documentary Film Production" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-african-dark">Documentary Series</h2>
                <div className="w-16 h-1 bg-african-blue mb-6"></div>
                <p className="mb-4 text-lg">
                  We're producing a series of documentaries that highlight the impacts of climate change in African countries, 
                  showcasing both the challenges faced by communities and the innovative solutions being developed.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-african-brown">Focus Areas:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Climate change effects on rural and urban communities</li>
                  <li>Community-led environmental initiatives</li>
                  <li>Youth activism and involvement in climate action</li>
                  <li>The connection between environmental justice and social equality</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button disabled className="bg-african-blue/60 cursor-not-allowed">
                    In Production
                  </Button>
                  <Button variant="outline">Support This Project</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Climate Refugee Support */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Community Support" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-4 text-african-dark">Climate Refugee Support</h2>
                <div className="w-16 h-1 bg-african-orange mb-6"></div>
                <p className="mb-4 text-lg">
                  In partnership with NGOs, we are developing a program to provide comprehensive support to climate refugees, 
                  including mental health services, resource connections, and advocacy efforts.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-african-brown">Our Approach:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Free therapy and mental health support for displaced individuals and families</li>
                  <li>Resource directories and connection to local services</li>
                  <li>Community building among displaced populations</li>
                  <li>Advocacy for policy changes to better protect climate refugees</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button disabled className="bg-african-brown/60 cursor-not-allowed">
                    In Development
                  </Button>
                  <Button variant="outline">Partner With Us</Button>
                </div>
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
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-african-green hover:bg-african-green/90">
              Volunteer With Us
            </Button>
            <Button className="bg-african-blue hover:bg-african-blue/90">
              Become a Partner
            </Button>
            <Button className="bg-african-orange hover:bg-african-orange/90">
              Donate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
