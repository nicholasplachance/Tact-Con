import React from 'react';
import styled from 'styled-components';

const HeroBannerContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  url('/assets/Portfolio/Bardsley Kitchen 2.jpg')  center/cover no-repeat fixed;
  margin-top: 8px;
`;

const HeroContent = styled.div`
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 3.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  background-color: accent; /* Your primary color */
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: accent; /* Your darker primary color on hover */
  }
`;

const HeroBannerComponent = () => {
  return (
    <HeroBannerContainer>
      <HeroContent>
        <HeroSubtitle>Vision. Performance. Satisfaction.</HeroSubtitle>
      </HeroContent>
    </HeroBannerContainer>
  );
};

export default HeroBannerComponent;
