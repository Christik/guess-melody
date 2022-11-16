import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetGame } from '../../store/action';

function WinScreen() {
  const mistakes = useAppSelector((state) => state.mistakes);
  const step = useAppSelector((state) => state.step);

  const correctAnswerCount = step - mistakes;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className="result">
      <Helmet>
        <title>Вы настоящий меломан!</title>
      </Helmet>

      <div className="result-logout__wrapper">
        <a className="result-logout__link" href="/">Выход</a>
      </div>

      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>

      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
        Вы ответили правильно на {correctAnswerCount} вопросов и совершили {mistakes} ошибки
      </p>

      <button
        className="replay"
        type="button"
        onClick={() => {
          dispatch(resetGame());
          navigate(AppRoute.Game);
        }}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
}

export default WinScreen;
