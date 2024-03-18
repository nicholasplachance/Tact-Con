import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import styled from 'styled-components';
import theme from '../components/common/theme';

const ServicesNavigationContainer = styled.nav`
  background-color: ${theme.colors.background};
  padding: 2rem;
  text-align: center;
  color: ${theme.colors.primary};
`;

const ServiceLink = styled(NavLink)`
  display: block;
  margin: 1.5rem 0;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ServicesNavigation = () => {
  return (
    <ServicesNavigationContainer>
      <h1>Our Services</h1>
      <ServiceLink to="/kitchen-bathroom">Kitchen and Bathroom</ServiceLink>
      <ServiceLink to="/whole-house">Whole House</ServiceLink>
      <ServiceLink to="/custom-builds">Custom Builds</ServiceLink>
      <ServiceLink to="/additions">Additions</ServiceLink>
      <ServiceLink to="/custom-finishes">Custom Finishes</ServiceLink>
    </ServicesNavigationContainer>
  );
};

export default ServicesNavigation;
