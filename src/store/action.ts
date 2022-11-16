import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthStatus } from '../const';
import { Question, UserAnswer } from '../types/question';

export const incrementStep = createAction('game/incrementStep');

export const resetGame = createAction('game/reset');

export const checkUserAnswer =
  createAction<{question: Question; answer: UserAnswer}>('game/checkUserAnswer');

export const loadQuestions =
  createAction<Question[]>('data/loadQuestions');

export const requireAuth = createAction<AuthStatus>('user/requireAuth');

export const setError = createAction<string | null>('game/setError');

export const setQuestionsDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
