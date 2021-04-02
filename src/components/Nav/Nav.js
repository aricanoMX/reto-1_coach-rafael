import React from 'react';
import { StyledNav } from './NavStyles';

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a>Sell</a>
        </li>
        <li>
          <a>Buy</a>
        </li>
        <li>
          <a>Finance</a>
        </li>
        <li>
          <a>Home value</a>
        </li>
      </ul>
    </StyledNav>
  );
};
