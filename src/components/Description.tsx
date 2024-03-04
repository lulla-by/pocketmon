import styled from 'styled-components';

const Description = ({ data }: any) => {
  const des =
    data &&
    data.flavor_text_entries.filter(
      (text: any) =>
        text.language.name === 'ko' &&
        (text.version.name === 'x' ||
          text.version.name === 'omega-ruby' ||
          text.version.name === 'y')
    );
  const group = data?.['egg_groups'];

  return (
    <Container>
      <Title>
        {data && data.names[2].name}({data?.genera[1].genus})
      </Title>
      <GroupList>
        {group &&
          group.map((group: any, i: number) => (
            <GroupLi key={i}>{group.name}</GroupLi>
          ))}
      </GroupList>
      <ul>
        {des &&
          des.map((des: any, i: number) => (
            <MonsteDescription key={i}>{des.flavor_text}</MonsteDescription>
          ))}
      </ul>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border: 6px solid black; /* 변경된 부분 */
  margin: auto;
  color: black;
  border-style: double;
  font-weight: 600;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
const GroupLi = styled.li`
  background-color: black;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 1.5rem;
`;
