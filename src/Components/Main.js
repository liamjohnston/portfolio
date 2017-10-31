import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import TGS from './TGS';
import OnlineBooking from './OnlineBooking';
import Kitomba from './Kitomba';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/work/tgs" component={TGS} />
    <Route path="/work/online-booking" component={OnlineBooking} />
    <Route path="/work/kitomba" component={Kitomba} />
  </Switch>
);

export default Main;
