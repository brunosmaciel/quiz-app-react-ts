import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PlayerName = styled.div`
  width: 100%;
  height: 50px;
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
  font-size: 16px;
  width: 100%;
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #eaeaea;
`;

export const Answer = styled.label`
  height: 45px;
  margin: 10px 0;
  width: 90%;
  display: flex;
  border: 2px solid ${colors.third};
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  color: ${colors.primary};
  align-self: center;
  cursor: pointer;
  input {
    display: none;
  }
  span {
    margin-right: 30px;
  }
`;
export const Button = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  button {
    text-decoration: none;
    background-color: ${colors.third};
    width: 50%;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    font-weight: bold;
    margin-bottom: 30px;
    border-radius: 10px;
    border: none;
    &:hover {
      background-color: ${colors.primary};
    }
  }
`;
