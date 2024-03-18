import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const ImageContainer = styled.div`
  width: 60vw;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 80vw;
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

const ImageCard = ({ src, alt, designer }) => (
  <ImageContainer>
    <Image src={src} alt={alt} />
    <PhotographerCredit className="photographer-credit-overlay">
      Designer:{' '}
      <a href={designer.website} target="_blank" rel="noopener noreferrer">
        {designer.name}
      </a>
    </PhotographerCredit>
  </ImageContainer>
);

export default ImageCard;
