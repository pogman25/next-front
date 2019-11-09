import React, { useReducer, useCallback, useEffect, memo } from 'react';
import styled from 'styled-components';
import HeadText from '../head-text';
import PromoWrapper from '../promo-wrapper';
import Buttons from '../buttons';
import ManualSteps from '../manual-steps';

const CHANGE_DURATION = 3000;

const Wrapper = styled(PromoWrapper)`
  overflow: hidden;
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
  transition: opacity 300ms;
  opacity: ${({ active }) => (active ? 1 : 0)};

  @media (min-width: 1441px) {
    left: 62px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: calc(52.9vw + 130px);
    right: 0;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 1023px) {
    width: unset;
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
    <Wrapper bgColor="grayBG">
      <Container>
        <HeadText title="тяни!" subtitle="как пользоваться" />
        <ManualSteps active={state} setActive={setActive} />
        <ManualBtnsContainer>
          <ManualBtns />
        </ManualBtnsContainer>
      </Container>
      <ImageContainer>
        <picture>
          <source srcSet="/images/manual-mob-step-1.png" media="(max-width: 1023px)" />
          <Image src="/images/manual-step-1.png" active={state === 1} />
        </picture>
        <picture>
          <source srcSet="/images/manual-mob-step-2.png" media="(max-width: 1023px)" />
          <Image src="/images/manual-step-2.png" active={state === 2} />
        </picture>
        <picture>
          <source srcSet="/images/manual-mob-step-3.png" media="(max-width: 1023px)" />
          <Image src="/images/manual-step-3.png" active={state === 3} />
        </picture>
      </ImageContainer>
    </Wrapper>
  );
};

export default memo(Manual);
