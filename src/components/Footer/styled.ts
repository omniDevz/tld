import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 164px;
  background: ${(props) => props.theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: -1px;
`;

export const ListSocialMedia = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 16px;
`;

export const SocialMedia = styled.li``;

export const LinkExternal = styled.a`
  color: inherit;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 24px;
`;
