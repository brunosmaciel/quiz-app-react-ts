import styled from 'styled-components';
import colors from '../../config/colors';
import { Link } from 'react-router-dom';

export const MainContent = styled.div`
  width: 80%;
  height: 65rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 5rem;
  color: ${colors.primary};
  margin: 2rem 0 2rem 0;
`;
export const SubTitle = styled.h3`
  font-size: 2rem;
  color: white;
  font-weight: 400;
  margin-bottom: 2rem;
`;
export const PlayerNameInput = styled.input`
  border-bottom: solid 1px ${colors.primary};
  margin-top: 25px;
  font-size: 24px;
  width: 91%;
  height: 30px;
  color: ${colors.primary};
  transition: all ease-in-out 300ms;

  &:focus {
    border-bottom: solid 1px ${colors.third};
    color: ${colors.third};
  }
`;
export const Label = styled.label`
  color: ${colors.fourth};
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
`;
export const Button = styled(Link)`
  text-decoration: none;
  background-color: ${colors.third};
  font-size: 1.6rem;
  min-width: 30rem;
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
  background-color: ${colors.third};
  min-width: 30rem;
  font-size: 1.6rem;
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
