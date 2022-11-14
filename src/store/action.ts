import { createAction } from '@reduxjs/toolkit';

import { AuthStatus } from '../const';
import { Question, UserAnswer } from '../types/question';

export const incrementStep = createAction('game/incrementStep');

export const resetGame = createAction('game/reset');

export const checkUserAnswer =
  createAction<{question: Question; answer: UserAnswer}>('game/checkUserAnswer');

export const loadQuestions =
  createAction<Question[]>('data/loadQuestions');

export const requireAuth = createAction<AuthStatus>('user/requireAuth');
