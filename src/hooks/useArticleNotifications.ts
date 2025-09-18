import { supabase } from '@/integrations/supabase/client';

export const sendArticleNotification = async (article: { title: string; excerpt: string; id: string }) => {
  try {
    const { error } = await supabase.functions.invoke('send-push-notification', {
      body: {
        title: `New Article: ${article.title}`,
        body: article.excerpt.length > 100 
          ? article.excerpt.substring(0, 100) + '...' 
          : article.excerpt,
        url: `/article/${article.id}`
      }
    });

    if (error) {
      console.error('Error sending push notification:', error);
      throw error;
    }

    console.log('Push notification sent successfully');
  } catch (error) {
    console.error('Failed to send article notification:', error);
    throw error;
  }
};