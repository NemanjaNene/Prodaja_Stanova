'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

interface ImageGalleryProps {
  images: string[];
  apartmentName: string;
}

export default function ImageGallery({ images, apartmentName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden group">
        <Image
          src={images[selectedImage]}
          alt={`${apartmentName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition opacity-0 group-hover:opacity-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition opacity-0 group-hover:opacity-100"
        >
          <FaExpand />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-24 rounded-lg overflow-hidden transition-all ${
              selectedImage === index
                ? 'ring-4 ring-gold-500 scale-105'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition z-10"
            >
              <FaTimes size={24} />
            </button>

            <div className="relative w-full h-full max-w-7xl max-h-screen p-8">
              <Image
                src={images[selectedImage]}
                alt={`${apartmentName} - Fullscreen`}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation in Fullscreen */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition"
            >
              <FaChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

