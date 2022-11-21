import { ChangeEvent } from 'react';
import { GenreAnswer } from '../../types/question';

type GenreQuestionItemProps = {
  index: number;
  answer: GenreAnswer;
  renderPlayer: (src: string, playerIndex: number) => JSX.Element;
  onChange: (index: number, value: boolean) => void;
  userAnswer: boolean;
};

function GenreQuestionItem(props: GenreQuestionItemProps) {
  const {index, answer, renderPlayer, onChange, userAnswer} = props;

  return (
    <div className="track">
      {renderPlayer(answer.src, index)}

      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={`answer-${index}`}
          id={`answer-${index}`}
          checked={userAnswer}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            const value = evt.target.checked;
            onChange(index, value);
          }}
        />
        <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
      </div>
    </div>
  );
}

export default GenreQuestionItem;
