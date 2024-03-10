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
          {/* Your description */}
        </ServiceDescription>
        <ImageCard src="assets/Portfolio/Piles Kitchen 3.jpg" alt="Custom Builds Example" isExpanded={isExpanded} />
      </ServiceCard>
    </ServicePageContainer>
  );
};

export default Additions;



