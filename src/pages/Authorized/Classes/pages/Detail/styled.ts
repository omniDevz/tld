import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.6rem 24px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    height: 4rem;
    width: 4rem;
    text-shadow: var(--text-shadow);
  }
`;

export const Details = styled.div`
  align-items: flex-start;
`;

export const Name = styled.h5`
  font-size: 3.2rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;

export const Code = styled.p`
  font: 600 2rem 'Ubuntu', sans-serif;
  padding-top: 0.8rem;
`;

export const FormFieldWrapper = styled.div`
  padding: 0.8rem 24px 1.6rem;
`;

export const StudentsList = styled.ul`
  padding: 0.8rem 24px 2.4rem;
  max-height: 56vh;
  overflow-y: auto;
  flex: 1;
`;

export const StudentItem = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.8rem;
  margin-bottom: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderStudent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  column-gap: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    &:nth-child(1) {
      height: 6.4rem;
      width: 6.4rem;
      color: ${({ theme }) => theme.colors.secondary};
    }

    &:nth-child(3) {
      height: 3rem;
      width: 5rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const NameStudent = styled.p`
  font: 600 2.4rem 'Ubuntu', sans-serif;
`;

export const BirthDate = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.6rem;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 1.2rem;
  padding: 0.8rem;
`;

export const ContactItem = styled.p`
  font-size: 1.6rem;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;
