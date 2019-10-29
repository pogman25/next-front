import React, { memo } from 'react';
import styled from 'styled-components';
import AdvantagesList from './advantages-list';

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1202px;
  width: 100%;
  margin: 60px 56px 80px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.mainBlue};
`;

const H2 = styled.h2`
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

const Advantages = () => {
  return (
    <Container>
      <Row>
        <TextContainer>
          <H2>на что ловишь?</H2>
          <SubTitle>полезные преимущества</SubTitle>
        </TextContainer>
        <AdvantagesList />
      </Row>
    </Container>
  );
};

export default memo(Advantages);
