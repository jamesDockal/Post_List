import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean
}

export const Button = styled.button<ButtonProps>`
   background-color: ${({ isActive }) => (isActive ? 'var(--pink-500)' : 'var(--gray-700)')};
  font-size: 0.75rem;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 12px 12px;
  color:white;
  margin: 0 4px;
  font-weight: 600;

  &:hover {
    filter: opacity(0.9)
  }
`;
