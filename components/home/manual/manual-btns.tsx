import React from 'react';
import styled from 'styled-components';
import Buttons from '../buttons';

const ManualBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grayBG};
`;

const Row = styled.div`
  width: 100%;
  max-width: 1202px;
  padding: 0 56px 146px;

  @media (max-width: 450px) {
    padding: 0px 20px 146px;
  }
`;

const ManualBtns = () => {
  return (
    <ManualBtnsContainer>
      <Row>
        <Buttons />
      </Row>
    </ManualBtnsContainer>
  );
};

export default ManualBtns;
