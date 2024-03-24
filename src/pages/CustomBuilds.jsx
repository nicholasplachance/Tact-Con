import React, { useState } from 'react';

import styled from 'styled-components';
import theme from '../components/common/theme';
import ImageCard from '../components/common/ImageCard';

const ServicePageContainer = styled.div`
  background-color: ${theme.colors.background};
  padding: 2rem;
  text-align: center;
`;

const ServiceCard = styled.div`
  border-radius: 8px;
  padding: 2rem;
  text-align: left;
  width: 80%;
  margin: 3% 10%;
`;

const ServiceTitle = styled.h2`
  color: ${theme.colors.primary};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.primary};
`;


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



const photographerCreditText = 'Designer: ';
const photographerWebsite = 'https://www.heatherhannickdesigns.com/'; // Replace with actual photographer website

const CustomBuildsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ServicePageContainer>
      <ServiceCard>
        <ServiceTitle>Custom Builds</ServiceTitle>
        <ServiceDescription>
          From your vision to a turnkey home, Tact Construction and our expert team of contractors are equipped to handle every aspect of your project from blueprints and planning to the final coat of paint and landscaping. Our team of specialized designers and craftsmen are ready to bring your new home vision to life.
        </ServiceDescription>
        <ImageContainer>
    <Image src="assets/Portfolio/Hoard House 4.jpg" alt="Custom Builds Example" />
    <PhotographerCredit className="photographer-credit-overlay">
      <p>
      Designer: House of Hoard
      </p>
    </PhotographerCredit>
  </ImageContainer>
        
      </ServiceCard>
    </ServicePageContainer>
  );
};

export default CustomBuildsPage;
