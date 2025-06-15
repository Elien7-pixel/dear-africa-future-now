
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const Contact = () => {
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-green mb-6">Contact Us</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with our team and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Information & Newsletter */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-african-green">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-african-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-african-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">hello@dearafricanchild.org</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-african-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-african-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+27 84 961 7485</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-african-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-african-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">
                    180 Katherine Street<br />
                    Barlow Park, Sandton<br />
                    Gauteng, South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-african-green">Stay Connected</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and be the first to know about new articles, events, and initiatives.
            </p>
            <NewsletterSubscription />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-african-green">Find Us</h2>
            <p className="text-gray-600">Visit our office in the heart of Sandton</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.7936477867934!2d28.047826!3d-26.101898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950db5a3f4ae31%3A0x9c2f85a7b5e6c0b0!2s180%20Katherine%20St%2C%20Barlow%20Park%2C%20Sandton%2C%202090%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1635777777777!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dear African Child Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
