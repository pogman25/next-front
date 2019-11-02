import React, { memo } from 'react';
import AdvantagesList from './advantages-list';
import HeadText from '../head-text';
import PromoWrapper from '../promo-wrapper';

const Advantages = () => {
  return (
    <PromoWrapper>
      <HeadText title="на что ловишь?" subtitle="полезные преимущества" />
      <AdvantagesList />
    </PromoWrapper>
  );
};

export default memo(Advantages);
