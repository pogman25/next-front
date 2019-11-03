import React from 'react';
import styled from 'styled-components';
import useLocale from '../../../hooks/useLocale';

const BtnBack = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.grayBG};
`;

const LocaleChange = () => {
  const { setEN, setRU } = useLocale();
  return (
    <div>
      <BtnBack type="button" onClick={setRU}>
        RU
      </BtnBack>
      <BtnBack type="button" onClick={setEN}>
        EN
      </BtnBack>
    </div>
  );
};

export default LocaleChange;
