import React, { Fragment, ReactNode } from 'react';
import Header from './Header';
import '../assets/fonts/fonts.css';

interface Child {
  children: ReactNode;
}
const Layout = ({ children }: Child) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;

