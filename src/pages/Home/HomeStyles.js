import styled from 'styled-components';
import {
  // palette,
  devices,
  palette,
} from 'styles/GlobalStyles';
// import Home from 'assets/Home.jpg';

export const StyledHome = styled.main`
  /* z-index: 1; */
  display: grid;
  grid-template: 70vh 30vh / 1fr;
  color: white;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const HeroContainer = styled.div`
  background: url('https://i.pinimg.com/originals/ec/69/cf/ec69cf316e082dd2218d2a19a7feb6d2.jpg')
    no-repeat center top;
  background-size: 100%;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 3.25rem;
  line-height: 1.05;
  transform: translate(0, 5vh);
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: 4rem 4rem auto;
  align-items: center;
  color: #242424;
  font-weight: 600;
  padding: 0 5%;
  & div {
    display: flex;
    border-top: 2px solid ${palette.borderColor};
    border-bottom: 2px solid ${palette.borderColor};
    & input {
      display: inherit;
      align-items: center;
      width: 100%;
      height: 4rem;
      border: none;
      font-size: 1rem;
      outline: none;
      &::placeholder {
        color: black;
        font-weight: 600;
      }
    }
    & a {
      border: none;
      & button {
        height: 100%;
        width: 2.5rem;
        font-size: 2rem;
        color: ${palette.iconsColor};
        background: none;
        border: none;
        transform: rotate(-90deg);
      }
    }
  }
  & small {
    font-weight: 300;
  }
`;
