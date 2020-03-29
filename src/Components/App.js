import React from 'react';
import Main from './Main';
import ScrollToTop from './ScrollToTop';
import '../style.scss';

const App = () => (
  <ScrollToTop>
    <Main />
  </ScrollToTop>
);

export default App;
