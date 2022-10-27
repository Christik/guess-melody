import {useState} from 'react';
import { Navigate } from 'react-router-dom';

import {AppRoute, FIRST_GAME_STEP, GameType} from '../../const';
import {Question, QuestionArtist, QuestionGenre} from '../../types/question';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

type GameScreenProps = {
  questions: Question[];
};

function GameScreen({questions}: GameScreenProps) {
  const [step, setStep] = useState(FIRST_GAME_STEP);
  const question = questions[step];

  if (step >= questions.length || !question) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

  switch (question.type) {
    case GameType.Genre:
      return (
        <GenreQuestionScreen
          question={question as QuestionGenre}
          onAnswer={() => setStep(step + 1)}
        />
      );

    case GameType.Artist:
      return (
        <ArtistQuestionScreen
          question={question as QuestionArtist}
          onAnswer={() => setStep(step + 1)}
        />
      );

    default:
      return (
        <Navigate to={AppRoute.Root} />
      );
  }
}

export default GameScreen;
