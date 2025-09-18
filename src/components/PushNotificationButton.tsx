import { Bell, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePushNotifications } from '@/hooks/usePushNotifications';

export const PushNotificationButton = () => {
  const { isSupported, isSubscribed, isLoading, subscribe, unsubscribe } = usePushNotifications();

  if (!isSupported) {
    return null;
  }

  return (
    <Button
      onClick={isSubscribed ? unsubscribe : subscribe}
      disabled={isLoading}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      {isSubscribed ? (
        <>
          <BellOff className="h-4 w-4" />
          {isLoading ? 'Unsubscribing...' : 'Turn off notifications'}
        </>
      ) : (
        <>
          <Bell className="h-4 w-4" />
          {isLoading ? 'Subscribing...' : 'Get notified of new articles'}
        </>
      )}
    </Button>
  );
};