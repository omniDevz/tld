import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  position: absolute;

  svg {
    cursor: pointer;
    transition: all 240ms ease-in-out;

    &:hover {
      transform: scale(1.16);
    }
  }
`;
