import {Helmet} from 'react-helmet-async';
import {QuestionArtist, UserArtistQuestionAnswer} from '../../types/question';

import Logo from '../../components/logo/logo';

type ArtistQuestionScreenProps = {
  question: QuestionArtist;
  onAnswer: (question: QuestionArtist, answer: UserArtistQuestionAnswer) => void;
};

function ArtistQuestionScreen(props: ArtistQuestionScreenProps) {
  const {question, onAnswer} = props;
  const {song, answers} = question;

  return (
    <section className="game game--artist">
      <Helmet>
        <title>Кто исполняет эту песню?</title>
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
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={song.src}></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, index) => (
            <div className="artist" key={answer.artist}>
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`artist-${index}`}
                id={`artist-${index}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(question, answer.artist);
                }}
              />
              <label className="artist__name" htmlFor={`artist-${index}`}>
                <img
                  className="artist__picture"
                  src={answer.picture}
                  alt={answer.artist}
                />
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
}

export default ArtistQuestionScreen;
