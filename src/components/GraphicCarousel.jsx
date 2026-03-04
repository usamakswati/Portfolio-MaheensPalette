import React, { useState, useEffect } from 'react';
import './GraphicCarousel.css';

const GraphicCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 1.9 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 1900);

        return () => clearInterval(interval);
    }, [images.length]);

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

    return (
        <div className="graphic-carousel">
            <div className="carousel-container brutal-border">
                <button
                    className="carousel-btn prev-btn"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                >
                    ‹
                </button>

                <div className="carousel-image-wrapper">
                    <img
                        src={images[currentIndex].image}
                        alt={images[currentIndex].title}
                        className="carousel-image"
                    />
                    <div className="carousel-caption">
                        <span className="image-counter">
                            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                <button
                    className="carousel-btn next-btn"
                    onClick={goToNext}
                    aria-label="Next image"
                >
                    ›
                </button>
            </div>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default GraphicCarousel;
