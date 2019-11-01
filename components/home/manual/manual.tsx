import React from 'react';
import styled from 'styled-components';
import HeadText from '../head-text';
import PromoWrapper from '../promo-wrapper';
import Buttons from '../buttons';
import ManualSteps from '../manual-steps';

const Container = styled.div`
  margin-bottom: 65px;
  max-width: 388px;
  flex: 0 0 388px;
  position: relative;
  z-index: 1;
`;

const ManualBtnsContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 96px;
  height: 64px;
`;

const ManualBtns = styled(Buttons)`
  position: absolute;
  width: 794px;
  z-index: 1;
  left: 0;
`;

const ImageContainer = styled.div`
  flex: 1 1 0;
  height: 100%;
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  z-index: 0;
  left: 62px;
`;

const Manual = () => {
  return (
    <PromoWrapper color="grayBG">
      <Container>
        <HeadText title="тяни!" subtitle="как пользоваться" />
        <ManualSteps />
        <ManualBtnsContainer>
          <ManualBtns />
        </ManualBtnsContainer>
      </Container>
      <ImageContainer>
        <Image src="/images/manual-step-1.png" />
      </ImageContainer>
    </PromoWrapper>
  );
};

export default Manual;
