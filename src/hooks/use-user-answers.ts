import { useState } from 'react';
import { Question, UserGenreQuestionAnswer } from '../types/question';

type ResultUserAnswers = [
  UserGenreQuestionAnswer,
  (index: number, value: boolean) => void
];

export const useUserAnswers = (question: Question): ResultUserAnswers => {
  const answersQuantity = question.answers.length;

  const [answers, setAnswers] = useState<UserGenreQuestionAnswer>(
    Array.from({length: answersQuantity}, () => false)
  );

  const handleAnswerChange = (index: number, value: boolean) => {
    const userAnswers = [...answers];

    userAnswers[index] = value;
    setAnswers(userAnswers);
  };

  return [answers, handleAnswerChange];
};
