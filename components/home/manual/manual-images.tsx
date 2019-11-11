import React from 'react';
import styled from 'styled-components';

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
    right: -56px;
  }
`;

const ManualImgs: React.FC<{ state: number }> = ({ state }) => {
  return (
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
  );
};

export default ManualImgs;
