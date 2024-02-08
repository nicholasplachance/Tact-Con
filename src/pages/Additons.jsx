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
  max-height: ${({ isExpanded }) => (isExpanded ? '100vh' : '650px')};
  object-fit: contain;
  object-position: center;
  width: 100%;
`;

const AdditionsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ServicePageContainer>
      <ServiceCard>
        <ServiceTitle>Additions</ServiceTitle>
        <ServiceDescription>
          Tact Construction can increase your living space for whatever suits your needs – more room to enjoy with family, space for entertaining, a home office, bigger kitchen or dining space, and so much more. This extra square footage immediately increases your property value and allows you to customize and re-envision your current home without the cost and headache of selling, building or buying, and moving to a new home.
        </ServiceDescription>
        <ImageContainer onClick={toggleExpand}>
          <Image
            src="assets/Portfolio/Piles Kitchen 3.jpg"
            alt="Additions Example"
            isExpanded={isExpanded}
          />
        </ImageContainer>
      </ServiceCard>
    </ServicePageContainer>
  );
};

export default AdditionsPage;
