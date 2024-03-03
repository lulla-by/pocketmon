import Left from '../components/Left';
import Right from '../components/Right';
import Layout from '../components/Layout';
import styled from 'styled-components';

const DetailPage = () => {
  return (
    <Layout>
      <Container>
        <Left />
        <Right />
      </Container>
    </Layout>
  );
};

export default DetailPage;

const Container = styled.main`
  display: flex;
  font-family: "DungGeunMo";
  width: 800px;
  margin: auto;
`
