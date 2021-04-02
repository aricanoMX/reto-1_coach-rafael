import styled from 'styled-components';
import {
  // palette,
  // fonts,
  devices,
  palette,
} from 'styles/GlobalStyles';
import { StyledNav } from 'components/Nav/NavStyles';

export const StyledOffer = styled.div`
  display: grid;
  grid-template-rows: 60vh 40vh;
  height: 100%;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const HouseToOffer = styled.div`
  background: center center no-repeat
    url('https://loupventures.com/wp-content/uploads/2021/02/Feat-Zillow-Opendoor-1.jpeg');
  background-size: cover;
  & a {
    & div {
      position: absolute;
      width: 2rem;
      height: 2rem;
      top: 2.5%;
      left: 2.5%;
      border-radius: 50%;
      background-color: ${palette.dividerColorAlpha};
      & img {
        padding: 30%;
        filter: invert(0);
      }
    }
  }
  & div {
    position: absolute;
    top: 52.5%;
    left: 45%;
    width: 2.25rem;
    height: 2.235rem;
    border: none;
    & img {
      background: transparent;
      filter: invert(100);
    }
  }
`;

export const InformationOffer = styled.div`
  display: grid;
  grid-template-rows: 20% 55% 25%;
  align-items: center;
  overflow-x: hidden;
  padding: 0 0.5rem;
`;
export const NavOffer = styled(StyledNav)`
  display: flex;
  height: 100%;
  border-bottom: 2px solid ${palette.borderColor};
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & ul {
    height: 100%;
    width: 100%;
    gap: 0 1.75rem;
    font-size: 0.75rem;
    & :nth-child(3) {
      min-width: 4.5rem;
    }
  }
`;

export const UbicationOffer = styled.div`
  display: grid;
  grid-template: 75% 25% / 1fr;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  & :nth-of-type(1) {
    display: inherit;
    grid-template: 1fr/ 60% 40%;
    width: 100%;
    justify-content: space-between;
    & h2 {
      display: block;
    }
    & div {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10%;
      height: 100%;
      & img {
        padding: 0.375rem;
        height: 1.75rem;
        width: 1.75rem;
        border: 2px solid ${palette.borderColor};
        filter: saturate(100%);
      }
      & :first-child {
        border-right: 1.25px solid ${palette.borderColor};
      }
      & :last-child {
        border-left: 1.25px solid ${palette.borderColor};
      }
    }
  }
  & :nth-of-type(2) {
    display: flex;
    align-items: center;
    height: inherit;
    gap: 0 2rem;
    & small {
      align-items: center;
      width: auto;
      font-weight: 900;
      font-size: 0.625rem;
    }
  }
`;

export const MakeAnOffer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 2.5%;
  height: 100%;
  & button {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 800;
    background: none;
    border: 1px solid ${palette.borderColor};
    gap: 0 1rem;
  }
  & :nth-of-type(1) {
    justify-content: flex-start;
    padding-left: 7.5%;
    background: none;
    border-right: 1.25px solid ${palette.borderColor};
    border-radius: 0.25rem 0 0 0.25rem;
    & img {
      height: 0.75rem;
      width: 0.75rem;
      padding: 0;
      border: none;
    }
  }
  & :nth-of-type(2) {
    justify-content: center;
    color: white;
    background-color: ${palette.iconsColor};
    border: 1px solid ${palette.iconsColor};
    border-radius: 0 0.25rem 0.25rem 0;
    & img {
      height: 0.75rem;
      width: 0.75rem;
      padding: 0;
      border: none;
      filter: invert(100);
    }
  }
`;
