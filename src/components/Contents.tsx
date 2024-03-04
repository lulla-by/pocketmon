import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Bg from '../assets/6114010.jpg';
import { useRecoilValueLoadable } from 'recoil';
import { poketmonDataSelector } from '../store/atom';

const Contents = () => {
  const params = useParams();
  const id = params.id && params.id;

  const fetchedData = useRecoilValueLoadable(poketmonDataSelector);

  if (fetchedData.state === 'hasValue' && fetchedData.contents) {
    const returnName = (inputString: string) => {
      const lastChar = inputString?.charAt(inputString.length - 1);
      const hasConsonant = (lastChar?.charCodeAt(0) - 44032) % 28 > 0;
      return hasConsonant ? `${inputString}이` : `${inputString}가`;
    };

    const name = returnName(fetchedData.contents.names[2].name);

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

    return (
      <Container>
        <img src={imgSrc} width={100} height={100} alt={name} />
        <Description>앗 야생의 {name} 나타났다!</Description>
      </Container>
    );
  }

  return <Container>로딩 중...</Container>;
};

export default Contents;

const Container = styled.div`
  height: 200px;
  background: #343a40 url(${Bg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  img{
    margin-bottom: 15px;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  background-color: white;
  border: 6px solid black;
  width: 100%;
  padding: 5px;
  color: black;
  border-style: double;
  /* border-radius: 10px; */
  position: absolute;
  bottom: 0px;
`;
