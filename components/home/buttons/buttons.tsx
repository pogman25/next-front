import React from 'react';
import styled from 'styled-components';
import Button from '../../shared/button';

const AdvanButtons = styled(Button).attrs(props => ({
  bg: 'mainBlue',
  ...props,
}))`
  width: 100%;
  margin-top: 75px;
`;

const FirstBtn = styled.div`
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  line-height: 23px;
  top: 40px;
  left: 0;
  color: ${({ theme }) => theme.colors.mainBlue};
  letter-spacing: -0.3px;
  font-style: italic;
`;

const Buttons = () => {
  return (
    <>
      <FirstBtn>
        <Span>Готов попробовать?</Span>
        <AdvanButtons key="first-button">Сейчас в WEB</AdvanButtons>
      </FirstBtn>
      <AdvanButtons key="second-button">Скачать приложение</AdvanButtons>
    </>
  );
};

export default Buttons;
