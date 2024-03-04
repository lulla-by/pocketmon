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
      <Title>{data && data.names[2].name}({data?.genera[1].genus})</Title>
      <GroupList>
        {group &&
          group.map((group: any, i: number) => (
            <MonsteDescription key={i}>{group.name}</MonsteDescription>
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
