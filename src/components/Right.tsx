import React from 'react'
import styled from 'styled-components';
import Description from './Description';

const Right = () => {
  return (
    <Container><Description/></Container>
  )
}

export default Right
const Container = styled.div`
  width: 50%;
  margin-top: 92px;
  background-color: #e03131;
  border-radius: 0px 5px 5px 0px;
  border-left: 1px solid black;
  display: flex;
`;
