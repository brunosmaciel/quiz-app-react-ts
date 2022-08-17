import styled, { createGlobalStyle } from 'styled-components';
import colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto Slab'; 
  }
  body{
    width:100vw;
    height:100vh;
    background-color:${colors.secondary};
  }
  html,body,#root{
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  input{
    border:none;
    outline:none;
    background-color:transparent;
  }
  .Toastify__toast-theme--dark.Toastify__toast--warning {
  color: white;
  background: ${colors.tertiary};
}
`;

export const Contaier = styled.section`
  min-width: 24rem;
  height: 41em;
  padding: 30px;
`;
