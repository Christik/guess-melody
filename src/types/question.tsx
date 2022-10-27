export type GenreAnswer = {
  src: string;
  genre: string;
};

export type QuestionGenre = {
  type: string;
  genre: string;
  answers: GenreAnswer[];
};
