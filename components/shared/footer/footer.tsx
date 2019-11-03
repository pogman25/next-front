import React, { memo } from 'react';
import styled from 'styled-components';
import useLocale from '../../../hooks/useLocale';

const Container = styled.footer`
  height: 220px;
  width: 100%;
  background-repeat: repeat no-repeat;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 5;
`;

const Footer = () => {
  const { setEN, setRU } = useLocale();
  return (
    <Container>
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
