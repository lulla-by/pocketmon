import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../type/type';
import { getPocketmontInfo } from '../../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface PokemonCardProps {
  monster: Pokemon;
}

interface StyleProps {
  color: string;
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

  const name = data && data.names[2].name;
  const color = getPastelToneColor(data && data.color.name);

  function getPastelToneColor(name: string) {
    switch (name?.toLowerCase()) {
      case "black":
          return "#adb5bd"; // 검은색
      case "blue":
          return "#4dabf7"; // 파란색
      case "brown":
          return "hsl(30, 50%, 40%)"; // 갈색
      case "gray":
          return "hsl(0, 0%, 50%)"; // 회색
      case "green":
          return "#8ce99a" // 초록색
      case "pink":
          return "#faa2c1"; // 분홍색
      case "purple":
          return "#da77f2"; // 보라색
      case "red":
          return "#fa5252"; // 빨간색
      case "white":
          return "hsl(0, 0%, 100%)"; // 흰색
      case "yellow":
          return "#ffd43b"; // 노란색
      default:
          return "#adb5bd(0, 0%, 50%)"; // 기본값 (회색)
  }

  }

  const moveDetail = () => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Monster onClick={moveDetail}>
        <NameBox>
          <IdBox color={color}>{id}</IdBox>
          {name}
        </NameBox>
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
  padding-top: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NameBox = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const IdBox = styled.p<StyleProps>`
  background-color: ${({ color }) => color};
  color: black;
  width: 30px;
  padding: 2px;
  border-radius: 50%;
  text-align: center;
  font-size: 1rem;
  border: 1px solid black;
`;
