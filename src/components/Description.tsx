import styled from 'styled-components';

const Description = ({data}:any) => {

  const group = ["수중"]

  const des = ['태어났을 때부터 등에 이상한 씨앗이 심어져 있으며 몸과 함께 자란다고 한다.',
    '태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다.',
    '양지에서 낮잠 자는 모습을 볼 수 있다. 태양의 빛을 많이 받으면 등의 씨앗이 크게 자란다.']
  return (
    <Container>
      <Title>이상해씨 (씨앗포켓몬)</Title>
      <GroupList>
        {group &&
          group.map((group: any, i: number) => (
            <MonsteDescription key={i}>{group}</MonsteDescription>
          ))}
      </GroupList>
      <ul>
        {
          des.map((des: any, i: number) => (
            <MonsteDescription key={i}>{des}</MonsteDescription>
          ))}
      </ul>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  width: 300px;
  height: 400px;
  background-color: black;
  margin: auto;
  color: #37b24d;
  font-weight: 600;
  border-radius: 5px;
  padding: 20px;
`;
const Title = styled.p`
  font-size: 2rem;
`;
const GroupList = styled.ul`
  display: flex;
  gap: 20px;
`;
const MonsteDescription = styled.li`
  margin-top: 20px;
  font-size: 1.5rem;
`;
