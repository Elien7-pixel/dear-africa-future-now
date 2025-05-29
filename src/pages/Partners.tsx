
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Globe, Users } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Vision Care International Africa (VCIA)',
      description: 'Leading organization focused on providing comprehensive eye care services and vision health education across African communities.',
      logo: '/lovable-uploads/c3a45e17-d891-4292-b018-33c6f675b6df.png',
      website: '#',
      location: 'Pan-African',
      focus: 'Healthcare & Vision'
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Users className="h-12 w-12 text-african-orange" />,
      title: 'Community Impact',
      description: 'Together, we reach more communities and create lasting positive change across Africa.'
    },
    {
      icon: <Globe className="h-12 w-12 text-african-blue" />,
      title: 'Shared Resources',
      description: 'Pooling our resources and expertise to maximize the impact of our programs and initiatives.'
    },
    {
      icon: <MapPin className="h-12 w-12 text-african-green" />,
      title: 'Local Presence',
      description: 'Our partners help us maintain a strong local presence in communities across the continent.'
    }
  ];

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

      {/* Current Partners */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-african-dark">Current Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work alongside these incredible organizations who share our vision for a better Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-50 flex items-center justify-center p-8">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-african-dark">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-african-orange mr-2" />
                    {partner.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Globe className="h-4 w-4 text-african-blue mr-2" />
                    {partner.focus}
                  </div>
                </div>

                <Button asChild className="w-full bg-african-orange hover:bg-african-orange/90 text-white">
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-african-beige/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-african-dark">Why Partner With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our partnerships are built on shared values and a commitment to creating positive change across African communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-african-dark">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-african-dark">Become a Partner</h2>
          <p className="text-xl text-gray-600 mb-8">
            Are you an organization committed to empowering African communities? We'd love to explore partnership opportunities with you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-african-dark">NGOs & Non-Profits</h3>
              <p className="text-gray-600 mb-4">
                Join forces with us to amplify your impact and reach more communities in need.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Shared program implementation</li>
                <li>• Resource and expertise exchange</li>
                <li>• Joint advocacy initiatives</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="text-xl font-bold mb-3 text-african-dark">Corporate Partners</h3>
              <p className="text-gray-600 mb-4">
                Support meaningful change while fulfilling your corporate social responsibility goals.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Funding and sponsorship opportunities</li>
                <li>• Employee volunteer programs</li>
                <li>• Brand alignment with social impact</li>
              </ul>
            </div>
          </div>

          <Button asChild size="lg" className="bg-african-orange hover:bg-african-orange/90 text-white">
            <Link to="/contact">Start a Partnership</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
