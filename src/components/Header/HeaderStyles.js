import styled from 'styled-components';
import { palette, fonts, devices } from 'styles/GlobalStyles';

export const StyledHeader = styled.div`
  z-index: 2;
  display: grid;
  grid-template: 4rem/ 1fr 1fr;
  align-items: center;
  padding: 0 5%;
  & :first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & h1 {
      font-family: ${fonts.titleFont};
      font-size: 1.75rem;
      color: white;
      letter-spacing: 0.0625rem;
    }
  }
  & :last-child {
    display: flex;
    justify-content: flex-end;
    & ul {
      display: inherit;
      transform: translate(0, 0.25rem);
      & :first-child {
        padding: 0 1rem;
      }
      & :last-child {
        padding: 0 0.375rem;
        & img {
          height: 1.75rem;
          width: 1.75rem;
          filter: invert(100%);
        }
      }
      & li {
        display: inherit;
        justify-content: center;
        align-items: center;

        height: 2.5rem;
        font-weight: 400;
        color: white;
        border: thin solid ${palette.borderColorAlpha};
      }
    }
  }
  /* & nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & ul {
      display: inherit;
      & li {
        display: inherit;
        justify-content: center;
        height: 2.5rem;
        font-weight: bold;
        color: white;
        border: thin solid ${palette.borderColorAlpha};
        & :nth-child(1) {
          padding: 0 1rem;
          color: red;
        }
        & :nth-child(2) {
          
        }
      }
    }
  } */

  /* color: ${palette.borderColor}; */
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
  @media ${devices.breakpointsDesktopLarge} {
  }
`;
