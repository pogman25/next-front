import React from 'react';
import styled from 'styled-components';
import FishIcon from '../../shared/fish-icon';
import Buttons from '../buttons';

const Container = styled.div`
  max-width: 794px;
  margin-top: 21px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 23px;
`;

const Item = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.33333333;
`;

const AdvantageSBtns = styled(Buttons)`
  margin-top: 98px;
`;

const advantagesData = [
  {
    id: 1,
    text: 'Простая и бесплатная регистрация экономит твоё время.',
  },
  {
    id: 2,
    text: 'Продвинутая фильтрация для мгновенного поиска.',
  },
  {
    id: 3,
    text: 'Кроме клёвых мест специализированные магазины и базы рядом с тобой.',
  },
  {
    id: 4,
    text: 'Оффлайн режим - работает даже при отсутствии интернета на устройстве.',
  },
];

const AdvantagesList = () => {
  return (
    <Container>
      <List>
        {advantagesData.map(adv => (
          <Item key={adv.id}>
            <FishIcon />
            <p>{adv.text}</p>
          </Item>
        ))}
      </List>
      <AdvantageSBtns />
    </Container>
  );
};

export default AdvantagesList;
