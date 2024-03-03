import styled from 'styled-components';
import Bg from '../assets/International_Pokémon_logo.svg.png';

const Header = () => {
  return (
    <Container>
      <SrOnlyTitle>포켓몬 도감</SrOnlyTitle>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  margin: 20px 0px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Bg}) no-repeat center center;
  background-size: contain;
`;
const SrOnlyTitle = styled.h1`
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
