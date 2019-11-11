import React from 'react';
import styled from 'styled-components';
import Button from '../../shared/button';

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 32px;
  max-width: 800px;
  z-index: 1;
  position: relative;
`;

const AdvanButtons = styled(Button).attrs(props => ({
  bg: 'mainBlue',
  ...props,
}))`
  width: 100%;
`;

const FirstBtn = styled.div`
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  line-height: 23px;
  top: -35px;
  left: 0;
  color: ${({ theme }) => theme.colors.mainBlue};
  letter-spacing: -0.3px;
  font-style: italic;
`;

const Buttons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ButtonContainer className={className}>
      <FirstBtn>
        <Span>Готов попробовать?</Span>
        <AdvanButtons key="first-button">Сейчас в WEB</AdvanButtons>
      </FirstBtn>
      <AdvanButtons key="second-button">Скачать приложение</AdvanButtons>
    </ButtonContainer>
  );
};

export default Buttons;
