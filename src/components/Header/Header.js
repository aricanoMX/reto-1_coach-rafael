import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './HeaderStyles';

import userIcon from 'assets/user.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Opendoor</h1>
      </Link>
      <nav>
        <ul>
          <li>Menu</li>
          <li>
            <img src={userIcon} alt="Icon Account" />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
