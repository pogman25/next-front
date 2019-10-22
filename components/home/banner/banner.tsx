import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  width: 100%;
  height: 576px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  background-image: url('/images/fisherman.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
`;

const Banner = () => <StyledBanner></StyledBanner>;

export default Banner;
