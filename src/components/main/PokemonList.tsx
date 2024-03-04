import React, { Fragment, useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { getPocketmontData } from '../../api';
import { Pokemon } from '../../type/type';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const PokemonList = () => {
  const [list, setList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(1); // 시작 오프셋
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (start: number, end: number) => {
    setLoading(true);
    const result = await getPocketmontData(start, end);
    if (offset < 2) {
      setList(() => [...result]);
    } else {
      setList((prevList) => [...prevList, ...result]);
    }

    setOffset(end + 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(1, 50);
  }, []);

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (isIntersecting && !loading) {
      const nextEnd = offset + 49;
      await fetchData(offset, nextEnd);
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <Fragment>
      <Container>
        {list &&
          list.map((monster: Pokemon) => (
            <PokemonCard key={monster.name} monster={monster} />
          ))}
      </Container>
      <DivBox ref={setTarget}>위치확인</DivBox>
    </Fragment>
  );
};

export default PokemonList;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 25px;
`;

const DivBox = styled.div``;
