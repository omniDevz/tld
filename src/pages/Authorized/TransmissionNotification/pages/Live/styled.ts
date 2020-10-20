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

  img {
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  column-gap: 1.6rem;
`;
