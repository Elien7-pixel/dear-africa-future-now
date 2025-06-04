
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Globe, Heart, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">About Us</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our founder and the mission driving Dear African Child forward.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-african-dark">About</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Munya Touch (born Munya Jeranyama) is an accomplished music promoter, filmmaker, journalist, and climate change advocate. He possesses extensive experience in the South African entertainment industry, having worked at Kalawa Jazmee Records, one of Africa's largest black-owned record labels, under the mentorship of Bra Scotch. Munya has collaborated with a diverse array of artists, including Nokwazi, Professor, Busiswa, Uhuru, and DJ Maphorisa. His expertise encompasses festival organization, artist booking and management, and public relations.
                </p>
                <p>
                  From 2013 to 2017, Munya served as an entertainment journalist at Starstudded Online Magazine, which reached a peak of 2 million daily visitors. He subsequently worked as a publicist and events manager for DJ Waxxy(Nigeria).
                </p>
                <p>
                  Munya also made contributions at Azania Productions, a female-owned film production company, working on films featured on platforms such as Netflix, VIU, Showmax, and eTV's eVOD. Notable projects include Six In The City (VIU & Netflix), Mr. Johnson (Showmax), and ASHES of a Red Cow (eVOD).
                </p>
                <p>
                  One of the key events he hosted is the Joburg Shutdown Concert, aimed at uniting Zimbabwean and South African communities through artivism. This festival highlighted the contributions of Zimbabweans, one of the largest immigrant groups in South Africa, and provided a platform for emerging African artists to perform alongside established stars like Busiswa (South Africa), Winky D (Zimbabwe), DJ Tira (South Africa), and Paddy Watts (Zimbabwe).
                </p>
                <p>
                  During the COVID-19 pandemic, Munya initiated Acoustic Fridays, a virtual music show that showcased both upcoming and established Zimbabwean artists. This initiative garnered 100,000 views per show, aired on one of Zimbabwe's biggest entertainment and gossip social media blogs, Zimcelebs, promoting mental health and encouraging audiences to stay home during the lockdown.
                </p>
                <p>
                  In 2021, he collaborated with the legendary DJ Qness to launch the inaugural South African Amapiano Awards, aired on SABC 1, which attracted 50 million viewers and celebrated outstanding Amapiano artists in South Africa, contributing to public health efforts during the pandemic.
                </p>
                <p>
                  In 2023, Munya partnered with Thapelo Amad, the first Muslim Mayor of Johannesburg, to address climate change issues, focusing on reducing plastic pollution and promoting sustainability in Africa's busiest city.
                </p>
                <p>
                  Munya's concerns about rising waste pollution, deforestation, and climate change-related health issues—particularly in low-income areas—motivated him to establish Dear African Child. This blog aims to tackle these urgent issues and engage Africa's youth, who represent over 60% of the continent's population.
                </p>
                <p>
                  With the right partnerships and funding, he aspires to collaborate with NGOs across Africa to initiate programs that combat climate change and promote social and gender equality.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center">
              <div className="w-80 h-80 mx-auto mb-4 overflow-hidden rounded-full border-4 border-african-orange shadow-lg">
                <img 
                  src="/lovable-uploads/2d039ae0-ce71-4eee-8dc8-c42733018791.png" 
                  alt="Munya Touch - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-african-dark">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-african-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-african-dark">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To create awareness about climate change, promote mental health, and advocate for social equality 
            across African communities through storytelling, education, and community engagement.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-african-dark">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A future where every African child has access to mental health resources, lives in a sustainable 
            environment, and enjoys equal opportunities regardless of their background or circumstances.
          </p>
        </div>
      </section>

      {/* UN SDGs Section */}
      <section className="section-container bg-african-green/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-african-dark">Alignment with UN SDGs</h2>
          <p className="text-lg text-center mb-8 text-gray-700">
            This blog is committed to raising awareness of the following UN Sustainable Development Goals:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2 text-african-dark">Goal 5: Gender Equality</h3>
              <p className="text-sm text-gray-600">Promoting gender equality and women's empowerment in African communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2 text-african-dark">Goal 10: Reduced Inequalities</h3>
              <p className="text-sm text-gray-600">Addressing social inequalities to create a more equitable society.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-african-dark">Goal 13: Climate Action</h3>
              <p className="text-sm text-gray-600">Advocating for urgent action to combat climate change and its impacts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-african-dark">Goal 15: Life on Land</h3>
              <p className="text-sm text-gray-600">Supporting efforts to protect and restore healthy ecosystems and mitigate climate change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-container bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-african-dark">Get In Touch</h2>
          <p className="text-lg mb-6 text-gray-700">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          <Button asChild className="bg-african-orange hover:bg-african-orange/90 text-white px-8 py-3">
            <a href="mailto:dear@africanchild.org">
              Contact Us
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
