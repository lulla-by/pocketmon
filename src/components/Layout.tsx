import React, { Fragment, ReactNode } from 'react';
import Header from './Header';
import '../assets/fonts/fonts.css';
import Footer from './Footer';
import styled from 'styled-components';

import Bg from "../assets/태초마을.webp"

interface Child {
  children: ReactNode;
}
const Layout = ({ children }: Child) => {
  return (
    <Fragment>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </Fragment>
  );
};

export default Layout;
const Contents = styled.main`
position: relative;
min-height: calc(100vh - 15rem - 20px);
display: flex;
align-items: center;
background-image: url(${Bg});
`
