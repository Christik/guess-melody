import { BrowserHistory } from 'history';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export interface HistoryRouteProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

function HistoryRoute (props: HistoryRouteProps) {
  const {history, basename, children} = props;

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      navigator={history}
      navigationType={state.action}
      location={state.location}
    >
      {children}
    </Router>
  );
}

export default HistoryRoute;
