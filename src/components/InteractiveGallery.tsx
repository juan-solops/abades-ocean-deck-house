'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Terrace & Outdoor
  { src: '/images/house/abades-ocean-deck-house-terrace-sofa-door.jpg', alt: 'Ocean view terrace with sofa', category: 'Terrace' },
  { src: '/images/house/abades-ocean-deck-house-terrace-trees2.jpg', alt: 'Terrace with trees view', category: 'Terrace' },
  { src: '/images/house/abades-ocean-deck-house-terrace-cactus.jpg', alt: 'Terrace with cactus', category: 'Terrace' },
  { src: '/images/house/abades-ocean-deck-house-terrace-full2.jpg', alt: 'Full terrace view', category: 'Terrace' },
  { src: '/images/house/abades-ocean-deck-house-terrace-sofa-door2.jpg', alt: 'Terrace seating area', category: 'Terrace' },
  { src: '/images/house/abades-ocean-deck-house-terrace-sofa-wall.jpg', alt: 'Terrace lounge', category: 'Terrace' },
  { src: '/images/house/abades-ocean-deck-house-terrace-trees.jpg', alt: 'Terrace garden view', category: 'Terrace' },
  { src: '/images/house/abades-ocean-deck-house-upstairs-teide.jpg', alt: 'Upstairs Teide view', category: 'Terrace' },
  
  // Kitchen
  { src: '/images/house/abades-ocean-deck-house-kitchen.jpg', alt: 'Modern kitchen', category: 'Kitchen' },
  { src: '/images/house/abades-ocean-deck-house-kitchen2.jpg', alt: 'Kitchen dining area', category: 'Kitchen' },
  { src: '/images/house/abades-ocean-deck-house-kitchen3.jpg', alt: 'Kitchen counter', category: 'Kitchen' },
  { src: '/images/house/abades-ocean-deck-house-kitchen4.jpg', alt: 'Kitchen appliances', category: 'Kitchen' },
  
  // Living Room
  { src: '/images/house/abades-ocean-deck-house-livingroom.jpg', alt: 'Comfortable living room', category: 'Living Room' },
  { src: '/images/house/abades-ocean-deck-house-livingroom2.jpg', alt: 'Living room seating', category: 'Living Room' },
  
  // Master Bedroom
  { src: '/images/house/abades-ocean-deck-house-master-bedroom.jpg', alt: 'Master bedroom', category: 'Bedrooms' },
  { src: '/images/house/abades-ocean-deck-house-master-bedroom1.jpg', alt: 'Master bedroom view', category: 'Bedrooms' },
  { src: '/images/house/abades-ocean-deck-house-master-bedroom2.jpg', alt: 'Master bedroom detail', category: 'Bedrooms' },
  { src: '/images/house/abades-ocean-deck-house-master-bedroom3.jpg', alt: 'Master bedroom window', category: 'Bedrooms' },
  { src: '/images/house/abades-ocean-deck-house-master-bedroom4.jpg', alt: 'Master bedroom decor', category: 'Bedrooms' },
  { src: '/images/house/abades-ocean-deck-house-master-bedroom5.jpg', alt: 'Master bedroom comfort', category: 'Bedrooms' },
  
  // Second Bedroom
  { src: '/images/house/abades-ocean-deck-house-second-bedroom.jpg', alt: 'Second bedroom', category: 'Bedrooms' },
  { src: '/images/house/abades-ocean-deck-house-second-bedroom2.jpg', alt: 'Second bedroom view', category: 'Bedrooms' },
  { src: '/images/house/abades-ocean-deck-house-second-bedroom3.jpg', alt: 'Second bedroom space', category: 'Bedrooms' },
  
  // Bathrooms
  { src: '/images/house/abades-ocean-deck-house-bathroom.jpg', alt: 'Modern bathroom', category: 'Bathrooms' },
  { src: '/images/house/abades-ocean-deck-house-bathroom2.jpg', alt: 'Bathroom shower', category: 'Bathrooms' },
  { src: '/images/house/abades-ocean-deck-house-bathroom3.jpg', alt: 'Bathroom amenities', category: 'Bathrooms' },
  
  // Exterior & Location
  { src: '/images/house/abades-ocean-deck-house-outside-front-door.jpg', alt: 'House entrance', category: 'Exterior' },
  { src: '/images/house/abades-beach1.jpg', alt: 'Abades beach', category: 'Location' },
  { src: '/images/house/abades-beach.jpg', alt: 'Beach view', category: 'Location' },
  { src: '/images/blog/abades-south-tenerife-beach.jpg', alt: 'South Tenerife coastline', category: 'Location' },
];

export default function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Terrace', 'Kitchen', 'Living Room', 'Bedrooms', 'Bathrooms', 'Exterior', 'Location'];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    const actualIndex = galleryImages.findIndex(img => img.src === filteredImages[index].src);
    setSelectedImage(actualIndex);
  };

  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-ocean-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ height: idx === 0 && selectedCategory === 'All' ? '400px' : '240px' }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-medium text-sm">{image.alt}</p>
                <p className="text-white/80 text-xs mt-1">{image.category}</p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ZoomIn className="w-12 h-12 text-white opacity-80" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium">
            {selectedImage + 1} / {galleryImages.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition backdrop-blur-sm"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition backdrop-blur-sm"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full max-w-2xl text-center">
            <p className="font-medium">{galleryImages[selectedImage].alt}</p>
            <p className="text-sm text-white/80 mt-1">{galleryImages[selectedImage].category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
