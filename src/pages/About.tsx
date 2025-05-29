
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">About Dear African Child</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering African communities through advocacy, education, and awareness.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img 
                  src="/lovable-uploads/2d039ae0-ce71-4eee-8dc8-c42733018791.png" 
                  alt="Munya Touch - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-african-dark">Munya Touch</h3>
                <p className="text-gray-600">Founder</p>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-african-dark">Meet Our Founder</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Munya Touch (born Munyaradzi Jeranyama) is an accomplished African ShowBiz entrepreneur, social worker in training, journalist, and climate change advocate. He has significant experience in the South African entertainment industry, having worked at Kalawa Jazmee Records, one of Africa's largest black-owned record labels, under the mentorship of Bra Scotch. Munya has collaborated with various artists, including Nokwazi, Professor, Busiswa, Uhuru, and DJ Maphorisa. His expertise encompasses festival organization, artist booking and management, and public relations.
                </p>

                <p>
                  From 2013 to 2017, Munya served as an entertainment journalist at Starstudded Online Magazine, which peaked at 2 million daily visitors. He later worked as a publicist for notable artists such as Buffalo Souljah (Zimbabwe) and DJ Waxxy (Nigeria).
                </p>

                <p>
                  Munya has contributed to Azania Productions, a female-owned film production company, working on films featured on platforms like Netflix, VIU, Showmax, and eTV's eVOD, including <em>Six In The City</em> (VIU & Netflix), <em>Mr. Johnson</em> (Showmax), and <em>ASHES of a Red Cow</em> (eVOD).
                </p>

                <p>
                  A key event he hosted is the Joburg Shutdown Concert, aimed at combating xenophobia in South Africa by uniting Zimbabwean and South African artists. This festival highlighted the contributions of Zimbabweans, one of the largest immigrant groups in South Africa, and provided a platform for emerging African artists to perform alongside established stars like Busiswa, Winky D, DJ Tira, and more.
                </p>

                <p>
                  During the COVID-19 pandemic, Munya initiated Acoustic Fridays, a virtual music show that showcased both upcoming and established Zimbabwean artists. This initiative reached 100,000 views per show, promoting mental health and encouraging audiences to stay home during lockdowns.
                </p>

                <p>
                  In 2021, he collaborated with legendary DJ Qness to launch the inaugural Amapiano Awards, aired on SABC 1, which attracted 50 million viewers and celebrated outstanding Amapiano artists in South Africa, contributing to public health efforts during the pandemic.
                </p>

                <p>
                  In 2024, Munya partnered with Thapelo Amad, the first Muslim Mayor of Johannesburg, to address climate change issues, focusing on reducing plastic pollution and promoting sustainability in Africa's busiest city.
                </p>

                <p>
                  Munya's concerns about rising waste pollution, deforestation, and climate change-related health issues, particularly in low-income areas, inspired him to establish Dear African Child. This blog aims to tackle these urgent issues and engage Africa's youth, who represent over 60% of the continent's population.
                </p>

                <p>
                  With the right partnerships and funding, he aims to collaborate with NGOs across Africa to initiate programs that combat climate change and promote social and gender equality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
