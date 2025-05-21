
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-beige/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">About Us</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, our founder, and our commitment to empowering African communities.
          </p>
        </div>
      </section>

      {/* Founder's Bio */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-african-dark">Founder's Bio</h2>
              <div className="w-20 h-1 bg-african-orange mb-8"></div>
              
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold mb-2 text-african-brown">Munya Touch</h3>
                <p className="mb-4 text-lg">
                  Born Munyaradzi Jeranyama, Munya is a 33-year-old African ShowBiz entrepreneur, 
                  social worker in training, journalist, and climate change social media advocate.
                </p>
                
                <p className="mb-4">
                  He has worked in the South African entertainment industry at Kalawa Jazmee Records under Bra Scotch, 
                  collaborating with various artists, including Nokwazi, Professor, Busiswa, Uhuru, and DJ Maphorisa. 
                  His experience includes organizing festivals, artist booking and management, and public relations.
                </p>
                
                <p className="mb-4">
                  Munya also served as an entertainment journalist at Starstudded Online Magazine, which had a daily traffic 
                  of 2 million visitors at its peak. Later, he became a publicist for Buffalo Souljah and DJ Waxxy around 2017.
                </p>
                
                <p className="mb-4">
                  After that, he worked with Azania Productions, a female-owned film production company, contributing to films 
                  featured on Netflix, VIU, Showmax, and eTV's eVOD, including <em>Six In The City</em> (VIU & Netflix), 
                  <em>Mr. Johnson</em> (Showmax), and <em>ASHES of a Red Cow</em> (eVOD).
                </p>
                
                <p className="mb-4">
                  Munya has hosted festivals, including the famous Joburg Shutdown, which aimed to combat xenophobia 
                  in South Africa by bringing together artists from Zimbabwe and South Africa.
                </p>
                
                <p>
                  With a deep concern about increasing waste pollution, deforestation, and climate change-related issues 
                  in low-income areas of Africa, Munya started "Dear African Child" to address these pressing issues and 
                  connect with Africa's youth, who make up over 60% of the continent's population.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-african-green hover:bg-african-green/90 text-white">
                  <Link to="/contact">Connect with Munya</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Munya Touch - Founder" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Munya Touch, Founder of Dear African Child</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-african-brown/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-african-dark">Our Mission</h3>
              <div className="w-16 h-1 bg-african-orange mb-6"></div>
              <p className="text-lg">
                "To empower African communities through education and advocacy, promoting mental health, social equity, and environmental justice."
              </p>
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Our Mission" 
                className="w-full h-auto rounded-lg mt-6"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-african-dark">Our Vision</h3>
              <div className="w-16 h-1 bg-african-green mb-6"></div>
              <p className="text-lg">
                "A future where all Africans are informed, supported, and empowered to thrive in a just and sustainable world."
              </p>
              <img 
                src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Our Vision" 
                className="w-full h-auto rounded-lg mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UN SDGs Alignment */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-african-dark">Alignment with UN SDGs</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            This blog is committed to raising awareness of the following UN Sustainable Development Goals:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500">
            <h3 className="text-xl font-bold mb-3">Goal 5: Gender Equality</h3>
            <p>
              Promoting gender equality and women's empowerment in African communities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
            <h3 className="text-xl font-bold mb-3">Goal 10: Reduced Inequalities</h3>
            <p>
              Addressing social inequalities to create a more equitable society.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <h3 className="text-xl font-bold mb-3">Goal 13: Climate Action</h3>
            <p>
              Advocating for urgent action to combat climate change and its impacts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
            <h3 className="text-xl font-bold mb-3">Goal 15: Life on Land</h3>
            <p>
              Supporting efforts to protect and restore healthy ecosystems and mitigate climate change.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
