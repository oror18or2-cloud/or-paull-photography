import { useState, useEffect } from 'react';

export default function GalleryCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="carousel" style={{ background: '#E8D5D1', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#5C4A42', fontSize: '18px' }}>Gallery images will be added here</p>
      </div>
    );
  }

  return (
    <div className="carousel" style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', marginBottom: '48px', background: '#FAFAF8' }}>
      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery image ${index + 1}`}
          className="carousel-slide"
          style={{
            display: index === currentIndex ? 'block' : 'none',
            width: '100%',
            height: '500px',
            objectFit: 'contain'
          }}
        />
      ))}

      {/* Previous Button */}
      <button
        className="carousel-arrow prev"
        onClick={goToPrevious}
        aria-label="Previous image"
        style={{
          position: 'absolute',
          top: '50%',
          left: '16px',
          transform: 'translateY(-50%)',
          width: '48px',
          height: '48px',
          background: 'rgba(92, 74, 66, 0.7)',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'background 200ms'
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(92, 74, 66, 1)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(92, 74, 66, 0.7)'}
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        className="carousel-arrow next"
        onClick={goToNext}
        aria-label="Next image"
        style={{
          position: 'absolute',
          top: '50%',
          right: '16px',
          transform: 'translateY(-50%)',
          width: '48px',
          height: '48px',
          background: 'rgba(92, 74, 66, 0.7)',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'background 200ms'
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(92, 74, 66, 1)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(92, 74, 66, 0.7)'}
      >
        ▶
      </button>

      {/* Dots */}
      <div
        className="carousel-controls"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: index === currentIndex ? '#5C4A42' : '#A09A94',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 200ms'
            }}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'rgba(92, 74, 66, 0.8)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          fontSize: '14px',
          zIndex: 10
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
