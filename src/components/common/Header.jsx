import NavigationMenu from './Navigation-Menu';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: 1rem;
  text-align: center;
  border-bottom: 8px solid ${theme.colors.accent}; /* Subtle border color */
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  @media (min-width: 769px) {
    height: 25vh;
  }

  max-width: 100%;
  height: 22vh;
  margin-bottom: 1rem; /* Add margin for separation on mobile */
`;

const LogoText = styled.div`
  @media (max-width: 768px) {
    color: ${theme.colors.secondary};
    max-width: 40vw;
    height: auto;
    margin-bottom: 1rem; /* Add margin for separation on mobile */
  }
`;

const Navigation = styled.nav`
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const SocialLink = styled.a`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: ${theme.colors.secondary};

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src="/assets/Portfolio/Tact Construction.png" alt="Logo" />
        <Navigation>
          <NavigationMenu />
        </Navigation>
        <SocialLinks>
          {/* Add your social icons here */}
          <SocialLink href="https://www.facebook.com/TactBuilt" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook-square"></i>
</SocialLink>

<SocialLink href="https://www.instagram.com/tactconstruction" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i>
</SocialLink>
        </SocialLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
