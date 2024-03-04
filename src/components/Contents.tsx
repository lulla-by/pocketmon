import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Bg from '../assets/6114010.jpg';

const Contents = ({ data }: any) => {
  const returnName = (inputString: string) => {
    const lastChar = inputString?.charAt(inputString.length - 1);

    const hasConsonant = (lastChar?.charCodeAt(0) - 44032) % 28 > 0;
    return hasConsonant ? `${inputString}이` : `${inputString}가`;
  };

  const params = useParams();
  const id = params.id && params.id;
  const name = returnName(data && data.names[2].name);

  const imgSrc = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  return (
    <Container>
      <img src={imgSrc} width={100} height={100} alt={name} />
      <p>앗 야생의 {name} 나타났다!</p>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  height: 200px;
  background: #343a40 url(${Bg}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  gap: 15px;

  p {
    font-size: 1.5rem;
  }
`;
