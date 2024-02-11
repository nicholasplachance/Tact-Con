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

const KitchenAndBathPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ServicePageContainer>
      <ServiceCard>
        <ServiceTitle>Kitchen and Bathroom</ServiceTitle>
        <ServiceDescription>
          Tact Construction is committed to your vision. Our team of designers works with you to design spaces that blend stunning aesthetics to fit your style, with functionality that suits your needs. Our skilled craftsmen take pride in precision and attention to detail all while maintaining a clean and safe workspace. We are prepared to turn your vision of a serene bathroom or elegant kitchen into life.
        </ServiceDescription>
        <ImageContainer onClick={toggleExpand}>
          <Image
            src="assets/Portfolio/Lafayette Master Bath 5.jpg"
            alt="Kitchen and Bathroom Example"
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

export default KitchenAndBathPage;
