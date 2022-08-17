import styled from 'styled-components';
export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  h1 {
    justify-self: flex-start;
  }
  div input {
    border-bottom: 1px solid black;
    width: 70%;
    height: 20%;
    font-size: 24px;
    margin-top: 30px;
  }
  div {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  div .link {
    text-decoration: none;
    margin-top: 30px;
    border: solid 1px black;
    border-radius: 20px;
    padding: 4%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  div .link:hover {
    background-color: #f5f5f5;
  }
`;

export const GameContainer = styled.div`
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;
