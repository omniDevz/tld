import styled from 'styled-components';

export const Live = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  max-height: calc(100vh - 27rem);
  position: relative;
  overflow: hidden;
`;

export const ButtonsWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  column-gap: 1.6rem;
`;

export const Frame = styled.iframe`
  position: absolute;
  left: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
  transform: translateX(-50%);
`;

export const Description = styled.h4`
  padding: .8rem 24px;
  font-size: 2rem;
  text-align: center;
  position: absolute;
  left: -1px;
  right: -1px;
  bottom: -2px;
  background: linear-gradient(0deg, black -17%, transparent 100%);
  z-index: 1000;
  color: ${(props) => props.theme.colors.tertiary};
`;
