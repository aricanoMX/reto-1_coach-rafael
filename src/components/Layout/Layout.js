import { Header } from 'components/Header/Header';
import React from 'react';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
