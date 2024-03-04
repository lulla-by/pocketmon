import Left from '../components/Left';
import Right from '../components/Right';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPocketmontInfo } from '../api';

const DetailPage = () => {
  const params = useParams();
  const id = params.id && params.id;

  const fetchData = async () => {
    const result = await getPocketmontInfo(id);
    setData(result);
  };

  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
        <Container>
          <Left data = {data} />
          <Right data = {data} />
        </Container>
    </Layout>
  );
};

export default DetailPage;

const Container = styled.main`
  display: flex;
  font-family: 'DungGeunMo';
  width: 800px;
  margin: auto;
`;
