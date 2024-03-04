import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { getPocketmontData } from '../../api';
import { Pokemon } from '../../type/type';
import styled from 'styled-components';

const PokemonList = () => {
  const [list, setList] = useState<Pokemon[]>();
  const fetchData = async () => {
    const result = await getPocketmontData();
    setList(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      {list &&
        list.map((monster: Pokemon) => (
          <PokemonCard key={monster.url.split('/')[6]} monster={monster} />
        ))}
    </Container>
  );
};

export default PokemonList;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 25px;
`;
