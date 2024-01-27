import { Nav } from 'react-bootstrap';
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

const NavigationMenu = () => {
  return (
    <NavigationContainer>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/services">Our Services</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </NavigationContainer>
  );
};

export default NavigationMenu;
