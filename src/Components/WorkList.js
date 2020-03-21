import React from 'react';
import { Link } from 'react-router-dom';
import imgTGS from '../img/teaser-tgs.jpg';
import imgOB from '../img/teaser-ob.jpg';
import imgKitomba from '../img/teaser-kitomba.jpg';

export default () => (
  <>
    <h2 className="text-center mt-xl">Past work</h2>
    <Link to={`/work/tgs`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <img src={imgTGS} alt="Screenshot of The Great Suspender" />
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
        <img src={imgOB} alt="Screenshot of Online Booking" />
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
        <img src={imgKitomba} alt="Screenshot of Kitomba" />
      </div>
      <div className="flex-child card-desc col-2">
        <h2>Kitomba</h2>
        <p>
          Business management solutions for hair and beauty businesses. An
          overview of what I did at Kitomba.
        </p>
      </div>
    </Link>
  </>
);
