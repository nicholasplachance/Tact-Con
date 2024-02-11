import React, { useState } from 'react';

import styled from 'styled-components';
import theme from '../components/common/theme';

const ServicePageContainer = styled.div`
  background-color: ${theme.colors.background};
  padding: 2rem;
  text-align: center;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left;
  width: 80%;
  margin: 3% 10%;
`;

const ServiceTitle = styled.h2`
  color: ${theme.colors.secondary};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.secondary};
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  max-height: ${({ isExpanded }) => (isExpanded ? '100vh' : '750px')};
  object-fit: contain;
  object-position: center;
  width: 100%;
  margin-bottom: 1.5rem;
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
`;

const photographerCreditText = 'Photographer: ';
const photographerWebsite = 'https://www.heatherhannickdesigns.com/'; // Replace with actual photographer website


const CustomFinishesPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ServicePageContainer>
      <ServiceCard>
        <ServiceTitle>Custom Finishes</ServiceTitle>
        <ServiceDescription>
          Elevate your home with luxurious custom finishes that fit your style and needs. Whether it’s turning your dreary laundry room into a chic and functional space or crafting a stylish home bar for entertaining guests, our team of designers is ready to bring every corner of your home to life. From stunning accent walls to transforming your untouched basement into a cozy living space, Tact Construction is ready to turn your vision into reality.
        </ServiceDescription>
        <ImageContainer onClick={toggleExpand}>
          <Image
            src="assets/Portfolio/Taca Accent Wall 4.jpg"
            alt="Custom Finishes Example"
            isExpanded={isExpanded}
          />
          <PhotographerCredit>
          {photographerCreditText}
          <a href={photographerWebsite} target="_blank" rel="noopener noreferrer">
            Heather Hannick
          </a>
        </PhotographerCredit>
        </ImageContainer>
      </ServiceCard>
    </ServicePageContainer>
  );
};

export default CustomFinishesPage;
