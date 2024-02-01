import JotformAlwaysDisplayed from '../components/common/JotformAlwaysDisplayed';
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the form below:</p>

      {/* Jotform Lightbox Component */}
      <JotformAlwaysDisplayed />
      
      {/* Additional content for the contact page */}
      <p>Other contact information or details can be added here.</p>
    </div>
  );
};

export default ContactPage;
