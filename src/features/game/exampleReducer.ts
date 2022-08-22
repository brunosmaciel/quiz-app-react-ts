import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  gameInProgress: boolean;
  score: number;
  playerName: string;
  gameId: string;
}
const initialState: GameState = {
  gameInProgress: false,
  score: 0,
  playerName: '',
  gameId: '',
};
export const exampleReducer = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<string>) => {
      state.gameInProgress = true;
      state.playerName = action.payload;
    },
    sumScore: (state) => {
      state.score++;
    },
    resetGame: (state) => {
      state.gameInProgress = false;
      state.score = 0;
      state.playerName = '';
    },
    setGameId: (state, action: PayloadAction<string>) => {
      state.gameId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startGame, sumScore, resetGame, setGameId } = exampleReducer.actions;

export default exampleReducer.reducer;
