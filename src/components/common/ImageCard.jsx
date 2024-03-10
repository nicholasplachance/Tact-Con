import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const ImageContainer = styled.div`
  width: 450px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 250px;
  }

  &:hover {
    transform: scale(1.05);

    .photographer-credit-overlay {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  flex: 1;
`;

const PhotographerCredit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  transition: opacity 0.3s ease-in-out;

  ${Image}:hover & {
    opacity: 1;
  }
`;

const ImageCard = ({ src, alt, isExpanded }) => (
  <ImageContainer>
    <Image src={src} alt={alt} isExpanded={isExpanded} />
    <PhotographerCredit className="photographer-credit-overlay">
      Interior Designer:{' '}
      <a href="https://www.heatherhannickdesigns.com/" target="_blank" rel="noopener noreferrer">
        Heather Hannick
      </a>
    </PhotographerCredit>
  </ImageContainer>
);

export default ImageCard;
