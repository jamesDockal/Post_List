import styled from 'styled-components';

export const Tr = styled.tr`
    cursor: pointer;
    
    &:hover{
        filter:opacity(0.9);
    }
`;

export const Title = styled.td`
    color: var(--purple-400);
    border-bottom: 1px solid var(--gray-alpha-100);
    padding: 8px 0;
`;

export const User = styled.td`
border-bottom: 1px solid var(--gray-alpha-100);
    padding: 1rem 0;

`;

export const UserName = styled.div`

`;

export const CompanyName = styled.div`
    color: var(--gray-600)
`;
