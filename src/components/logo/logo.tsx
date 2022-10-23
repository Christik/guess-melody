import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Logo() {
  return (
    <Link className="game__back" to={AppRoute.Root}>
      <span className="visually-hidden">Сыграть ещё раз</span>
      <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
    </Link>
  );
}

export default Logo;
