export const FIRST_GAME_STEP = 0;
export const MAX_MISTAKE_COUNT = 3;

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

export enum ApiRoute {
  Questions = '/questions',
  Login = '/login',
  Logout = '/logout',
}
