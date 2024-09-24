import React, { useState, useEffect } from 'react';
import './carousel.css'; // Importing the CSS for styling

const images = [
    `${process.env.PUBLIC_URL + "/images/image1.jpg"}`,
    `${process.env.PUBLIC_URL + "/images/image1.jpg"}`,
    `${process.env.PUBLIC_URL + "/images/image1.jpg"}`,
    `${process.env.PUBLIC_URL + "/images/image1.jpg"}`,
];

const CarouselComponent = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(prevCurrent => {
                return (prevCurrent + 1) % (images.length); // Loop through images
            });
        };

        const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // When reaching the duplicate of the first slide, jump back to the first slide without animation
        if (current === images.length - 1) {
            setTimeout(() => {
                setCurrent(0); // Reset to the first slide without animation
            }, 500); // This timeout should match the transition time to avoid flickering
        }
    }, [current]);

    return (
        <div className="carousel">
            {images.map((img, index) => (
                <div className="slide" key={index} style={{ transform: `translateX(-${current * 100}%)`, transition: current === images.length - 1 && index === images.length - 1 ? 'none' : 'transform 0.5s ease-in-out' }}>
                    <img src={img} alt={`Slide ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default CarouselComponent;

// {process.env.PUBLIC_URL + "/images/image1.jpg"}
