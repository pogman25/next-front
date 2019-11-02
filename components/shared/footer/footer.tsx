import React, { memo } from 'react';
import styled from 'styled-components';
import useLocale from '../../../hooks/useLocale';

const Container = styled.footer`
  height: 320px;
  width: 100%;
  background-image: url('/images/white-wave.svg');
  background-size: contain;
  background-repeat: repeat no-repeat;
  background-color: #80deea;
`;

const Footer = () => {
  const { setEN, setRU } = useLocale();
  return (
    <Container>
      {' '}
      <button type="button" onClick={setRU}>
        RU
      </button>
      <button type="button" onClick={setEN}>
        EN
      </button>
    </Container>
  );
};

export default memo(Footer);
