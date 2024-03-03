import React, { Fragment, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import './fonts/fonts.css';

interface Child {
  children: ReactNode;
}
const Layout = ({ children }: Child) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;

