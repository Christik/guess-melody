import { GameType } from './const';
import {
  Question,
  QuestionArtist,
  QuestionGenre,
  UserAnswer,
  UserArtistQuestionAnswer,
  UserGenreQuestionAnswer } from './types/question';

export const isAnswerCorrect = (question: Question, answer: UserAnswer) => {
  if (question.type === GameType.Artist && typeof answer === 'string') {
    return isArtistAnswerCorrect(question, answer);
  }

  if (question.type === GameType.Genre && Array.isArray(answer)) {
    return isGenreAnswerCorrect(question, answer);
  }

  return false;
};

export const isArtistAnswerCorrect =
  (question: QuestionArtist, answer: UserArtistQuestionAnswer) => (
    answer === question.song.artist
  );

export const isGenreAnswerCorrect =
  (question: QuestionGenre, answer: UserGenreQuestionAnswer) => (
    answer.every((userAnswer, index) =>
      question.answers[index].genre === question.genre
    )
  );
