import React from 'react';
import styled from 'styled-components';
import useLocale from '../../../hooks/useLocale';
import Arrow from '../../shared/arrow';

const Container = styled.div`
  width: 100%;
  height: 576px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  background-image: url('/images/fisherman.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1216px;
  width: 100%;
  margin: 60px 56px 80px;
  color: ${({ theme }) => theme.colors.white};
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1;
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1.1;
`;

const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-style: italic;
  margin: 5px 0 0 6px;
  letter-spacing: -0.3px;
`;

const Info = styled.p`
  max-width: 440px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 1.35;
  margin: 27px 0 0 4px;
`;

const MoreInfo = styled.button`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  color: ${({ theme }) => theme.colors.white};
  font-style: italic;
  letter-spacing: -0.3px;
  margin-top: auto;
  padding: 0 6px;
`;

const StyledArrow = styled(Arrow)`
  margin-left: 14px;
`;

const Banner = () => {
  const { dictionary } = useLocale();
  return (
    <Container>
      <TextContainer>
        <H1>
          <span>{dictionary.whatIs}</span>
          <LogoTitle>«Hook»?</LogoTitle>
        </H1>
        <P>{dictionary.about}</P>
        <Info>{dictionary.bannerInfo}</Info>
        <MoreInfo>
          {dictionary.moreInfo}
          <StyledArrow />
        </MoreInfo>
      </TextContainer>
    </Container>
  );
};

export default Banner;
