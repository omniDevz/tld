import styled from 'styled-components';

export const DayWrapper = styled.ul`
  position: relative;
  padding: .8rem;
  padding-left: 4rem;

  & + li {
    margin-top: 2.4rem;
  }

  &:before {
    content: '';
    position: absolute;
    display: flex;
    border-left: 2px dashed ${(props) => props.theme.colors.tertiary};
    height: calc(100% - .8rem);
    left: 1.4rem;
    top: .8rem;
  }
`;

export const TodayNumber = styled.div`
  background: ${(props) => props.theme.colors.tertiary};
  position: absolute;
  top: .8rem;
  left: 0;
  width: 2.8rem;
  line-height: 2.8rem;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
