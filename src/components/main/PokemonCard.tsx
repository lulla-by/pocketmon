import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../type/type';
import { getPocketmontInfo } from '../../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pokemonId } from '../../store/atom';

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
      case 'black':
        return '#adb5bd'; // 검은색
      case 'blue':
        return '#add3e6'; // 파란색
      case 'brown':
        return '#cdbca7'; // 갈색
      case 'gray':
        return '#d7d7d5'; // 회색
      case 'green':
        return '#b3dad8'; // 초록색
      case 'pink':
        return '#faa2c1'; // 분홍색
      case 'purple':
        return '#c3a4d6'; // 보라색
      case 'red':
        return '#e6b185'; // 빨간색
      case 'white':
        return '#f3edbb'; // 흰색
      case 'yellow':
        return '#ede66f'; // 노란색
      default:
        return '#adb5bd(0, 0%, 50%)'; // 기본값 (회색)
    }
  }

  const [initialId, setInitialId] = useRecoilState(pokemonId);
  const moveDetail = () => {
    setInitialId(id);
    localStorage.setItem('id', id);
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
  border: 1px solid #495057;
  position: relative;
  cursor: pointer;
  border-radius: 2px;
  background-color: #f8f9fa;
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
  font-family: 'Pretendard';
  position: absolute;
  left: 5px;
  top: 5px;
  display: flex;
  font-weight: 600;
  align-items: center;
  font-size: 1rem;
  gap: 5px;
`;
const IdBox = styled.p<StyleProps>`
  font-size: 1rem;
  background-color: ${({ color }) => color};
  padding: 1px;
  color: black;
  min-width: 25px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid black;
`;
