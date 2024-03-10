import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  cursor: pointer;

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
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  a {
    color: #333;
    text-decoration: underline;
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
