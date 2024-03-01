import React from 'react';
import styled from 'styled-components';
import Top from './Top';
import IllustratedGuide from './IllustratedGuide';
import Buttons from './Buttons';

const Left = () => {
  return (
    <Container>
      <Top />
      <IllustratedGuide />
      <Buttons />
    </Container>
  );
};

export default Left;

const Container = styled.div`
  width: 50%;
  background-color: #e03131;
  border-radius: 5px;
`;
