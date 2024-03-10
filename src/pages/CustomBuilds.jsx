import React, { useState } from 'react';

import styled from 'styled-components';
import theme from '../components/common/theme';

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
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  max-height: ${({ isExpanded }) => (isExpanded ? '100vh' : '650px')};
  object-fit: contain;
  object-position: center;
  width: 100%;
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

const photographerCreditText = 'Interior Designer: ';
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
        <ImageContainer onClick={toggleExpand}>
          <Image
            src="assets/Portfolio/Hoard House 4.jpg"
            alt="Custom Builds Example"
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

export default CustomBuildsPage;
