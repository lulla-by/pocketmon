import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Child {
  children: ReactNode;
}
const Layout = ({ children }: Child) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.div`
  width: 800px;
  margin: auto;
`