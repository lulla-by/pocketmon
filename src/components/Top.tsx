import styled from 'styled-components';

type ButtonStyleProps = {
  width: number;
  height: number;
  color: string;
  boxshadow?: 'no';
};

const Top = () => {
  return (
    <Container>
      <Button width={60} height={60} color="#f1f3f5">
        <Button
          boxshadow={'no'}
          width={50}
          height={50}
          color="#1c7ed6"
        ></Button>
      </Button>
      <Button width={15} height={15} color="#e03131" />
      <Button width={15} height={15} color="#fcc419" />
      <Button width={15} height={15} color="#2f9e44" />
    </Container>
  );
};

export default Top;
const Container = styled.div`
  padding: 10px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;
const Button = styled.div<ButtonStyleProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: ${({ color }) => color};
  box-shadow: ${({ boxshadow }) =>
  boxshadow === 'no' ? 'none' : '2px 2px 3px black'};
  border-radius: 50%;
  border: 1px solid #495057;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) =>
    `radial-gradient( at 30% 10%, #f1f3f5, ${color}, ${color} )`};
`;
