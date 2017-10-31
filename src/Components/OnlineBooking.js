import React from 'react';
import WorkNav from './WorkNav';
import WorkCTA from '../Components/WorkCTA';
import { Helmet } from 'react-helmet';

export default class extends React.Component {
  componentDidMount() {
    //when video ends...
    document
      .querySelector('#theVid')
      .addEventListener('ended', this.vidEnded, false);
  }
  //...play it again
  vidEnded(e) {
    setTimeout(function() {
      document.querySelector('#theVid').play();
    }, 5000);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Online Booking</title>
        </Helmet>
        <WorkNav nextTitle="Kitomba" nextLink="kitomba" />
        <div className="intro-wrap bg-ob pt-xl mb-xxl">
          <div className="container">
            <div className="d-flex flex-50-wrap">
              <div className="flex-50 als-center mb-xl text-center-xs">
                <h1>Online Booking</h1>
                <p className="text-big">
                  An appointment booking site, used by hundreds of businesses
                  around NZ, Australia and UK.
                </p>
                <a
                  href="https://apps.baxus.com/bookings/liamtest"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make a booking
                </a>
                <p className="text-sm">
                  (go ahead - this one's just a test business)
                </p>
              </div>
              <div className="flex-50 hero-video-wrap">
                <div className="hero-video">
                  <video id="theVid" autoPlay playsInline>
                    <source
                      src={require('../video/ob-video.webm')}
                      type="video/webm"
                    />
                    <source
                      src={require('../video/ob-video.mp4')}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container narrow">
          <div className="content-blob">
            <h2>About Online Booking</h2>
            <p>
              Online Booking connects salon customers to the salon's appointment
              book, so customers can make a booking at their leisure. Timeslots
              are offered based on availability, staff hours and capabilities,
              and service duration etc.
            </p>
            <p>Online Booking is designed to work great on all devices.</p>
          </div>

          <div className="content-blob">
            <h2>What I did</h2>
            <p>
              Kitomba's old booking system was dated and difficult to use - it
              wasn't mobile-friendly, and an early login step was a barrier for
              customers.
            </p>
            <p>So, to get people making bookings I...</p>
            <ul>
              <li>
                used data and working prototypes to illustrate to Kitomba
                management that the old booking system could and should be a lot
                better.
              </li>
              <li>
                used paper prototypes and user testing to evaluate design ideas.
              </li>
              <li>
                worked closely with Kitomba's devs as they backbone-ised it and
                hooked up a backend, and ensured they got it working in a{' '}
                <em>nice</em> way.
              </li>
              <li>
                designed and built a customisation area where each salon can
                choose styles and settings.
              </li>
              <li>
                ran live webinars introducing the new booking site to our
                customers.
              </li>
            </ul>
          </div>

          <div className="content-blob">
            <h2>How good is it?</h2>
            <ul>
              <li>
                At launch, bookings increased by 25% overnight across Kitomba
                clients
              </li>
              <li>Online Booking handles nearly $2m in bookings every week</li>
            </ul>
          </div>
        </div>
        <WorkCTA />
      </div>
    );
  }
}
