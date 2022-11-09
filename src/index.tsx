import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { questions } from './mock/questions';

import { store } from './store';

import App from './components/app/app';

const Setting = {
  ErrorsCount: 3,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        errorsCount = {Setting.ErrorsCount}
        questions = {questions}
      />
    </Provider>
  </React.StrictMode>,
);
