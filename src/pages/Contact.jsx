import JotformAlwaysDisplayed from '../components/common/JotformAlwaysDisplayed';
import React from 'react';
import styled from 'styled-components';
import theme from '../components/common/theme';


const ContactPageContainer = styled.div`
  background-color: ${theme.colors.background};
  margin: auto;
  padding: 20px;
  color: ${theme.colors.primary};
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const FormButton = styled.button`
  background-color: #4caf50;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
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
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  margin-top: 1rem;
  grid-column: span 2; // Span two columns
  
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <Section>
        <Heading>Contact Us</Heading>
        <Paragraph>Feel free to reach out to us using the form below:</Paragraph>
      </Section>

      {/* Additional content for the contact page */}
      <Section>
        <Paragraph>
          If you prefer, you can also contact us through the information below:
        </Paragraph>
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
        {/* Add your contact information here */}
      </Section>


    </ContactPageContainer>
  );
};

export default ContactPage;

