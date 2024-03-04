import styled from 'styled-components';
import Contents from './Contents';

type ButtonStyleProps = {
  width: number;
  height: number;
};
const IllustratedGuide = () => {

  return (
    <Container>
      <TopBox>
        <Button width={10} height={10} />
        <Button width={10} height={10} />
      </TopBox>
      <Contents />
      <BottomBox>
        <Button width={20} height={20} />
      </BottomBox>
    </Container>
  );
};

export default IllustratedGuide;

const Container = styled.div`
  position: relative;
  width: 80%;
  padding: 40px;
  margin: auto;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 2px 2px 3px black;
  background-color:#f1f3f5 ;
`;



const TopBox = styled.div`
  display: flex;
  position: absolute;
  gap: 30px;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
`;

const BottomBox = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  position: absolute;
  gap: 30px;
  bottom: 10px;
`;
const Button = styled.div<ButtonStyleProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: red;
  border-radius: 50%;
  border: 1px solid #495057;
`;
