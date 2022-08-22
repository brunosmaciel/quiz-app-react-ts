import styled from 'styled-components';
import colors from '../../config/colors';
export const MainContent = styled.div`
  width: 90%;
  height: 65rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  button {
    margin-bottom: 4rem;
  }

  div {
    border: 4px solid ${colors.third};
    width: 90%;
    height: 60%;
    max-height: 60rem;
    max-width: 40rem;
    border-radius: 9999px;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    color: ${colors.fourth};
    font-size: 2rem;
    padding: 50px;
    h1 {
      text-align: center;
    }
    p {
    }
  }
`;
