import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./about.css";

/**
 * ImageCarousel
 * Props:
 *  - images: array of imported image paths
 *  - interval: ms to auto-advance (default 3000)
 *  - altPrefix: alt text prefix for images
 *
 * Features:
 *  - auto-plays every `interval` ms
 *  - manual Prev / Next buttons
 *  - dot indicators (clickable)
 *  - pauses on hover (so users can interact)
 */
const ImageCarousel = ({ images = [], interval = 3000, altPrefix = "About image" }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const isMountedRef = useRef(true);

  // start / restart autoplay
  const startAutoplay = () => {
    if (!images || images.length <= 1) return;
    clearAutoplay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
  };

  const clearAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    isMountedRef.current = true;
    startAutoplay();
    return () => {
      isMountedRef.current = false;
      clearAutoplay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, interval]);

  // when user clicks prev/next/dot, restart autoplay (so they get full interval)
  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoplay();
  };
  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    startAutoplay();
  };
  const goTo = (i) => {
    setIndex(i % images.length);
    startAutoplay();
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => clearAutoplay()}
      onMouseLeave={() => startAutoplay()}
      // CSS vars: --n = number of slides, --i = current index
      style={{ ["--n"]: images.length, ["--i"]: index }}
    >
      <div className="slides" role="list">
        {images.map((src, i) => (
          <div className="slide" key={i} role="listitem" aria-hidden={i !== index}>
            <img src={src} alt={`${altPrefix} ${i + 1}`} draggable="false" />
          </div>
        ))}
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={goPrev} aria-label="Previous slide">
              <FaChevronLeft />
            </button>
            <button className="carousel-btn next" onClick={goNext} aria-label="Next slide">
              <FaChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="carousel-dots" role="tablist" aria-label="Slide dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
