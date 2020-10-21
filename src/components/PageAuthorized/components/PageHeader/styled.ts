import styled from 'styled-components';
import { ButtonStyled } from '../../../Button/styled';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.tertiary};
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  z-index: 9999;

  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 0;
  border: 4px solid ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);

  transform: translateX(-100%);
  transition: all 260ms ease-in-out;

  &.open {
    transform: translateX(0%);
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  width: 100%;
  padding-top: 5.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkList = styled.div`
  flex-direction: column;
  row-gap: 1.6rem;

  ${ButtonStyled} {
    margin-bottom: 1.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
