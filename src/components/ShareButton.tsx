
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Facebook, Instagram, X, Mail, Link, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ShareButtonProps {
  title: string;
  excerpt?: string;
  url: string;
  imageUrl?: string;
}

const ShareButton = ({ title, excerpt, url, imageUrl }: ShareButtonProps) => {
  const { toast } = useToast();

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareToX = () => {
    const text = `${title} ${url}`;
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(xUrl, '_blank', 'width=600,height=400');
  };

  const shareToEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${excerpt || ''}\n\nRead more: ${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied",
        description: "Article link has been copied to your clipboard!",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy link. Please try again.",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={shareToFacebook}>
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareToX}>
          <X className="mr-2 h-4 w-4" />
          X (Twitter)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareToEmail}>
          <Mail className="mr-2 h-4 w-4" />
          Email
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyLink}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
