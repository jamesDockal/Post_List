import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items:center;
  justify-content:center;

`;

export const Content = styled.div`
   background-color:#1F2029;
    width: 80%;
    max-width: 1080px;
    min-height: 900px;

    padding: 16px;
    border-radius: 16px;
position: relative;

`;

export const LoadingContaier = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Title = styled.h1`
    color: var(--purple-400);
`

export const Text = styled.p`
    
`

export const Header = styled.div`
    
`

export const User = styled.div`
    
`

export const UserName = styled.div`
    

    
`

export const UserCompany = styled.div`
    
    color: var(--gray-600);

    
`

export const Button = styled.button`
background-color: var(--pink-500);
font-size: 0.75rem;
border: none;
cursor: pointer;
border-radius: 6px;
padding: 12px 12px;
color:white;
margin: 0 4px;
font-weight: 600;

position: absolute;
bottom: 5%;
left: 50%;
transform: translateX(-50%);


&:hover {
  filter: opacity(0.9)
}
`
