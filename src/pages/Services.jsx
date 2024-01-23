import React from 'react';
import styled from 'styled-components';
import theme from '../components/common/theme';

const ServicesPageContainer = styled.div`
  background-color: ${theme.colors.background};
  padding: 2rem;
  text-align: center;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const ServiceTitle = styled.h2`
  color: ${theme.colors.secondary};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.secondary};
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 1.5rem;
`;

const ServicesPage = () => {
  const services = [
    {
      title: 'Kitchen and Bathroom',
      description: 'Tact Construction is committed to your vision. Our team of designers work with you to design spaces that blend stunning aesthetics to fit your style,with functionality that suits your needs. Our skilled craftsmen take pride in precision and attention to detail all while maintaining a clean and safe workspace. We are prepared to turn your vision of a serene bathroom or elegant kitchen to life. ',
      image: "../../public/assets/Portfolio/Lafayette Master Bath 5.jpg" 
    },
    {
      title: 'Whole House',
      description: "Re-envisioning your whole house allows you to unlock the full potential of your home, giving you the power to redefine the way you live. A comprehensive transformation can provide changes to your home's layout tailored to fit your needs and lifestyle, while providing you with the opportunity to customize every inch of your home. Our creative designers and skilled architects are experts at providing cohesive and harmonious designs that reflect your personality and enhance your daily life.",
      image: "src\assets\Portfolio (1)\Walker Kitchen 1.jpg"
    },
    {
      title: 'CUSTOM BUILDS',
      description: 'From your vision to a turnkey home, Tact Construction and our expert team of contractors are equipped to handle every aspect of your project from blueprints and planning to the final coat of paint and landscaping. Our team of specialized designers and craftsmen are ready to bring your new home vision to life.',
      image: "src\assets\Portfolio (1)\Hoard House 4.jpg"
    },
    {
      title: 'ADDITIONS',
      description: 'Tact Construction can increase your living space for whatever suits your needs – more room to enjoy with family, space for entertaining, a home office, bigger kitchen or dining space, and so much more. This extra square footage immediately increases your property value and allows you to customize and re-envision your current home without the cost and headache of selling, building or buying, and moving to a new home. ',
    },
    {
      title: 'CUSTOM FINISHES',
      description: 'Elevate your home with luxurious custom finishes that fit your style and needs. Whether it’s turning your dreary laundry room into a chic and functional space or crafting a stylish home bar for entertaining guests, our team of designers are ready to bring every corner of your home to life. From stunning accent walls to transforming your untouched basement into a cozy living space, Tact Construction is ready to turn your vision into reality.',
    },
    
    // Add more services as needed
  ];

  return (
    <ServicesPageContainer>
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
          <Image src={service.image} alt="Company Building" />
        </ServiceCard>
      ))}
    </ServicesPageContainer>
  );
};

export default ServicesPage;
