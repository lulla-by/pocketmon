import Left from '../components/Left';
import Right from '../components/Right';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Layout>
      <Container>
        <Left />
        <Right />
      </Container>
    </Layout>
  );
};

export default Detail;

const Container = styled.main`
  display: flex;
  font-family: "DungGeunMo";
  width: 800px;
  margin: auto;
`
