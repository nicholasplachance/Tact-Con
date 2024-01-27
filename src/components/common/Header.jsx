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
  display: grid;
  grid-template-columns: auto 1fr; /* Logo takes the first column, Nav takes the second */
  align-items: start; /* Align items to the start (top) */
  

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* On mobile, only one column */
    margin-top: 8rem; /* Adjust the margin to raise the nav menu */
  }
`;

const LogoText = styled.div`
@media (min-width: 769px) {
  display: none;
}

  @media (max-width: 768px) {
    color: ${theme.colors.secondary};
    max-width: 40vw;
    height: auto;
    margin-bottom: 1rem; /* Add margin for separation on mobile */
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

const Navigation = styled.nav`
  display: flex;
  flex-direction: column; /* Display links in a column for mobile */
  margin-left: 13rem; /* Add some space between logo and nav for desktop */
  margin-top: -15rem; /* Add margin to the top for desktop */

  @media (min-width: 769px) {
    display: block;
    margin-top: 4rem; /* Add margin to the top for desktop */
    align-items: flex-start; /* Align links to the start (left) for desktop */
    margin-left: 29rem; /* Adjust the margin for desktop */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoText>
          <h3>Tact Construction</h3>
        </LogoText>
        {/* Logo shown on both desktop and mobile */}
        <Logo src="/assets/Portfolio/Tact Construction.png" alt="Logo" />

        {/* Navigation links shown on both desktop and mobile */}
        <Navigation>
          <NavigationMenu />
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
