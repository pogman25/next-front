import React from 'react';
import styled from 'styled-components';
import Waves from '../waves';
import PromoWrapper from '../promo-wrapper';
import DownloadText from './download-text';

const Container = styled(PromoWrapper)`
  height: 564px;
  position: relative;
`;

const DownloadImg = styled.div`
  flex: 1 1 0;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 280px);
  grid-column-gap: 34px;
  margin-right: 20px;
`;

const TelScreen = styled.img`
  position: relative;
  z-index: 2;
  transform: translateY(-100px);
`;

const TelMainScreen = styled.img`
  position: relative;
  z-index: 4;
  transform: translateY(-130px);
`;

const DownloadBlock = () => {
  return (
    <Container bgColor="mainBlue">
      <DownloadImg>
        <TelScreen src="/images/tel-screen.png" alt="Tel screen" />
        <TelMainScreen src="/images/tel-main-screen.png" alt="Tel main screen" />
      </DownloadImg>
      <DownloadText />
      <Waves />
    </Container>
  );
};

export default DownloadBlock;
