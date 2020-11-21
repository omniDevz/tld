import React from 'react';
import DayItem from '../DayItem';

import { DayWrapper, TodayNumber } from './styled';

const Day: React.FC = () => {
  return (
    <DayWrapper>
      <TodayNumber>14</TodayNumber>
      <DayItem />
      <DayItem />
      <DayItem />
    </DayWrapper>
  );
};

export default Day;
