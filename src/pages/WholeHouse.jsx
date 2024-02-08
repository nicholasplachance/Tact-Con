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

  @media (max-width: 768px) {
    margin: 1rem;
  }
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
  max-height: ${({ isExpanded }) => (isExpanded ? '100vh' : '650px')};
  object-fit: contain;
  object-position: center;
  width: 100%;
`;

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
        </ImageContainer>
      </ServiceCard>
    </ServicePageContainer>
  );
};

export default WholeHousePage;
