import React from 'react';
import styled from 'styled-components';

interface PromoWrapperType {
  bgColor?: 'white' | 'grayBG' | 'mainBlue';
  className?: string;
}

const Container = styled.section<{ bgColor: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1202px;
  width: 100%;
  margin: 60px 56px 80px;
`;

const PromoWrapper: React.SFC<PromoWrapperType> = ({
  children,
  className,
  bgColor = 'white',
}) => {
  return (
    <Container className={className} bgColor={bgColor}>
      <Row>{children}</Row>
    </Container>
  );
};

export default PromoWrapper;
