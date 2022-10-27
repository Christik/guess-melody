import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthStatus} from '../../const';

import {Question, QuestionGenre} from '../../types/question';

import PrivateRoute from '../private-route/private-route';

import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import WinScreen from '../../pages/win-screen/win-screen';
import GameOverScreen from '../../pages/game-over-screen/game-over-screen';
import GenreQuestionScreen from '../../pages/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../../pages/artist-question-screen/artist-question-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  errorsCount: number;
  questions: Question[];
};

function App({errorsCount, questions}: AppScreenProps): JSX.Element {
  const [firstQuestion] = questions;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<WelcomeScreen errorsCount = {errorsCount} />}
          />

          <Route
            path={AppRoute.Login}
            element={<AuthScreen />}
          />

          <Route
            path={AppRoute.Result}
            element={
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
                <WinScreen />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Lose}
            element={<GameOverScreen />}
          />

          <Route
            path={AppRoute.DevGenre}
            element={
              <GenreQuestionScreen question = {firstQuestion as QuestionGenre} />
            }
          />

          <Route
            path={AppRoute.DevArtist}
            element={<ArtistQuestionScreen />}
          />

          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
