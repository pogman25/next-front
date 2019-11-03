import React, { memo } from 'react';
import styled from 'styled-components';

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
`;

const LighterWave = styled(BasicWave)`
  bottom: 200px;
  background-color: ${({ theme }) => theme.colors.mainBlueLight};
`;

const LightestWave = styled(BasicWave)`
  bottom: 100px;
  background-color: ${({ theme }) => theme.colors.mainBlueLighter};
`;

const WhiteWave = styled(BasicWave)`
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.mainBlueLightest};
  z-index: 3;
`;

const LightImgWave = styled(BasicWave)`
  bottom: 300px;
  background-image: url('/images/blue-wave.svg');
`;

const LighterImgWave = styled(BasicWave)`
  bottom: 200px;
  background-image: url('/images/light-blue-wave.svg');
`;

const LightestImgWave = styled(BasicWave)`
  bottom: 100px;
  background-image: url('/images/lighter-blue-wave.svg');
  z-index: 3;
`;

const WhiteImgWave = styled(BasicWave)`
  bottom: 0;
  background-image: url('/images/white-wave.svg');
  z-index: 4;
`;

const Waves = () => {
  return (
    <>
      <LightWave />
      <LighterWave />
      <LightestWave />
      <WhiteWave />
      <LightImgWave />
      <LighterImgWave />
      <LightestImgWave />
      <WhiteImgWave />
    </>
  );
};

export default memo(Waves);
