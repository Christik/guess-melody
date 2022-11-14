import { Navigate } from 'react-router-dom';

import { AppRoute, GameType } from '../../const';
import { Question } from '../../types/question';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { incrementStep } from '../../store/action';

import withAudioPlayer from '../../hoc/with-audio-player';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import Mistakes from '../../components/mistakes/mistakes';

const ArtistQuestionScreenWrapper = withAudioPlayer(ArtistQuestionScreen);
const GenreQuestionScreenWrapper = withAudioPlayer(GenreQuestionScreen);

type GameScreenProps = {
  questions: Question[];
};

function GameScreen({questions}: GameScreenProps) {
  const step = useAppSelector((state) => state.step);
  const mistakes = useAppSelector((state) => state.mistakes);

  const dispatch = useAppDispatch();
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
          question={question}
          onAnswer={() => dispatch(incrementStep())}
        >
          <Mistakes count={mistakes} />
        </GenreQuestionScreenWrapper>
      );

    case GameType.Artist:
      return (
        <ArtistQuestionScreenWrapper
          question={question}
          onAnswer={() => dispatch(incrementStep())}
        >
          <Mistakes count={mistakes} />
        </ArtistQuestionScreenWrapper>
      );

    default:
      return (
        <Navigate to={AppRoute.Root} />
      );
  }
}

export default GameScreen;
