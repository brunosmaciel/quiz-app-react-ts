/* eslint-disable @typescript-eslint/no-explicit-any */
import { gameData } from '../../services/data';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { sumScore } from '../../features/game/exampleReducer';
import { Question, Answer } from './styled';
import { Button } from '../../theme/GlobalStyles';
import { PlayerName, MainContent } from './styled';
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

          return;
        }
      } catch (e) {
        setGameController(gameController + 1);
        return;
      }
    }
    toast.clearWaitingQueue();
    toast.warning('Voce precisa selecionar uma resposta');
  };
  const handleChange = (e: any) => {
    setAnswered(true);
    setInputId(e.target.id as any);
    setEvent(e);
  };

  if (!gameId) {
    useEffect(() => {
      navigate('/');
    });
    return <></>;
  }
  if (gameController === gameData.length) {
    navigate('/game/result');
    return <></>;
  }
  return (
    <MainContent>
      <PlayerName>
        <div>
          <span>{playerName}</span> <CgMenuLeft size={30} color={colors.primary} />
        </div>
      </PlayerName>
      <Question>{gameData[gameController].question} </Question>
      <Answer htmlFor="a">
        <input type="radio" name="answer" id="a" onChange={handleChange} className="input" />
        <div>
          <TbLetterA size={25} color={colors.third} />
          <span>{gameData[gameController].a}</span>
        </div>
      </Answer>
      <Answer>
        <input type="radio" name="answer" id="b" onChange={handleChange} className="input" />
        <div>
          <TbLetterB size={25} color={colors.third} />
          <span>{gameData[gameController].b}</span>
        </div>
      </Answer>
      <Answer>
        <input type="radio" name="answer" id="c" onChange={handleChange} className="input" />
        <div>
          <TbLetterC size={25} color={colors.third} />
          <span>{gameData[gameController].c}</span>
        </div>
      </Answer>
      <Answer>
        <input type="radio" name="answer" id="d" onChange={handleChange} className="input" />
        <div>
          <TbLetterD size={25} color={colors.third} />
          <span>{gameData[gameController].d}</span>
        </div>
      </Answer>
      <Answer>
        <input type="radio" name="answer" id="e" onChange={handleChange} className="input" />
        <div>
          <TbLetterE size={25} color={colors.third} />
          <span>{gameData[gameController].e}</span>
        </div>
      </Answer>

      <Button onClick={handleClick}>Responder</Button>
    </MainContent>
  );
}
