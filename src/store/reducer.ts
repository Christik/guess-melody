import { createReducer } from '@reduxjs/toolkit';
import { FIRST_GAME_STEP } from '../const';
import { isAnswerCorrect } from '../game';
import { checkUserAnswer, incrementStep, resetGame } from './action';

const STEP_COUNT = 1;

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step += STEP_COUNT;
    })
    .addCase(checkUserAnswer, (state, action) => {
      const {question, answer} = action.payload;
      state.mistakes += Number(isAnswerCorrect(question, answer));
    })
    .addCase(resetGame, (state) => {
      state.mistakes = 0;
      state.step = FIRST_GAME_STEP;
    });
});
