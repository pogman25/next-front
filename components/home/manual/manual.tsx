import React from 'react';
import styled from 'styled-components';
import HeadText from '../head-text';
import PromoWrapper from '../promo-wrapper';
import Buttons from '../buttons';
import ManualSteps from '../manual-steps';

const Container = styled.div`
  width: 100%;
  margin-bottom: 65px;
`;

const Manual = () => {
  return (
    <PromoWrapper color="grayBG">
      <Container>
        <HeadText title="тяни!" subtitle="как пользоваться" />
        <ManualSteps />
        <Buttons />
      </Container>
    </PromoWrapper>
  );
};

export default Manual;
