
import React, { useEffect } from 'react';
import { Users, Heart, Globe, Target, Award, Calendar } from 'lucide-react';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-green mb-6">About</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, vision, and the people driving positive change across Africa.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              Munya Touch (born Munya Jeranyama) is an accomplished music promoter, filmmaker, journalist, and climate change advocate. He possesses extensive experience in the South African entertainment industry, having worked under the mentorship of Bra Scotch, at Kamvalethu Entertainment which does artist management and Public Relations for Kalawa Jazmee Records - one of Africa's largest black-owned record labels. His expertise encompasses festival organization, artist booking and management, and public relations.
            </p>

            <p className="mb-6">
              From 2013 to 2017, Munya served as an entertainment journalist at Starstudded Online Magazine, which reached a peak of 2 million daily visitors. He subsequently worked as a publicist and events manager for DJ Waxxy (Nigeria).
            </p>

            <p className="mb-6">
              Munya also made contributions at Azania Productions, a female-owned film production company, working on films featured on platforms such as Netflix, VIU, Showmax, and eTV's eVOD. Notable projects include Six In The City (VIU & Netflix), Mr. Johnson (Showmax), and ASHES of a Red Cow (eVOD).
            </p>

            <p className="mb-6">
              One of the key events he hosted is the Joburg Shutdown Concert, aimed at uniting Zimbabwean and South African communities through artivism. This festival highlighted the contributions of Zimbabweans, one of the largest immigrant groups in South Africa, and provided a platform for emerging African artists to perform alongside established stars like Shasha (BET award winning artist) Busiswa (South Africa), Winky D (Zimbabwe), DJ Tira (South Africa), and Paddy Watts (Zimbabwe).
            </p>

            <p className="mb-6">
              During the COVID-19 pandemic, Munya initiated Acoustic Fridays, a virtual music show that showcased both upcoming and established Zimbabwean artists. This initiative garnered 100,000 views per show, aired on one of Zimbabwe's biggest entertainment and gossip social media blogs, Zimcelebs, promoting mental health and encouraging audiences to stay home during the lockdown.
            </p>

            <p className="mb-6">
              In 2021, he collaborated with the legendary DJ Qness to launch the inaugural South African Amapiano Awards, aired on SABC 1 (a popular south African TV channel), which attracted 5 million views and celebrated outstanding Amapiano artists in South Africa, contributing to public health efforts during the pandemic.
            </p>

            <p className="mb-6">
              In 2023, Munya partnered with Thapelo Amad, the first Muslim Mayor of Johannesburg, to address climate change issues, focusing on reducing plastic pollution and promoting sustainability in Africa's busiest city.
            </p>

            <p className="mb-6">
              Munya's concerns about rising waste pollution, deforestation, and climate change-related health issues—particularly in low-income areas—motivated him to establish Dear African Child. This blog aims to tackle these urgent issues and engage Africa's youth, who represent over 60% of the continent's population.
            </p>

            <p className="mb-6">
              With the right partnerships and funding, he aspires to collaborate with NGOs across Africa to initiate programs that combat climate change and promote social and gender equality.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-african-green/10 section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-african-green">Our Core Values</h2>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-african-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-african-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-african-green">Empowerment</h3>
            <p className="text-gray-600">
              We believe in empowering individuals and communities to create positive change from within.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-african-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-african-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-african-green">Unity</h3>
            <p className="text-gray-600">
              Through collaboration and unity, we can address the challenges facing our continent.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-african-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-african-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-african-green">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to environmental sustainability and climate action for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-african-green/20 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Target className="h-8 w-8 text-african-green" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-african-green">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower African communities through education and advocacy, promoting mental health, 
              social and gender equalities and equities and environmental justice.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-african-blue/20 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Award className="h-8 w-8 text-african-blue" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-african-green">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A future where every African child has access to mental health resources, lives in a sustainable 
              environment, and enjoys equal opportunities regardless of their background or circumstances.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
