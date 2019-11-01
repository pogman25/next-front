import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const StepList = styled.ul``;

const StepItem = styled.li`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grayText};
`;

const H4 = styled.h4`
  margin-left: -4px;
  font-size: 48px;
  position: relative;
  color: ${({ theme }) => theme.colors.mainBlue};

  &::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.grayBG};
    z-index: 1;
    bottom: 4px;
    transform: rotateZ(10deg);
  }
`;

const Subtitle = styled.p`
  max-width: 388px;
  font-size: 24px;
  letter-spacing: 0.1px;
  margin-top: -9px;
  line-height: 1.3;
`;

const ManualSteps = () => {
  return (
    <Container>
      <StepList>
        <StepItem>
          <H4>01</H4>
          <Subtitle>
            Зайди в пункт меню «искать рыбное место» или скачай в AppStore/ GooglePlay
            приложение.
          </Subtitle>
        </StepItem>
        <StepItem>
          <H4>02</H4>
          <Subtitle>Пройди простую регистрацию. Это легко и бесплатно. Отвечаем!</Subtitle>
        </StepItem>
        <StepItem>
          <H4>03</H4>
          <Subtitle>Открой фильтр и найди клёвое место. Удачи!</Subtitle>
        </StepItem>
      </StepList>
    </Container>
  );
};

export default ManualSteps;
