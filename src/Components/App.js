import React, { useEffect, useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../Pages/Home';
import OnlineBooking from '../Pages/OnlineBooking';
import Kitomba from '../Pages/Kitomba';
import '../style.scss';

// thanks stackoverflow
const savedThemePreference = document.cookie.replace(
  /(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/,
  '$1'
);

function setBodyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
}

if (savedThemePreference) {
  setBodyTheme(savedThemePreference);
}

// TODO: read OS preference as default
// const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// darkModeMediaQuery.addListener((e) => {
//   const darkModeOn = e.matches;
//   console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
// });

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //set initial based on saved preference (or, in the future, OS preference)
  useEffect(() => {
    if (savedThemePreference) {
      setIsDarkMode(savedThemePreference === 'dark');
    }
  }, []);

  const handleChangeTheme = useCallback(() => {
    const theme = isDarkMode ? 'light' : 'dark'; //haven't updated state yet
    setBodyTheme(theme);
    document.cookie = `theme=${theme}`;
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, setIsDarkMode]);

  const HomeWithThemeProps = (props) => {
    return (
      <Home
        isDarkMode={isDarkMode}
        handleChangeTheme={handleChangeTheme}
        {...props}
      />
    );
  };

  return (
    <ScrollToTop>
      <main>
        <Switch>
          <Route exact path="/" render={HomeWithThemeProps} />
          {/* <Route path="/work/tgs" component={TGS} /> */}
          <Route path="/work/online-booking" component={OnlineBooking} />
          <Route path="/work/kitomba" component={Kitomba} />
        </Switch>
      </main>
    </ScrollToTop>
  );
};

export default App;
