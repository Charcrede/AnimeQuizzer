'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/assets/s1.png', // Remplace par tes images
  '/assets/s2.png',
  '/assets/s3.png',
  '/assets/s4.png',
  '/assets/s5.png',
  '/assets/s6.png',
];

const FixedImages = () => {
  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    // Initialisation des positions aléatoires des images
    const randomPositions = images.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));

    setPositions(randomPositions);
  }, []);

  return (
    <div className="absolute -z-10 w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className="absolute"
          style={{
            left: `${positions[index]?.x}px`,
            top: `${positions[index]?.y}px`,
            width: '100px', // Taille des images
            height: '100px',
          }}
        />
      ))}
    </div>
  );
};

export default FixedImages;
