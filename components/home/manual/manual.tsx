import React, { useReducer, useCallback, useEffect, memo } from 'react';
import styled from 'styled-components';
import HeadText from '../head-text';
import PromoWrapper from '../promo-wrapper';
import Buttons from '../buttons';
import ManualSteps from '../manual-steps';

const CHANGE_DURATION = 4000;

const Container = styled.div`
  margin-bottom: 65px;
  max-width: 388px;
  flex: 0 0 388px;
  position: relative;
  z-index: 1;
`;

const ManualBtnsContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 96px;
  height: 64px;
`;

const ManualBtns = styled(Buttons)`
  position: absolute;
  width: 794px;
  z-index: 1;
  left: 0;
`;

const ImageContainer = styled.div`
  flex: 1 1 0;
  height: 100%;
  position: relative;
`;
const Image = styled.img<{ active: boolean }>`
  position: absolute;
  z-index: 0;
  left: 62px;
  transition: opacity 300ms;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

function reducer(state: number, action): number {
  switch (action.type) {
    case 'set':
      return action.payload;
    default:
      throw new Error();
  }
}

let timer = null;

const Manual = () => {
  const [state, dispatch] = useReducer(reducer, 1);

  const setActive = useCallback(index => {
    clearTimeout(timer);
    if (index > 3) {
      dispatch({ type: 'set', payload: 1 });
    } else {
      dispatch({ type: 'set', payload: index });
    }
  }, []);

  useEffect(() => {
    timer = setTimeout(() => {
      setActive(state + 1);
    }, CHANGE_DURATION);
    return () => clearTimeout(timer);
  }, [setActive, state]);

  return (
    <PromoWrapper bgColor="grayBG">
      <Container>
        <HeadText title="тяни!" subtitle="как пользоваться" />
        <ManualSteps active={state} setActive={setActive} />
        <ManualBtnsContainer>
          <ManualBtns />
        </ManualBtnsContainer>
      </Container>
      <ImageContainer>
        <Image src="/images/manual-step-1.png" active={state === 1} />
        <Image src="/images/manual-step-2.png" active={state === 2} />
        <Image src="/images/manual-step-3.png" active={state === 3} />
      </ImageContainer>
    </PromoWrapper>
  );
};

export default memo(Manual);
