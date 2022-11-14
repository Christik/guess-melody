import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, FIRST_GAME_STEP } from '../const';
import { isAnswerCorrect } from '../game';
import { questions } from '../mock/questions';
import {
  checkUserAnswer,
  incrementStep,
  loadQuestions,
  requireAuth,
  resetGame } from './action';

const STEP_COUNT = 1;

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions,
  authStatus: AuthStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step += STEP_COUNT;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(loadQuestions, (state, action) => {
      state.questions = action.payload;
    })
    .addCase(checkUserAnswer, (state, action) => {
      const {question, answer} = action.payload;
      state.mistakes += Number(!isAnswerCorrect(question, answer));
    })
    .addCase(resetGame, (state) => {
      state.mistakes = 0;
      state.step = FIRST_GAME_STEP;
    });
});
