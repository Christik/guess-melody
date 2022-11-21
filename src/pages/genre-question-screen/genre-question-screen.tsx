import {Helmet} from 'react-helmet-async';
import { ChangeEvent, PropsWithChildren } from 'react';

import {QuestionGenre, UserGenreQuestionAnswer} from '../../types/question';

import Logo from '../../components/logo/logo';
import { useUserAnswers } from '../../hooks/use-user-answers';


type GenreQuestionScreenProps = PropsWithChildren<{
  question: QuestionGenre;
  onAnswer: (question: QuestionGenre, answer: UserGenreQuestionAnswer) => void;
  renderPlayer: (src: string, playerIndex: number) => JSX.Element;
}>;

function GenreQuestionScreen(props: GenreQuestionScreenProps) {
  const {question, onAnswer, renderPlayer, children} = props;
  const {genre, answers} = question;

  const [userAnswers, handleAnswerChange] = useUserAnswers(question);

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

        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>

        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, userAnswers);
          }}
        >

          {answers.map((answer, index) => {
            const {src} = answer;
            const key = `${index}-${src}`;

            return (
              <div className="track" key={key}>
                {renderPlayer(src, index)}

                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${index}`}
                    id={`answer-${index}`}
                    checked={userAnswers[index]}
                    onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                      handleAnswerChange(index, evt.target.checked);
                    }}
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
