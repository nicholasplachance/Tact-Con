import React from 'react';
import styled from 'styled-components';
import theme from '../components/common/theme';

const WhoWeAreContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const ParallaxImageContainer = styled.div`
  position: relative;
  height: 650px; /* Adjust the height as needed */
  overflow: hidden;
`;

const ParallaxImage = styled.div`
  width: 100%;
  height: 650px; /* Adjust the height as needed */
  background-image: url('assets/Portfolio/Family.png');
  background-size: fit;
  background-position: center top;
  background-repeat: no-repeat;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust the max-width as needed */
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 1.5rem;
  text-align: justify;
  margin: 5% auto; /* Centering the card */
`;

const WhoWeArePage = () => {
  return (
    <WhoWeAreContainer>
      <ParallaxImageContainer>
        <ParallaxImage src="/Family.png" alt="Company Building" />
      </ParallaxImageContainer>
      <CardContainer>
        <Description>
          Tact Construction is a family-owned and operated remodel and new build company servicing the St. Louis and surrounding areas. Our paramount goal is your satisfaction. We believe in putting people first and building relationships between both our clients and team members. We take pride in not just constructing homes but also in building trust through honesty and integrity. We are ready to turn your vision into a reality together.
          {/* Add more sections as needed */}
        </Description>
      </CardContainer>
    </WhoWeAreContainer>
  );
};

export default WhoWeArePage;
