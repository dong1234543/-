import React, { useRef } from 'react';
import './HomeGallery.css';

const HomeGallery = () => {
  const galleryRef = useRef(null);
  const images = [
    { id: 1, src: '/images/gallery1.jpg', alt: 'Gallery 1' },
    { id: 2, src: '/images/gallery2.jpg', alt: 'Gallery 2' },
    { id: 3, src: '/images/gallery3.jpg', alt: 'Gallery 3' },
    { id: 4, src: '/images/gallery4.jpg', alt: 'Gallery 4' },
    { id: 5, src: '/images/gallery5.jpg', alt: 'Gallery 5' },
    { id: 6, src: '/images/gallery6.jpg', alt: 'Gallery 6' },
  ];

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="gallery-container">
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <div className="gallery-scroll" ref={galleryRef}>
        {images.map((image) => (
          <div key={image.id} className="image-wrapper">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default HomeGallery; 