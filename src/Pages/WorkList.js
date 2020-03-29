import React from 'react';
import { Link } from 'react-router-dom';
import imgOB from '../img/teaser-ob.jpg';
import imgKitomba from '../img/teaser-kitomba.jpg';

export default () => (
  <>
    <Link to={`/work/online-booking`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <img src={imgOB} alt="Screenshot of Online Booking" />
      </div>
      <div className="flex-child card-desc col-2">
        <h2 className="card__heading">Online Booking</h2>
        <p>
          An appointment booking site optimised for mobile. Used by household
          names like Vivo and Rodney Wayne.
        </p>
        <p className="fake-card-link">Read more</p>
      </div>
    </Link>

    <Link to={`/work/kitomba`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <img src={imgKitomba} alt="Screenshot of Kitomba" />
      </div>
      <div className="flex-child card-desc col-2">
        <h2 className="card__heading">Kitomba</h2>
        <p>
          Business management solutions for hair and beauty businesses. An
          overview of what I did at Kitomba.
        </p>
        <p className="fake-card-link">Read more</p>
      </div>
    </Link>
  </>
);
