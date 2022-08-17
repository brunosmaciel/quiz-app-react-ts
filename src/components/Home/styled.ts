import styled from 'styled-components';
import colors from '../../config/colors';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 20px;
  label {
    display: flex;
    width: 200px;
    flex-direction: column;
    color: white;
    font-weight: 100;
    margin-bottom: 20px;
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  color: ${colors.primary};
  margin-bottom: 20px;
`;
export const SubTitle = styled.h3`
  font-size: 16px;
  color: white;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const PlayerNameInput = styled.input`
  border-bottom: solid 1px ${colors.primary};
  margin-top: 25px;
  font-size: 24px;
  width: 100%;
  height: 30px;
  color: ${colors.primary};
  transition: all ease-in-out 300ms;

  &:focus {
    border-bottom: solid 1px ${colors.tertiary};
    color: ${colors.tertiary};
  }
`;
export const Button = styled(Link)`
  text-decoration: none;
  background-color: ${colors.tertiary};
  width: 100%;
  height: 8%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 30px;
  border-radius: 10px;
  &:hover {
    background-color: ${colors.primary};
  }
`;
export const A = styled.a`
  text-decoration: none;
  background-color: ${colors.tertiary};
  width: 100%;
  height: 8%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 30px;
  border-radius: 10px;
  &:hover {
    background-color: ${colors.primary};
  }
`;
