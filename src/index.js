import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

// A copy of Facebook's approach to handling focus styles for keyboard vs mouse users
document.body.addEventListener('mousedown', function () {
  document.body.classList.add('using-mouse');
});
// Note this currently triggers for 'ANY' keyboard use, including alt-tabbing to another window
document.body.addEventListener('keydown', function () {
  document.body.classList.remove('using-mouse');
});

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
