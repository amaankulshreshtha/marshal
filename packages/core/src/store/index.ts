import { configureStore } from '@reduxjs/toolkit';
import allActions from './actions';
import reducer from './reducers';

export const actions = allActions;

const store = configureStore({
  reducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
