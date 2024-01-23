import HeroBannerComponent from '../components/common/HeroBanner';
import React from 'react';
import styled from 'styled-components';
import theme from '../components/common/theme';

const HeroBanner = styled.div`
  background-image: url('/path/to/your-image.jpg');
  background-size: cover;
  background-position: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  text-align: center;
  padding: 5rem 0;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    height: 40vh;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const CompanyInfo = styled.div`
  text-align: center;
  padding: 3rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    width: 60vw;
    margin: 5% 20%;
  }
`;



const Home = () => {
  return (
    <div>
      <HeroBannerComponent/>
      <CompanyInfo>
        <h2>Tact Construction</h2>
        <p>
        Our team of professionals are dedicated to your satisfaction. Whether we are reimagining your existing space or crafting your new custom home, our passion for precision and commitment to service enable us to bring your vision to life. 
        </p>
      </CompanyInfo>
    </div>
  );
};

export default Home;
