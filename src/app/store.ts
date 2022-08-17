import { configureStore } from '@reduxjs/toolkit';
// ...
import exampleReducer from '../features/game/exampleReducer';
export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
