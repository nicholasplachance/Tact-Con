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

const Additions = () => {
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
        <ImageCard
  src="assets/Portfolio/Piles Kitchen 3.jpg" alt="Custom Builds Example"
  designer={{ name: "Heather Hannick", website: "https://www.heatherhannickdesigns.com/" }}/>
      </ServiceCard>
    </ServicePageContainer>
  );
};

export default Additions;



