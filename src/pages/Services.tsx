
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Mental Health Support',
      description: 'Comprehensive mental health resources, counseling services, and community support programs tailored for African communities.',
      features: ['Individual Counseling', 'Group Therapy Sessions', 'Community Workshops', 'Crisis Intervention'],
      image: '/lovable-uploads/c310d3f2-3baf-4246-b942-1ef14edc7f54.png',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 2,
      title: 'Climate Action Programs',
      description: 'Environmental initiatives and education programs to combat climate change and promote sustainability in African communities.',
      features: ['Environmental Education', 'Tree Planting Campaigns', 'Waste Management Programs', 'Renewable Energy Projects'],
      image: '/lovable-uploads/0d6ba091-696f-447f-8119-0d626392bf06.png',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      title: 'Social Equality Advocacy',
      description: 'Programs promoting gender equality, social justice, and human rights across African communities.',
      features: ['Gender Equality Workshops', 'Human Rights Education', 'Community Organizing', 'Policy Advocacy'],
      image: '/lovable-uploads/ea1b91a7-6cb4-4d55-a2d2-5d32bc8bd8bb.png',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      title: 'Youth Empowerment',
      description: 'Comprehensive programs designed to empower African youth through education, skills development, and leadership training.',
      features: ['Leadership Training', 'Skills Development', 'Mentorship Programs', 'Educational Scholarships'],
      image: '/lovable-uploads/c3a45e17-d891-4292-b018-33c6f675b6df.png',
      bgColor: 'bg-purple-50'
    },
    {
      id: 5,
      title: 'Community Health Education',
      description: 'Health education and awareness programs addressing prevalent health issues in African communities.',
      features: ['Health Screenings', 'Vaccination Campaigns', 'Nutrition Education', 'Disease Prevention'],
      image: '/lovable-uploads/e76b280b-d0fe-4af4-ad2e-90fef1fa575b.png',
      bgColor: 'bg-pink-50'
    },
    {
      id: 6,
      title: 'Educational Support',
      description: 'Educational programs and resources to improve literacy and educational outcomes in African communities.',
      features: ['Literacy Programs', 'School Supplies Distribution', 'Teacher Training', 'Digital Learning'],
      image: '/lovable-uploads/51f0231d-5a56-422a-98f3-3ecdac19ef9a.png',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">Our Services</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive programs and services designed to empower and uplift African communities through education, advocacy, and direct support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-shadow ${service.bgColor}`}>
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-african-dark">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="h-4 w-4 text-african-orange mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-african-orange hover:bg-african-orange/90 text-white">
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-african-green/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-african-dark">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Join us in our mission to create positive change across African communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/contact">Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-african-orange text-african-orange hover:bg-african-orange hover:text-white">
              <Link to="/blog">Read Our Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
