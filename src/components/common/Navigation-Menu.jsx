import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

import { Nav, NavDropdown } from 'react-bootstrap';

import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const NavigationContainer = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled(Nav.Link)`
  text-decoration: none;
  color: black;
  margin: 0.5rem;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.3rem;
    font-size: 1rem;
  }
`;

// Styled NavDropdown
const StyledNavDropdown = styled(NavDropdown)`
  .nav-link {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    margin: 0.5rem;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin: 0.3rem;
      font-size: 1rem;
    }
  }

  .dropdown-menu {
    background-color: ${theme.colors.primary}; // Customize the background color
  }

  .dropdown-item {
    color: black; // Customize the color of dropdown items
  }
`;

const NavigationMenu = () => {
  return (
    <NavigationContainer>
      <NavLink href="/">Home</NavLink>

      {/* About Dropdown */}
      <StyledNavDropdown title="About" id="about-dropdown">
        <NavLink href="/who-we-are">Who We Are</NavLink>
        <NavLink href="/what-we-do">What We Do</NavLink>
      </StyledNavDropdown>

      {/* Services Dropdown */}
      <StyledNavDropdown title="Our Services" id="services-dropdown">
      <NavLink href="/additions">Additions</NavLink>
      <NavLink href="/custom-builds">Custom Builds</NavLink>
      <NavLink href="/custom-finishes">Custom Finishes</NavLink>
        <NavLink href="/kitchen-bathroom">Kitchen and Bathroom</NavLink>
        <NavLink href="/whole-house">Whole House</NavLink>
        
        
        
      </StyledNavDropdown>

      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
    </NavigationContainer>
  );
};

export default NavigationMenu;
