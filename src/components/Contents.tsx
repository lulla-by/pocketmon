import styled from 'styled-components';
import Bg from '../assets/6114010.jpg';

const Contents = ({data}:any) => {

  const imgSrc = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif`;
  return (
    <Container>
      <img src={imgSrc} width={100} height={100} alt=''/>
      <p>앗 야생의 이상해씨가 나타났다!</p>
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
