import styled from "styled-components";

export const Fields = styled.div`
  grid-gap: .8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const PriceWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;


  &:before {
    content: 'R$';
    font-size: 1.6rem;
    font-weight: 500;
    border: 2.5px solid ${(props) => props.theme.colors.secondary};
    border-right: none;
    display: flex;
    padding: 0 .8rem;
    flex-direction: row;
    align-items: center;
    height: calc(100% - 5px);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  grid-gap: .8rem;
`;
