import React, { memo } from 'react';
import styled from 'styled-components';

interface HeadTextType {
  title: string;
  subtitle: string;
  color?: 'white' | 'mainBlue';
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme, color }) => theme.colors[color]};
`;

export const H2 = styled.h2`
  max-width: 280px;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const SubTitle = styled.span`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  line-height: 1.15;
  margin-top: 15px;
  letter-spacing: -0.3px;
`;

const HeadText: React.FC<HeadTextType> = ({ title, subtitle, color = 'mainBlue' }) => {
  return (
    <TextContainer color={color}>
      <H2>{title}</H2>
      <SubTitle>{subtitle}</SubTitle>
    </TextContainer>
  );
};

export default memo(HeadText);
