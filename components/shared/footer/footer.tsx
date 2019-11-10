import React, { memo } from 'react';
import styled from 'styled-components';
import Arrow from '../arrow';
import LocaleChange from '../locale-change';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  height: 116px;
  width: 100%;
  background-repeat: repeat no-repeat;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 5;
`;

const Row = styled.div`
  max-width: 1202px;
  margin: 0 56px;
  width: 100%;
  display: flex;
  transform: translateY(-14px);
`;

const BtnBack = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.grayBG};
`;

const BackArrow = styled(Arrow)`
  transform: rotateZ(180deg);
`;

const P = styled.p`
  margin-left: 20px;
  width: 200px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.grayLightText};
  line-height: 1.33333333;
`;

const Footer = () => {
  return (
    <Container>
      <Row>
        <BtnBack>
          <BackArrow fill="black" />
        </BtnBack>
        <P>{`Все права защищены © ${new Date().getFullYear()} «Hook»`}</P>
        <LocaleChange />
      </Row>
    </Container>
  );
};

export default memo(Footer);
