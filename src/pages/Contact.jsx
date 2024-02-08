import JotformAlwaysDisplayed from '../components/common/JotformAlwaysDisplayed';
import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
`;

const FormButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <Section>
        <Heading>Contact Us</Heading>
        <Paragraph>Feel free to reach out to us using the form below:</Paragraph>
      </Section>

      {/* Jotform Lightbox Component */}
      <JotformAlwaysDisplayed />

      {/* Additional content for the contact page */}
      <Section>
        <Paragraph>
          If you prefer, you can also contact us through the information below:
        </Paragraph>
        {/* Add your contact information here */}
      </Section>


    </ContactPageContainer>
  );
};

export default ContactPage;

