import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Main } from './pages/MasterPage';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif'],
  },
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
