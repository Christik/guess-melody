import {useState} from 'react';
import { Navigate } from 'react-router-dom';

import {AppRoute, FIRST_GAME_STEP, GameType} from '../../const';
import {Question, QuestionArtist, QuestionGenre} from '../../types/question';

import withAudioPlayer from '../../hoc/with-audio-player';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

const ArtistQuestionScreenWrapper = withAudioPlayer(ArtistQuestionScreen);
const GenreQuestionScreenWrapper = withAudioPlayer(GenreQuestionScreen);

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
        <GenreQuestionScreenWrapper
          question={question as QuestionGenre}
          onAnswer={() => setStep((prevStep) => (prevStep + 1))}
        />
      );

    case GameType.Artist:
      return (
        <ArtistQuestionScreenWrapper
          question={question as QuestionArtist}
          onAnswer={() => setStep((prevStep) => (prevStep + 1))}
        />
      );

    default:
      return (
        <Navigate to={AppRoute.Root} />
      );
  }
}

export default GameScreen;
