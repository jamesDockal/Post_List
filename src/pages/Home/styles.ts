import { Form } from '@unform/web';
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
`;

export const Title = styled.div`
    font-size: 20px;
    color: #EEEEF2;
`

export const FormContent = styled(Form)`
    margin-bottom:48px;
`

export const SelectContainer = styled.div`
    width: 50%;
    margin-top:32px;
`

export const LoadingContaier = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`
