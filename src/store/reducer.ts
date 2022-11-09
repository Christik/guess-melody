import { createReducer } from '@reduxjs/toolkit/dist/createReducer';
import { FIRST_GAME_STEP } from '../const';
import { incrementStep } from './action';

const STEP_COUNT = 1;

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step += STEP_COUNT;
    });
});
