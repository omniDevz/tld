import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageAuthorized from '../../../components/PageAuthorized';
import Button from '../../../components/Button';
import Day from './components/Day';

import util from '../../../utils/util';

import {
  SchedulingWrapper,
  CalendarWrapper,
  ButtonWrapper,
  CloseCalendar,
  DaysOfTheWeek,
  DayOfTheWeek,
  CalendarBody,
  YearWrapper,
  MoreToday,
  BackMount,
  NextMount,
  ListDays,
  Calendar,
  Header,
  Mount,
  Today,
} from './styled';

const Scheduling: React.FC = () => {
  const [days, setDays] = useState<
    {
      days: number[];
    }[]
  >([]);
  const [openCalendar, setOpenCalendar] = useState(false);

  function handleGetDaysInMonth(month: number = 0, year: number = 0) {
    const daysInMonth = (iMonth: number = 0, iYear: number = 0) => {
      return 32 - new Date(iYear, iMonth, 32).getDate();
    };

    let firstDay = new Date(year, month).getDay();

    setDays([]);

    let weeksDays: {
      days: number[];
    }[] = [];
    let date = 1;
    for (let i = 0; i < 6; i++) {
      let weekDay: {
        days: number[];
      } = {
        days: [],
      };

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          weekDay.days.push(-1);
        } else if (date > daysInMonth(month, year)) {
          break;
        } else {
          weekDay.days.push(date);

          date++;
        }
      }

      weeksDays.push(weekDay);
    }

    setDays([...weeksDays]);
  }

  useEffect(handleGetDaysInMonth, []);

  function handleGetByDay(day: number) {
    console.log(day);
  }

  function handleCalendar() {
    setOpenCalendar(!openCalendar);
  }

  return (
    <PageAuthorized type="back" text="Agendamentos" footer={false}>
      <ButtonWrapper>
        {!openCalendar && (
          <Button color="secondary-outline" onClick={handleCalendar}>
            Abrir calendário
          </Button>
        )}
      </ButtonWrapper>
      {!!openCalendar && (
        <CalendarWrapper>
          <YearWrapper>
            2020 <CloseCalendar onClick={handleCalendar} />
          </YearWrapper>
          <Calendar>
            <Mount>
              <BackMount />
              Junho
              <NextMount />
            </Mount>
            <DaysOfTheWeek>
              <DayOfTheWeek>D</DayOfTheWeek>
              <DayOfTheWeek>S</DayOfTheWeek>
              <DayOfTheWeek>T</DayOfTheWeek>
              <DayOfTheWeek>Q</DayOfTheWeek>
              <DayOfTheWeek>Q</DayOfTheWeek>
              <DayOfTheWeek>S</DayOfTheWeek>
              <DayOfTheWeek>S</DayOfTheWeek>
            </DaysOfTheWeek>
            <CalendarBody>
              <tbody>
                {!!days.length &&
                  days.map((day) => (
                    <tr key={`tr_${day.days[0]}`}>
                      {!!day.days &&
                        day.days.map((d) =>
                          d === -1 ? (
                            <td key={d} />
                          ) : (
                            <td onClick={() => handleGetByDay(d)} key={d}>
                              {d}
                            </td>
                          )
                        )}
                    </tr>
                  ))}
              </tbody>
            </CalendarBody>
          </Calendar>
        </CalendarWrapper>
      )}

      <SchedulingWrapper>
        <Header>
          <Today>{util.getFormatDateNameMountNow()}</Today>
          <Link
            to={`/scheduling/new/${util.getFormatDateApi(
              new Date().toString(),
              '-'
            )}`}
            title="Novo agendamento"
          >
            <MoreToday />
          </Link>
        </Header>
        <ListDays>
          <Day />
          <Day />
        </ListDays>
      </SchedulingWrapper>
    </PageAuthorized>
  );
};

export default Scheduling;
