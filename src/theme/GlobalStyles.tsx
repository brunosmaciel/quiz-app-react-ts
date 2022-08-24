import styled, { createGlobalStyle } from 'styled-components';
import colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto Slab',sans-serif; 
  }
  body{
    width:100%;
    height:100%;
    background-color:${colors.secondary};
  }
  html{
    font-size:62.5%;
  }
  html,body,#root{
    width:100%;
    height:100vh;
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
  background: ${colors.third};
  font-size:1.5rem;
}
`;

export const Container = styled.section`
  width: 48rem;
  height: 100vh;
  @media (max-width: 768px) and (min-width: 481px) {
    width: 76.8rem;
    height: 100vh;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 102.4rem;
    height: 100vh;
  }
  @media (max-width: 1200px) and (min-width: 1025px) {
    width: 120rem;
    height: 100vh;
  }
  @media (min-width: 1201px) {
    width: 120rem;
    height: 100vh;
  }
`;
export const Button = styled.button`
  text-decoration: none;
  border: none;
  font-size: 1.6rem;
  background-color: ${colors.third};
  width: 60%;
  max-width: 20rem;
  height: 5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  padding: 5px;
  &:hover {
    background-color: ${colors.primary};
  }
`;
