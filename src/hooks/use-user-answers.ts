import { useState } from 'react';
import { Question } from '../types/question';

export const useUserAnswers = (question: Question) => {
  const answersQuantity = question.answers.length;

  const [answers, setAnswers] = useState<boolean[]>(
    Array.from({length: answersQuantity}, () => false)
  );

  const handleAnswerChange = (index: number, value: boolean) => {
    const userAnswers = [...answers];

    userAnswers[index] = value;
    setAnswers(userAnswers);
  };

  return [answers, handleAnswerChange];
};
