import {Helmet} from 'react-helmet-async';
import {QuestionGenre} from '../../types/question';

import Logo from '../../components/logo/logo';

type GenreQuestionScreenProps = {
  question: QuestionGenre;
};

function GenreQuestionScreen(props: GenreQuestionScreenProps) {
  const {question} = props;
  const {genre, answers} = question;

  return (
    <section className="game game--genre">
      <Helmet>
        <title>Выберите треки</title>
      </Helmet>

      <header className="game__header">
        <Logo />

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style={{
              filter: 'url(#blur)',
              transform: 'rotate(-90deg) scaleY(-1)',
              transformOrigin: 'center',
            }}
          />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>

        <form className="game__tracks">
          {answers.map((answer, index) => {
            const {src} = answer;
            const key = `${index}-${src}`;

            return (
              <div className="track" key={key}>
                <button className="track__button track__button--play" type="button"></button>

                <div className="track__status">
                  <audio src={src}></audio>
                </div>

                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${index}`}
                    id={`answer-${index}`}
                  />
                  <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
}

export default GenreQuestionScreen;
