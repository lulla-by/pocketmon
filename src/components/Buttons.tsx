import React from 'react';
import styled from 'styled-components';

type ButtonStyleProps = {
  color: string;
};
const Buttons = () => {
  return (
    <Container>
      <Circle />
      <TopBox>
        <Rectangle2 color="#f03e3e" />
        <Rectangle2 color="#228be6" />
      </TopBox>
      <Rectangle />
      <Cross />
    </Container>
  );
};

export default Buttons;
const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 150px;
  justify-content: space-evenly;
  border-radius: 0px 0px 5px 5px;
`;
const TopBox = styled.div`
  display: flex;
  position: absolute;
  gap: 40px;
  top: 15px;
  right: 40%;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 20px;
`;

const Rectangle = styled.div`
  width: 110px;
  height: 60px;
  margin-left: 30px;
  background: #40c057;
  border: 2px solid black;
  border-radius: 5px;
`;
const Rectangle2 = styled.div<ButtonStyleProps>`
  width: 50px;
  border-radius: 5px;
  height: 5px;
  background: ${({ color }) => color};
  border: 2px solid black;
  border-radius: 3px;
`;

const Cross = styled.div`
  background: black;
  height: 100px;
  position: relative;
  width: 20px;
  border-radius: 3px;
  margin: 0;

  &:after {
    background: black;
    content: '';
    height: 20px;
    left: -40px;
    position: absolute;
    top: 40px;
    width: 100px;
    border-radius: 3px;
  }
`;
