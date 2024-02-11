// GalleryComponent.js

import React, { useState } from 'react';

import styled from 'styled-components';
import theme from '../components/common/theme';

const GalleryContainer = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;
`;

const GalleryImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PhotographerCredit = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #333;

  a {
    color: #333;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    bottom: 80px;
  }
`;

const GalleryButton = styled.button`
  margin: 8px;
  background-color: ${theme.colors.accent};
  color: #fff;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const imagePaths = [
    "Bardsley Kitchen 1.jpg",
    "Bardsley Kitchen 10.jpg",
    "Bardsley Kitchen 11.jpg",
    "Bardsley Kitchen 12.jpg",
    "Bardsley Kitchen 13.jpg",
    "Bardsley Kitchen 2.jpg",
    "Bardsley Kitchen 3.jpg",
    "Bardsley Kitchen 4.jpg",
    "Bardsley Kitchen 5.jpg",
    "Bardsley Kitchen 6.jpg",
    "Bardsley Kitchen 7.jpg",
    "Bardsley Kitchen 8.jpg",
    "Bardsley Kitchen 9.jpg",
    "Day Master Bath 1.jpg",
    "Day Master Bath 2.jpg",
    "Day Master Bath 3.jpg",
    "Day Master Bath 4.jpg",
    "Day Master Bath 5.jpg",
    "Day Master Bath 6.jpg",
    "Day Master Bath 7.jpg",
    "Family.png",
    "Glendale Master Bath 1.jpg",
    "Glendale Master Bath 2.jpg",
    "Glendale Master Bath 3.jpg",
    "Glendale Master Bath 4.jpg",
    "Glendale Poweder 1.jpg",
    "Glendale Poweder 2.jpg",
    "Hoard House 1.jpg",
    "Hoard House 2.jpg",
    "Hoard House 3.jpg",
    "Hoard House 4.jpg",
    "Lafayette Master Bath 1.jpg",
    "Lafayette Master Bath 2.jpg",
    "Lafayette Master Bath 3.jpg",
    "Lafayette Master Bath 4.jpg",
    "Lafayette Master Bath 5.jpg",
    "Lafayette Master Bath 6.jpg",
    "Lynnich Accent Wall.jpg",
    "Nichols Master Bath 1.jpg",
    "Nichols Master Bath 2.jpg",
    "Nichols Master Bath 3.jpg",
    "Nichols Master Bath 4.jpg",
    "Piles Kitchen 1.jpg",
    "Piles Kitchen 2.jpg",
    "Piles Kitchen 3.jpg",
    "Powers Bathroom 1.jpg",
    "Powers Bathroom 2.jpg",
    "Powers Bathroom 3.jpg",
    "Powers Bathroom 4.jpg",
    "Powers Bathroom 5.jpg",
    "Powers Bathroom 6.jpg",
    "Russell Kitchen 1.jpg",
    "Russell Kitchen 2.jpg",
    "Russell Kitchen 3.jpg",
    "Schaefer Bathroom 1.jpg",
    "Schaefer Bathroom 2.jpg",
    "Schaefer Bathroom 3.jpg",
    "Smith Master.jpg",
    "Smith Shower 1.jpg",
    "Smith Shower 2.jpg",
    "Taca Accent Wall 1.jpg",
    "Taca Accent Wall 2.jpg",
    "Taca Accent Wall 3.jpg",
    "Taca Accent Wall 4.jpg",
    "Tact Construction.png",
    "Walker Kitchen 1.jpg",
    "Walker Kitchen 2.jpg",
    "Walker Kitchen 3.jpg",
    "Walker Kitchen 4.jpg"
  ].map((imageName) => `assets/Portfolio/${imageName}`);



  const photographerCreditText = 'Photographer: ';
  const photographerWebsite = 'https://www.heatherhannickdesigns.com/'; // Replace with actual photographer website
  
  const GalleryComponent = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <GalleryContainer>
        <GalleryImage src={imagePaths[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <PhotographerCredit>
          {photographerCreditText}
          <a href={photographerWebsite} target="_blank" rel="noopener noreferrer">
            Photographer Name
          </a>
        </PhotographerCredit>
        <GalleryButton onClick={prevImage}>Previous</GalleryButton>
        <GalleryButton onClick={nextImage}>Next</GalleryButton>
      </GalleryContainer>
    );
  };
  
  export default GalleryComponent;
