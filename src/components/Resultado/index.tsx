import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetGame } from '../../features/game/exampleReducer';
import { MainContent } from './styled';
import { Button } from '../../theme/GlobalStyles';
import { gameData } from '../../services/data';
export const Resultado = () => {
  const state = useAppSelector((state) => state.example);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(resetGame());
    navigate('/');
  };
  return (
    <MainContent>
      <div>
        <h1>Seu resultado </h1>
        <p>
          Acertou {state.score} de {gameData.length}
        </p>
      </div>
      <Button onClick={handleClick}>Jogar novamente</Button>
    </MainContent>
  );
};
