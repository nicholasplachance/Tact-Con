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

const WholeHousePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ServicePageContainer>
      <ServiceCard>
        <ServiceTitle>Whole House</ServiceTitle>
        <ServiceDescription>
          Re-envisioning your whole house allows you to unlock the full potential of your home, giving you the power to redefine the way you live. A comprehensive transformation can provide changes to your home's layout tailored to fit your needs and lifestyle, while providing you with the opportunity to customize every inch of your home. Our creative designers and skilled architects are experts at providing cohesive and harmonious designs that reflect your personality and enhance your daily life.
        </ServiceDescription>
        <ImageContainer onClick={toggleExpand}>
          <Image
            src="assets/Portfolio/Walker Kitchen 1.jpg"
            alt="Whole House Example"
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

export default WholeHousePage;
