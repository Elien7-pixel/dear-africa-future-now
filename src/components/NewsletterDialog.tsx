
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewsletterSubscription from './NewsletterSubscription';

interface NewsletterDialogProps {
  children: React.ReactNode;
}

const NewsletterDialog = ({ children }: NewsletterDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-african-dark">Subscribe to Our Newsletter</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <NewsletterSubscription />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;
