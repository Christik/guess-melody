import React from 'react';
import ReactDOM from 'react-dom/client';

import {questions} from './mock/questions';

import App from './components/app/app';

const Setting = {
  ErrorsCount: 3,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      errorsCount = {Setting.ErrorsCount}
      questions = {questions}
    />
  </React.StrictMode>,
);
