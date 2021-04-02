import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Nav } from 'components/Nav/Nav';

import { StyledHome, HeroContainer, Title, InfoContainer } from './HomeStyles';

export const Home = () => {
  return (
    <StyledHome>
      <HeroContainer>
        <Header />
        <Title>
          Everything
          <br />
          real-estate
        </Title>
      </HeroContainer>
      <InfoContainer>
        <Nav />
        <div>
          <input type="text" placeholder="Enter your address" />
          <Link to="/make-offer">
            <button>🡓</button>
          </Link>
        </div>
        <small>
          Get an instant offer, compare your options and <br />
          sell safely with no showings, stress or surprises.
        </small>
      </InfoContainer>
    </StyledHome>
  );
};
