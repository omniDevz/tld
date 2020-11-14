import styled, {css} from 'styled-components';
import { IModalConfirmationWrapper } from './interface';

export const ModalConfirmationWrapper = styled.div<IModalConfirmationWrapper>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  transform: scale(0);
  transition: transform 320ms ease-in-out;

  ${
    (props) => props.showModal && css`
      transform: scale(1);
      z-index: 99999;
    `
  }
`;

export const Title = styled.h4`
  margin-bottom: 2.4rem;
  font-size: 3.2rem;
`;

export const Description = styled.h4`
  margin-bottom: 2.4rem;
  font-size: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.6rem;
  width: 100%;
`;
