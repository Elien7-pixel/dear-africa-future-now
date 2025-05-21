
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">About Us</h1>
          <div className="eco-divider animate-fade-in"></div>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Learn about our mission, our founder, and our commitment to empowering African communities.
          </p>
        </div>
      </section>

      {/* Founder's Bio */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 fade-in-element">
              <h2 className="text-3xl font-bold mb-6 text-primary">Founder's Bio</h2>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold mb-2 text-accent">Munya Touch</h3>
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
            </div>
            
            <div className="order-1 md:order-2 fade-in-element">
              <img 
                src="/lovable-uploads/51f0231d-5a56-422a-98f3-3ecdac19ef9a.png" 
                alt="Munya Touch - Founder" 
                className="rounded-lg shadow-xl w-full h-auto object-cover animate-scale-in"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Munya Touch, Founder of Dear African Child</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] fade-in-element mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Mission</h3>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className="text-lg">
                "To empower African communities through education and advocacy, promoting mental health, social equity, and environmental justice."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] fade-in-element">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Vision</h3>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className="text-lg">
                "A future where all Africans are informed, supported, and empowered to thrive in a just and sustainable world."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDGs Alignment */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary fade-in-element">Alignment with UN SDGs</h2>
          <div className="eco-divider fade-in-element"></div>
          <p className="text-lg max-w-3xl mx-auto fade-in-element">
            This blog is committed to raising awareness of the following UN Sustainable Development Goals:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500 transition-transform duration-300 hover:shadow-lg hover:translate-y-[-4px] staggered-item">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Goal 5: Gender Equality</h3>
            <p>
              Promoting gender equality and women's empowerment in African communities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 transition-transform duration-300 hover:shadow-lg hover:translate-y-[-4px] staggered-item">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Goal 10: Reduced Inequalities</h3>
            <p>
              Addressing social inequalities to create a more equitable society.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 transition-transform duration-300 hover:shadow-lg hover:translate-y-[-4px] staggered-item">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                <path d="M17 6h6v6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Goal 13: Climate Action</h3>
            <p>
              Advocating for urgent action to combat climate change and its impacts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-600 transition-transform duration-300 hover:shadow-lg hover:translate-y-[-4px] staggered-item">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 16s1.5 2 4 2 4-2 4-2"></path>
                <path d="M12 12a3 3 0 0 0 0 6"></path>
                <path d="M8 9h8"></path>
                <path d="M8 6h8"></path>
                <path d="M9 3h6"></path>
                <path d="M10 20s3 2 6 0"></path>
              </svg>
            </div>
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
