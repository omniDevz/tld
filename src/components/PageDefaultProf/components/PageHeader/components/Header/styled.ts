import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.primary};
  padding: 0.8rem;
  background: transparent;
  border-radius: 50%;
  font-size: 3.2rem;
  cursor: pointer;
`;

export const Logo = styled.img`
`;

export const Text = styled.h6`
  font: 600 2.4rem 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.primary};
`;
