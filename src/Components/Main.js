import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import TGS from '../Pages/TGS';
import OnlineBooking from '../Pages/OnlineBooking';
import Kitomba from '../Pages/Kitomba';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/work/tgs" component={TGS} />
      <Route path="/work/online-booking" component={OnlineBooking} />
      <Route path="/work/kitomba" component={Kitomba} />
    </Switch>
  </main>
);

export default Main;
