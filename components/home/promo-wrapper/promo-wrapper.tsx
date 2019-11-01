import React from 'react';
import styled from 'styled-components';

interface PromoWrapperType {
  color?: 'white' | 'grayBG';
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1202px;
  width: 100%;
  margin: 60px 56px 80px;
`;

const PromoWrapper: React.SFC<PromoWrapperType> = ({ children, color = 'white' }) => {
  return (
    <Container color={color}>
      <Row>{children}</Row>
    </Container>
  );
};

export default PromoWrapper;
