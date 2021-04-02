import styled from 'styled-components';
import {
  palette,
  // fonts,
  devices,
} from 'styles/GlobalStyles';

export const StyledNav = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;
    font-size: 0.75rem;
    font-weight: 900;
    gap: 0 3.25rem;
    & li {
      height: 100%;
      cursor: pointer;
      & :hover {
        border-bottom: 2px solid ${palette.iconsColor};
      }
      & a {
        display: flex;
        align-items: center;
        height: inherit;
        border: none;
      }
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
