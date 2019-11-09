import React, { memo } from 'react';
import styled from 'styled-components';
import AdvantagesList from './advantages-list';
import HeadText, { H2 } from '../head-text';
import PromoWrapper, { Row } from '../promo-wrapper';

const StyledWrapper = styled(PromoWrapper)`
  @media (max-width: 1023px) {
    ${Row} {
      flex-direction: column;
    }

    ${H2} {
      max-width: unset;
    }
  }
`;

const Advantages = () => {
  return (
    <StyledWrapper>
      <HeadText title="на что ловишь?" subtitle="полезные преимущества" />
      <AdvantagesList />
    </StyledWrapper>
  );
};

export default memo(Advantages);
