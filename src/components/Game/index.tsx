/* eslint-disable @typescript-eslint/no-explicit-any */
import { gameData } from '../../services/data';
import { useState } from 'react';
import { Page404 } from '../../pages/404';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { sumScore } from '../../features/game/exampleReducer';
import { Container, Question, Answer, Button } from './styled';
import { PlayerName } from './styled';
import { CgMenuLeft } from 'react-icons/cg';
import { TbLetterA, TbLetterD, TbLetterE, TbLetterC, TbLetterB } from 'react-icons/tb';
import colors from '../../config/colors';
import { toast } from 'react-toastify';
export default function GameComponent() {
  const [gameController, setGameController] = useState(0);
  const [inputId, setInputId] = useState('');
  const [event, setEvent] = useState('' as any);
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const playerName = useAppSelector((state) => state.example.playerName);
  const gameId = useAppSelector((state) => state.example.gameId);

  const handleClick = () => {
    if (answered) {
      setAnswered(false);
      try {
        if (gameController <= gameData.length - 1) {
          if (inputId === gameData[gameController].correct) {
            dispatch(sumScore());
          }
          event.target.checked = false;
          setGameController(gameController + 1);

          setColor();
          return;
        }
      } catch (e) {
        setGameController(gameController + 1);
        return;
      }
    }
    toast.warning('Voce precisa selecionar uma resposta');
  };
  const handleChange = (e: any) => {
    setAnswered(true);
    setInputId(e.target.id as any);
    setEvent(e);
  };
  const setColor = () => {
    const elementos = Array.from(document.getElementsByName('answer')) as HTMLInputElement[];
    for (const elemento of elementos) {
      if (elemento.checked) {
        const parent = elemento.parentElement as HTMLLabelElement;
        parent.style.background = 'white';
      } else {
        const parent = elemento.parentElement as HTMLLabelElement;
        parent.style.background = colors.secondary;
      }
    }
  };

  if (!gameId) {
    // useEffect(() => {
    //   setTimeout(() => {
    //     navigate('/');
    //   }, 3000);
    // });
    return (
      <Container>
        <Page404></Page404>
      </Container>
    );
  }
  if (gameController === gameData.length) {
    navigate('/game/result');
    return <></>;
  }
  return (
    <Container>
      <PlayerName>
        <div>
          <span>{playerName}</span> <CgMenuLeft size={30} color={colors.primary} />
        </div>
      </PlayerName>
      <Question>{gameData[gameController].question} </Question>
      <Answer htmlFor="a" onClick={setColor}>
        <input type="radio" name="answer" id="a" onChange={handleChange} />
        <TbLetterA size={25} color={colors.third} />
        <span>{gameData[gameController].a}</span>
      </Answer>
      <Answer onClick={setColor}>
        <input type="radio" name="answer" id="b" onChange={handleChange} />
        <TbLetterB size={25} color={colors.third} />
        {gameData[gameController].b}
      </Answer>
      <Answer onClick={setColor}>
        <input type="radio" name="answer" id="c" onChange={handleChange} />
        <TbLetterC size={25} color={colors.third} />
        {gameData[gameController].c}
      </Answer>
      <Answer onClick={setColor}>
        <input type="radio" name="answer" id="d" onChange={handleChange} />
        <TbLetterD size={25} color={colors.third} />
        {gameData[gameController].d}
      </Answer>
      <Answer onClick={setColor}>
        <input type="radio" name="answer" id="e" onChange={handleChange} />
        <TbLetterE size={25} color={colors.third} />
        {gameData[gameController].e}
      </Answer>
      <Button>
        <button onClick={handleClick}>Responder</button>
      </Button>
    </Container>
  );
}
