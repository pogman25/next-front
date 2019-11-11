import React, { useReducer, useCallback, useEffect, memo } from 'react';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import HeadText from '../head-text';
import PromoWrapper, { Row } from '../promo-wrapper';
import ManualSteps from '../manual-steps';
import ManualBtns from './manual-btns';
import ManualImgs from './manual-images';

const CHANGE_DURATION = 3000;

const Wrapper = styled(PromoWrapper)`
  overflow: hidden;

  @media (max-width: 450px) {
    ${Row} {
      margin-bottom: 0;
    }
  }
`;

const Container = styled.div`
  margin-bottom: 65px;
  max-width: 388px;
  flex: 0 0 388px;
  position: relative;
  z-index: 1;

  @media (max-width: 1023px) {
    max-width: 280px;
    flex: 0 0 280px;
  }
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

  const isMobile = useMedia('(max-width: 649px)');

  const setActive = useCallback(
    index => {
      if (isMobile) {
        dispatch({ type: 'set', payload: 0 });
      } else {
        clearTimeout(timer);
        if (index > 3) {
          dispatch({ type: 'set', payload: 1 });
        } else {
          dispatch({ type: 'set', payload: index });
        }
      }
    },
    [isMobile],
  );

  useEffect(() => {
    if (!isMobile) {
      timer = setTimeout(() => {
        setActive(state + 1);
      }, CHANGE_DURATION);
    } else {
      setActive(0);
    }
    return () => clearTimeout(timer);
  }, [setActive, state, isMobile]);

  return (
    <>
      <Wrapper bgColor="grayBG">
        <Container>
          <HeadText title="тяни!" subtitle="как пользоваться" />
          <ManualSteps active={state} setActive={setActive} />
        </Container>
        <ManualImgs state={state} />
      </Wrapper>
      <ManualBtns />
    </>
  );
};

export default memo(Manual);
