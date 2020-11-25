import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  padding: 2.4rem 0;
`;

export const YearWrapper = styled.p`
  font-size: 3.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-gap: .8rem;
  margin-bottom: 1.2rem;
`;

export const CloseCalendar = styled(FiX)`
  border: 2.5px solid ${(props) => props.theme.colors.secondary};
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(.92);
  }
`;

export const Calendar = styled.div`
  border: 2.5px solid ${(props) => props.theme.colors.secondary};
  padding: 1.2rem 2.4rem;
`;

export const BackMount = styled(FiArrowLeft)`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;
export const NextMount = styled(FiArrowRight)`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

export const Mount = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.2rem;
  padding-bottom: 1.6rem;
`;

export const DaysOfTheWeek = styled.div`
  display: grid;
    grid-template-columns: repeat(7, 1fr);
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  padding: .8rem 2.4rem;
`;

export const DayOfTheWeek = styled.label`
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
`;

export const CalendarBody = styled.table`
  padding: 1.2rem 2.4rem 0;
  display: flex;
  flex-direction: column;

  tr {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: space-between;
    padding: .8rem 0;

    td {
      text-align: center;
      font-size: 2.4rem;
      transform: scale(1);
      transition: all 260ms ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.33);
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  margin-left: auto;
`;

export const SchedulingWrapper = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  min-height: calc(100vh - 15.5rem);
  margin-top: 2rem;
  padding: 3.2rem;
`;

export const Header = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.tertiary};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Today = styled.p`
  font-size: 2.4rem;
`;

export const MoreToday = styled(FiX)`
  font-size: 4rem;
  transform: rotate(45deg);
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: rotate(135deg);
  }
`;

export const ListDays = styled.div``;
