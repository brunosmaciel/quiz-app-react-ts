/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MainContent, Title, SubTitle, A, Label, PlayerNameInput } from './styled';
import { Button } from '../../theme/GlobalStyles';

import { useEffect, useState } from 'react';
import { startGame, resetGame, setGameId } from '../../features/game/exampleReducer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import gameIdGen from '../../services/gameIdGenerator';

export default function Home() {
  const [playerName, setPlayerName] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      toast.clearWaitingQueue();

      return;
    }
    const gameId = gameIdGen(20);
    dispatch(setGameId(gameId));
    dispatch(startGame(playerName));
    navigate(`/game/${gameId}`);
  };
  return (
    <MainContent>
      <Title>Quizzeles</Title>
      <SubTitle>Vamos jogar</SubTitle>
      <Label>
        Digite seu nome abaixo
        <PlayerNameInput
          onChange={handleChange}
          type="text"
          name="playerName"
          id="playerName"
          maxLength={20}
        />
      </Label>
      <div>
        <Button onClick={handleClick}>Jogar Agora</Button>
        <Button onClick={() => navigate('/about')}>Sobre</Button>
      </div>
    </MainContent>
  );
}
