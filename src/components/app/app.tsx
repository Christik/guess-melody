import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-router';

import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthStatus, MAX_MISTAKE_COUNT } from '../../const';
import { useAppSelector } from '../../hooks';

import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import WinScreen from '../../pages/win-screen/win-screen';
import GameOverScreen from '../../pages/game-over-screen/game-over-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import GameScreen from '../../pages/game-screen/game-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  const isQuestionsDataLoading = useAppSelector((state) => state.isQuestionsDataLoading);

  if (isQuestionsDataLoading || authStatus === AuthStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<WelcomeScreen errorsCount = {MAX_MISTAKE_COUNT} />}
          />

          <Route
            path={AppRoute.Login}
            element={<AuthScreen />}
          />

          <Route
            path={AppRoute.Game}
            element={<GameScreen />}
          />

          <Route
            path={AppRoute.Result}
            element={
              <PrivateRoute authStatus={authStatus}>
                <WinScreen />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Lose}
            element={<GameOverScreen />}
          />

          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
