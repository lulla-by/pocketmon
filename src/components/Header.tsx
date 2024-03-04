import styled from 'styled-components';
import Bg from '../assets/International_Pokémon_logo.svg.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/`);
      }}
    >
      <ImgBox />
      <SrOnlyTitle>포켓몬 도감</SrOnlyTitle>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: #339af0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  cursor: pointer;
  background: url(${Bg}) no-repeat center center;
  background-size: contain;
  height: 10rem;
  width: 300px;
  margin: 10px;
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
