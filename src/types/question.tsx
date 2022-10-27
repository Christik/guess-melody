export type GenreAnswer = {
  src: string;
  genre: string;
};

export type QuestionGenre = {
  type: string;
  genre: string;
  answers: GenreAnswer[];
};

export type Song = {
  artist: string;
  src: string;
};

export type ArtistAnswer = {
  picture: string;
  artist: string;
};

export type QuestionArtist = {
  type: string;
  song: Song;
  answers: ArtistAnswer[];
};

export type Question = QuestionArtist | QuestionGenre;

export type UserGenreQuestionAnswer = readonly boolean[];

export type UserArtistQuestionAnswer = string;
