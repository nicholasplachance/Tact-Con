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

const photographerCreditText = 'Designer: ';
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
          Elevate your home with luxurious custom finishes that fit your style and needs. Whether it’s turning your dreary laundry room into a chic and functional space or crafting a stylish home bar for entertaining guests, our team of designers are ready to bring every corner of your home to life. From stunning accent walls to transforming your untouched basement into a cozy living space, Tact Construction is ready to turn your vision into reality.
        </ServiceDescription>
        <ImageCard
  src="assets/Portfolio/Taca Accent Wall 4.jpg" alt="Custom Builds Example"
  designer={{ name: "Heather Hannick", website: "https://www.heatherhannickdesigns.com/" }}
/>
      </ServiceCard>
    </ServicePageContainer>
  );
};

export default CustomFinishesPage;
