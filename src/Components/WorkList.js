import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container">
    <h4 className="text-center mt-xl">Recent work</h4>
    <Link to={`/work/tgs`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <img
          src={require('../img/teaser-tgs.jpg')}
          alt="Screenshot of The Great Suspender"
        />
      </div>
      <div className="flex-child card-desc col-2">
        <h2>The Great Suspender</h2>
        <p>
          A Chrome extension to free up memory. Has over one million active
          users.
        </p>
      </div>
    </Link>

    <Link to={`/work/online-booking`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <img
          src={require('../img/teaser-ob.jpg')}
          alt="Screenshot of Online Booking"
        />
      </div>
      <div className="flex-child card-desc col-2">
        <h2>Online Booking</h2>
        <p>
          An appointment booking site optimised for mobile. Used by household
          names like Vivo and Rodney Wayne.
        </p>
      </div>
    </Link>

    <Link to={`/work/kitomba`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <img
          src={require('../img/teaser-kitomba.jpg')}
          alt="Screenshot of Kitomba"
        />
      </div>
      <div className="flex-child card-desc col-2">
        <h2>Kitomba</h2>
        <p>
          Business management solutions for hair and beauty businesses. An
          overview of what I did at Kitomba.
        </p>
      </div>
    </Link>
  </div>
);
