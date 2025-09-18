
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const VAPID_PUBLIC_KEY = 'BKlFdCKPQvU_Z9-SrdXAvNq1YjuJ-YO8wz-ZvVr-YI0mLRbyRZnH0RI3oFJqZaOgMWF6fOAFL9gW5Z9f5F6DY8g';

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const NewsletterSubscription = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const subscribeToPushNotifications = async () => {
    if (!('serviceWorker' in navigator && 'PushManager' in window)) {
      return false; // Push notifications not supported
    }

    try {
      // Request permission
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        return false;
      }

      // Register service worker
      const registration = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;

      // Subscribe to push notifications
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });

      // Save subscription to database
      const subscriptionData = {
        endpoint: subscription.endpoint,
        p256dh_key: btoa(String.fromCharCode(...new Uint8Array(subscription.getKey('p256dh')!))),
        auth_key: btoa(String.fromCharCode(...new Uint8Array(subscription.getKey('auth')!))),
        user_agent: navigator.userAgent
      };

      const { error } = await supabase
        .from('push_subscriptions')
        .insert(subscriptionData);

      return !error;
    } catch (error) {
      console.error('Error subscribing to push notifications:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ name, email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        // Automatically subscribe to push notifications
        const pushSubscribed = await subscribeToPushNotifications();
        
        toast({
          title: "Successfully subscribed!",
          description: pushSubscribed 
            ? "Thank you for subscribing to our newsletter and push notifications!" 
            : "Thank you for subscribing to our newsletter!",
        });
        setName('');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-african-dark text-center">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-african-orange"
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-african-orange"
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-african-orange hover:bg-african-orange/90 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
