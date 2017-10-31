import React from 'react';
import Main from './Main';
import ScrollToTop from './ScrollToTop';
import '../style.min.css';

const App = () => (
  <div>
    <ScrollToTop>
      <Main />
    </ScrollToTop>
  </div>
);

export default App;
