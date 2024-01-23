import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: 1rem;
  text-align: center;
  border-top: 1px solid ${theme.colors.accent}; /* Subtle border color */
`;

const ContactSection = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  margin: 0 1rem 1rem 1rem;
  text-align: center;
`;

const ContactLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Tact Construction. All rights reserved.</p>
      <ContactSection>
        <ContactInfo>
          <ContactLabel>Email:</ContactLabel>
          <ContactLink href="mailto:info@example.com">TactBuilt@gmail.com</ContactLink>
        </ContactInfo>
        <ContactInfo>
          <ContactLabel>Phone:</ContactLabel>
          <ContactLink href="tel:+123456789">(314) 649-3340</ContactLink>
        </ContactInfo>
      </ContactSection>
    </FooterContainer>
  );
};

export default Footer;
