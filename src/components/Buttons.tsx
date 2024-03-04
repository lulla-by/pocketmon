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
  background: #012d2b;
  border-radius: 50%;
  position: absolute;
  box-shadow: 2px 2px 3px black;
  top: 10px;
  left: 20px;
  `;

const Rectangle = styled.div`
  width: 110px;
  height: 60px;
  margin-left: 30px;
  box-shadow: 2px 2px 3px black;
  border: 1px solid #012d2b;
  background: #40c057;
  border-radius: 5px;
  `;
const Rectangle2 = styled.div<ButtonStyleProps>`
  width: 50px;
  border-radius: 5px;
  height: 5px;
  background: ${({ color }) => color};
  box-shadow: 1px 1px 2px black;
  border: 1px solid #012d2b;
  border-radius: 3px;
`;

const Cross = styled.div`
  background: #012d2b;
  height: 100px;
  position: relative;
  width: 30px;
  border-radius: 5px;
  margin: 0;
  box-shadow: 3px 3px 3px black;

  &::after {
    background: #012d2b;
    box-shadow: 3px 0px 0px black;
    content: '';
    height: 30px;
    left: -35px;
    position: absolute;
    top: 35px;
    width: 100px;
    border-radius: 5px;
  }
`;
