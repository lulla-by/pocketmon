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
  width: 800px;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding: 5px;
`;
