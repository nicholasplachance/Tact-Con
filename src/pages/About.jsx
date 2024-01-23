import React from 'react';
import styled from 'styled-components';

const ParallaxImageContainer = styled.div`
  position: relative;
  height: 500px; /* Adjust the height as needed */
  overflow: hidden;
`;

const ParallaxImage = styled.div`
  width: 100%;
  height: 550px; /* Adjust the height as needed */
  background-image: url('assets/Portfolio/Family.JPG');
  background-size: fit;
  background-position: center top;
  background-attachment: fixed; /* Add parallax effect */
  background-repeat: no-repeat;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

const AboutContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const AboutPage = () => {
  return (
    <>
      <ParallaxImageContainer>
        <ParallaxImage src="assets/Portfolio/Family.JPG" alt="Company Building" />
      </ParallaxImageContainer>
      <AboutContainer>
        <Title>WHO WE ARE</Title>
        <SubTitle>Family</SubTitle>
        <Description>
          Tact Construction is a family owned and operated remodel and new build company servicing the St. Louis and surrounding areas. Our paramount goal is your satisfaction. We believe in putting people first and building relationships between both our clients and team members. We take pride in not just constructing homes, but also in building trust through honesty and integrity. We are ready to turn your vision into a reality together.
          {/* Add more sections as needed */}
        </Description>
      </AboutContainer>
      
      <AboutContainer>
          <Title>WHAT WE DO</Title>
          <SubTitle>Vision</SubTitle>
          <Description>
          Having a clear vision to an end goal is paramount to any process. From the beginning our designers and project managers will discuss your aspirations, preferences, and project goals as well as timelines, budget, approvals, and permits. While our project managers plan schedules and acquire approvals and permits, our team of skilled architects and designers will closely collaborate with you to translate those visions into comprehensive drawings to ensure you and our team members have a clear understanding of your final project. 
              {/* Add more sections as needed */}
          </Description>
      </AboutContainer>
      
      <AboutContainer>
          <Title>WHAT WE DO</Title>
          <SubTitle>Vision</SubTitle>
          <Description>
          Having a clear vision to an end goal is paramount to any process. From the beginning our designers and project managers will discuss your aspirations, preferences, and project goals as well as timelines, budget, approvals, and permits. While our project managers plan schedules and acquire approvals and permits, our team of skilled architects and designers will closely collaborate with you to translate those visions into comprehensive drawings to ensure you and our team members have a clear understanding of your final project. 
              {/* Add more sections as needed */}
          </Description>
      </AboutContainer>

      <AboutContainer>
          <Title>WHAT WE DO</Title>
          <SubTitle>Vision</SubTitle>
          <Description>
          Having a clear vision to an end goal is paramount to any process. From the beginning our designers and project managers will discuss your aspirations, preferences, and project goals as well as timelines, budget, approvals, and permits. While our project managers plan schedules and acquire approvals and permits, our team of skilled architects and designers will closely collaborate with you to translate those visions into comprehensive drawings to ensure you and our team members have a clear understanding of your final project. 
              {/* Add more sections as needed */}
          </Description>
      </AboutContainer>

      </>
  );
};

export default AboutPage;
