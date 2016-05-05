import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import assessment from './reducers';
import App from './components/App';

const store = createStore(assessment);

// Hacky env variable workaround.
if (!window.MM_WP_API_URL) {
  window.MM_WP_API_URL = 'http://localhost:3000/wp-json/wp/v2';
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
