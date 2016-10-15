/* React */
import React                            from 'react';
import ReactDOM                         from 'react-dom';
/* Redux */
import thunkMiddleware                  from 'redux-thunk';
import createLogger                     from 'redux-logger';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App             from './App';
import mainReducer     from './reducers';
import { hydrate }     from './actions';

import './index.css';

/*
 * Setup Middleware
 */
function getStoreMiddleware() {
  if (process.env.NODE_ENV !== 'production') {
    return [thunkMiddleware, createLogger()];
  }
  return [thunkMiddleware];
}


/*
 * Mount React MainComponent
 */
function connectReduxReact(store) {
  ReactDOM.render(
    React.createElement(
      Provider,
      { store },
      <App />
    ),
    document.getElementById('root')
  );
}


/*
 * Redux
 */
const middleware = getStoreMiddleware();
const store = applyMiddleware(
  ...middleware
)(createStore)(mainReducer);

// Hydrate store
store.dispatch(hydrate());

connectReduxReact(store);
