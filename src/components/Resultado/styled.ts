import styled from 'styled-components';
import colors from '../../config/colors';
export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
export const Result = styled.div`
  border: 2px solid ${colors.tertiary};
  width: 200px;
  height: 300px;
  border-radius: 99999px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  h1 {
    color: #fff;
  }
  p {
    color: #fff;
  }
`;
export const Button = styled.button`
  text-decoration: none;
  border: none;
  background-color: ${colors.tertiary};
  width: 60%;
  height: 12%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 30px;
  border-radius: 10px;
  margin-top: 300px;
  &:hover {
    background-color: ${colors.primary};
  }
`;
