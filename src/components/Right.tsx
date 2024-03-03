import React from 'react'
import styled from 'styled-components';
import Description from './Description';

const Right = () => {
  return (
    <Container><Description/></Container>
  )
}

export default Right
const Container = styled.section`
  width: 50%;
  padding: 20px;
  margin-top: 90px;
  background-color: #e03131;
  border-radius: 0px 5px 5px 0px;
  border-left: 1px solid black;
  display: flex;
`;
