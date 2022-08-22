import styled from 'styled-components';
import colors from '../../config/colors';

export const MainContent = styled.div`
  width: 90%;
  height: 65rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export const PlayerName = styled.div`
  width: 90%;
  max-width: 76.8rem;
  height: 5rem;
  display: flex;
  flex-flow: row-reverse;
  div {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-size: 24px;
    color: ${colors.primary};
    font-weight: bold;
  }
`;
export const Question = styled.h1`
  font-weight: 400;
  font-size: 1.6rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 90%;
  max-width: 76.8rem;
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #eaeaea;
`;

export const Answer = styled.label`
  width: 90%;
  max-width: 32rem;
  background: transparent;
  height: 5.4rem;
  margin: 10px 0 10px 0;
  border: none;
  input {
    display: none;
  }
  div {
    height: 100%;
    width: 100%;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    border: 2px solid ${colors.third};
    border-radius: 10px;
    padding: 10px;
    color: ${colors.primary};
    transition: all ease-in-out 300ms;
  }
  div:hover {
    background-color: ${colors.fourth};
  }
  .input:checked + div {
    background-color: ${colors.fourth};
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
