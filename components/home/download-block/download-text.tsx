import React from 'react';
import styled from 'styled-components';
import HeadText from '../head-text';

const Container = styled.div`
  flex: 0 0 386px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 38px;
  margin-bottom: 65px;
`;

const StoreDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 120px);
  grid-column-gap: 40px;
`;

const DownloadText = () => {
  return (
    <Container>
      <HeadText title="подсекай!" subtitle="скачать приложение" color="white" />
      <Text>Не тяни - выбери свою площадку, установи приложение и принеси рыбы на ужин.</Text>
      <StoreDiv>
        <img src="/images/AppStore.svg" alt="App Store" />
        <img src="/images/GooglePlay.svg" alt="Google Play" />
      </StoreDiv>
    </Container>
  );
};

export default DownloadText;
