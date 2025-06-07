
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ src, alt, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="relative max-w-full max-h-full">
        <img 
          src={src} 
          alt={alt}
          className="max-w-full max-h-full object-contain"
        />
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border border-white/20"
          size="icon"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ImageModal;
