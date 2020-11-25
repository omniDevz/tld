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
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const months = util.getMonthsNames();

  function handleGetDaysInMonth() {
    const daysInMonth = (iMonth: number = month, iYear: number = year) => {
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
          weekDay.days.push(Math.random() * 10 + 32);
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

  useEffect(handleGetDaysInMonth, [month, year]);

  function handleGetByDay(day: number) {
    console.log(day);
  }

  function handleCalendar() {
    setOpenCalendar(!openCalendar);
  }

  function handlePrevMonth() {
    setMonth(month === 0 ? 11 : month - 1);
    setYear(month === 0 ? year - 1 : year);
  }

  function handleNextMonth() {
    setMonth(month === 11 ? 0 : month + 1);
    setYear(month === 11 ? year + 1 : year);
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
            {year}
            <CloseCalendar onClick={handleCalendar} />
          </YearWrapper>
          <Calendar>
            <Mount>
              <BackMount onClick={handlePrevMonth} />
              {months[month]}
              <NextMount onClick={handleNextMonth} />
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
                          d > 31 ? (
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
