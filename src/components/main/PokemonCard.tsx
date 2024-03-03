import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../type/type';
import { getPocketmontInfo } from '../../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface PokemonCardProps {
  monster: Pokemon;
}

const PokemonCard = ({ monster }: PokemonCardProps) => {
  const navigate = useNavigate();
  const id = monster.url.split('/')[6];
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const [data, setData] = useState<any>();
  const fetchData = async () => {
    const result = await getPocketmontInfo(id);
    setData(result);
  };

  const moveDetail = () => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Monster onClick={moveDetail}>
        {data && data.names[2].name}
        <img src={img} alt="" width={100} height={100} />
      </Monster>
    </Container>
  );
};

export default PokemonCard;

const Container = styled.li`
  padding: 10px;
  border: 1px solid black;
  position: relative;
`;
const Monster = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
