import { FormEvent, useRef } from 'react';
import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';

function AuthScreen() {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <section className="login">
      <Helmet>
        <title>Вы настоящий меломан!</title>
      </Helmet>

      <div className="login__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>

      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">
        Хотите узнать свой результат? Представтесь!
      </p>

      <form
        className="login__form"
        action=""
        onSubmit={handleSubmit}
      >
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input
            className="login__input"
            type="text"
            name="name"
            id="name"
            ref={loginRef}
          />
        </p>

        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input
            className="login__input"
            type="text"
            name="password"
            id="password"
            ref={passwordRef}
          />
          <span className="login__error">Неверный пароль</span>
        </p>

        <button className="login__button button" type="submit">Войти</button>
      </form>

      <button
        className="replay"
        type="button"
        onClick={() => navigate(AppRoute.Game)}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
}

export default AuthScreen;
