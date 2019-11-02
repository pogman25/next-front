import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 564px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.mainBlue};
`;

const BasicWave = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  z-index: 1;
  background-repeat: repeat no-repeat;
`;

const LightWave = styled(BasicWave)`
  bottom: 300px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  background-image: url('/images/blue-wave.svg');
`;

const LighterWave = styled(BasicWave)`
  bottom: 200px;
  background-color: ${({ theme }) => theme.colors.mainBlueLight};
  background-image: url('/images/light-blue-wave.svg');
`;

const LightestWave = styled(BasicWave)`
  bottom: 100px;
  background-color: ${({ theme }) => theme.colors.mainBlueLighter};
  background-image: url('/images/lighter-blue-wave.svg');
`;

const WhiteWave = styled(BasicWave)`
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.mainBlueLightest};
  background-image: url('/images/white-wave.svg');
`;

const DownloadBlock = () => {
  return (
    <Container>
      <LightWave />
      <LighterWave />
      <LightestWave />
      <WhiteWave />
    </Container>
  );
};

export default DownloadBlock;
