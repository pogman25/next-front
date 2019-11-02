import React, { memo } from 'react';
import styled from 'styled-components';

const SVG = styled.svg.attrs(() => ({
  width: '17',
  height: '16',
  viewBox: '0 0 17 16',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
}))``;

const Arrow = props => (
  <SVG {...props}>
    <path
      opacity="0.54"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8303 8L15.4303 6.6L9.83032 12.2L9.83032 -1.42847e-07L7.83032 -1.83661e-07L7.83032 12.2L2.23032 6.6L0.830322 8L8.83032 16L16.8303 8Z"
      fill="white"
    />
  </SVG>
);

export default memo(Arrow);
