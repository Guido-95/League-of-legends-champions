import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from './reducers/league-slice';

export const store = configureStore({
  reducer: {
    league: leagueReducer,
  },
});
