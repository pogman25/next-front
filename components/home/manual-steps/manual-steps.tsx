/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

interface ManualStepsType {
  active: number;
  setActive: (e: number) => void;
}

const Container = styled.div`
  display: flex;
`;

const StepList = styled.ul``;

const H4 = styled.h4<{ active: boolean }>`
  margin-left: -4px;
  font-size: 48px;
  position: relative;
  transition: color 250ms;
  color: ${({ theme, active }) =>
    active ? theme.colors.mainBlueDarkest : theme.colors.mainBlue};

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

const StepItem = styled.li<{ active: boolean }>`
  position: relative;
  margin-top: 20px;
  transition: color 250ms;
  color: ${({ theme, active }) =>
    active ? theme.colors.mainBlueDarkest : theme.colors.grayText};

  &:hover,
  &:hover ${H4}, &:active,
  &:active ${H4} {
    color: ${({ theme }) => theme.colors.mainBlueDarkest};
  }
`;

const Subtitle = styled.p`
  max-width: 388px;
  font-size: 24px;
  letter-spacing: 0.1px;
  margin-top: -9px;
  line-height: 1.3;
`;

const SetStepButton = styled.button`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  outline: none;
`;

const stepsList = [
  'Зайди в пункт меню «искать рыбное место» или скачай в AppStore/ GooglePlayприложение.',
  'Пройди простую регистрацию. Это легко и бесплатно. Отвечаем!',
  'Открой фильтр и найди клёвое место. Удачи!',
];

const ManualSteps: React.FC<ManualStepsType> = ({ setActive, active }) => {
  return (
    <Container>
      <StepList>
        {stepsList.map((step, index) => (
          <StepItem key={index} active={active === index + 1}>
            <H4 active={active === index + 1}>{`0${index + 1}`}</H4>
            <Subtitle>{step}</Subtitle>
            <SetStepButton onClick={() => setActive(index + 1)} />
          </StepItem>
        ))}
      </StepList>
    </Container>
  );
};

export default ManualSteps;
