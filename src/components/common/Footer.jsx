import '@fortawesome/fontawesome-free/css/all.css';

import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: 1rem;
  text-align: center;
  border-top: 8px solid ${theme.colors.accent}; /* Subtle border color */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled.div`
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

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
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


const Logo = styled.img`
  @media (min-width: 769px) {
    height: 12vh;
  }

  max-width: 100%;
  height: 12vh;
  margin-bottom: 1rem; /* Add margin for separation on mobile */
`;

const FooterText = styled.p`
  margin-top: 1rem;
  grid-column: span 2; // Span two columns
  
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/assets/Portfolio/Tact Construction.png" alt="Logo" />
      <ContactSection>
        <ContactInfo>
          <ContactLabel>Email:</ContactLabel>
          <ContactLink href="mailto:info@example.com">TactBuilt@gmail.com</ContactLink>
        </ContactInfo>
        <ContactInfo>
          <ContactLabel>Phone:</ContactLabel>
          <ContactLink href="tel:+123456789">(314) 649-3340</ContactLink>
        </ContactInfo>
        <FooterText>&copy; 2024 Tact Construction. All rights reserved.</FooterText>
      </ContactSection>
      <SocialLinks>
          {/* Add your social icons here */}
          <SocialLink href="https://www.facebook.com/TactBuilt" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook-square"></i>
</SocialLink>

<SocialLink href="https://www.instagram.com/tactconstruction" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i>
</SocialLink>
        </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;