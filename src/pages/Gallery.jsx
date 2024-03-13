import React from 'react';
import styled from 'styled-components';
import theme from '../components/common/theme';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 16px;
  padding: 20px;
  background-color: ${theme.colors.background};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  flex: 1;
  cursor: pointer;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  opacity: 1; /* Always visible */
`;

const ImageText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const DesignerCredit = styled(ImageOverlay)`
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;

  ${GalleryItem}:hover & {
    opacity: 1; /* Visible on hover */
  }
`;

const imagePaths = [
  "Bardsley Kitchen 10.jpg",
  "Bardsley Kitchen 14.jpg",
  "Day Master Bath 1.jpg",
  "Day Master Bath.jpg",
  "Glendale Master Bath 1.jpg",
  "Glendale Master Bath 2.jpg",
  "Hoard House 3.jpg",
  "Hoard House 4.jpg",
  "Piles Kitchen 3.jpg",
  "Powers Bathroom 2.jpg",
  "Powers Bathroom 4.jpg",
  "Russell Kitchen 3.jpg",
  "Schaefer Bathroom 1.jpg",
  "Schaefer Bathroom 2.jpg",
  "Smith Master.jpg",
  "Taca Accent Wall 3.jpg",
  "Walker Kitchen 1.jpg",
].map((imageName) => `assets/iloveimg-resized/${imageName}`);

const photographerCreditText = 'Designer: ';
const photographerWebsite = 'https://www.heatherhannickdesigns.com/';

const GalleryComponent = ({ images = imagePaths }) => {
  const handleImageClick = (index) => {
    // Implement logic to show the full image on mobile
    console.log(`Clicked on image ${index + 1}`);
  };

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <GalleryItem key={index}>
          <GalleryImage
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
          {(index === 6 || index === 7) && (
            <ImageOverlay>
              <ImageText>Hoard House</ImageText>
            </ImageOverlay>
          )}
          <DesignerCredit>
            <ImageText>{photographerCreditText}
              <a href={photographerWebsite} target="_blank" rel="noopener noreferrer">
                Heather Hannick
              </a>
            </ImageText>
          </DesignerCredit>
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default GalleryComponent;
