export const FIRST_GAME_STEP = 0;

export enum AppRoute {
  Root = '/',
  Game = '/game',
  Login = '/login',
  Result = '/result',
  Lose = '/lose',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum GameType {
  Genre = 'genre',
  Artist = 'artist',
}
