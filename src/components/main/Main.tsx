import React from 'react';
import styled from 'styled-components';
import PokemonList from './PokemonList';

const Main = () => {
  return (
    <Container>
      <Title>포켓몬 도감</Title>
      <PokemonList />
    </Container>
  );
};

export default Main;

const Container = styled.main`
  font-family: 'DungGeunMo';
  margin: auto;
  margin-top: 30px;
  width: 800px;
`;

const Title = styled.h2`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;
