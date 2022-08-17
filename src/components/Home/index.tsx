/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Title, SubTitle, PlayerNameInput, Button, A } from './styled';
import { useEffect, useState } from 'react';
import { startGame, resetGame, setGameId } from '../../features/game/exampleReducer';
import { useAppDispatch } from '../../app/hooks';
import { toast } from 'react-toastify';

export default function Home() {
  const [playerName, setPlayerName] = useState('');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetGame());
  });
  const handleChange = (e: { target: { value: string } }) => {
    setPlayerName(e.target.value);
  };
  const handleClick = (e: any) => {
    if (!playerName) {
      e.preventDefault();
      toast.warning('Voce precisa informar seu nome para iniciar o jogo');

      return;
    }
    dispatch(setGameId());
    dispatch(startGame(playerName));
  };
  return (
    <Container>
      <Title>Quizzeles</Title>
      <SubTitle>Vamos jogar</SubTitle>
      <label>
        Digite seu nome abaixo
        <PlayerNameInput onChange={handleChange} type="text" name="playerName" id="playerName" />
      </label>
      <Button to="/game" onClick={handleClick}>
        Jogar Agora
      </Button>
      <A href="https://github.com/brunosmaciel" target="_blank">
        Sobre
      </A>
    </Container>
  );
}
