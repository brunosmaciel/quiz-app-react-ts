import { Container, Button, Result } from './styled';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { gameData } from '../../services/data';
import { resetGame } from '../../features/game/exampleReducer';
export const Resultado = () => {
  const state = useAppSelector((state) => state.example);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(resetGame());
    navigate('/');
  };
  return (
    <Container>
      <Result>
        <h1>Seu resultado, {state.playerName}</h1>
        <p>
          Acertou {state.score} de {gameData.length}
        </p>
      </Result>
      <Button onClick={handleClick}>Jogar novamente</Button>
    </Container>
  );
};
