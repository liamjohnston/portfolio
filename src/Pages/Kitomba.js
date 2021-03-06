import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoWebm from '../video/kitomba-video.webm';
import videoMp4 from '../video/kitomba-video.mp4';

export default () => {
  //when video ends...
  useEffect(() => {
    document
      .querySelector('#theVid')
      .addEventListener('ended', vidEnded, false);
    return () => {
      document
        .querySelector('#theVid')
        .removeEventListener('ended', vidEnded, false);
    };
  }, []);
  //...play it again
  const vidEnded = (e) => {
    setTimeout(() => {
      if (document.querySelector('#theVid')) {
        document.querySelector('#theVid').play();
      }
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Kitomba</title>
      </Helmet>
      <div className="intro-wrap bg-kitomba pt-xl mb-xxl">
        <div className="container">
          <div className="d-flex flex-50-wrap">
            <div className="flex-50 als-center mb-xl text-center-xs">
              <h1>Kitomba</h1>
              <p className="text-big">
                Business management systems for the hair and beauty industry.
                Used by thousands of businesses around NZ, Australia and the UK.
              </p>
            </div>
            <div className="flex-50 hero-video-wrap" aria-hidden>
              <div className="hero-video">
                <video id="theVid" autoPlay playsInline>
                  <source src={videoWebm} type="video/webm" />
                  <source src={videoMp4} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container narrow">
        <div className="content-blob">
          <h2>About Kitomba</h2>
          <p>
            Kitomba provide salon management software to companies in NZ,
            Australia and the UK.
          </p>
          <p>
            For the last six+ years, I've been responsible for designing and
            coding the UI of their web-based systems.
          </p>
        </div>

        <div className="content-blob">
          <h2>What I did</h2>
          <p>
            I worked on a wide variety of systems, from desktop apps for hair
            stylists &amp; receptionists, onboarding flows for new customers,
            and enterprise web apps for managers and owners. Not to mention a{' '}
            <Link to="/work/online-booking">booking site</Link> for salon
            customers.
          </p>
          <p>A typical day might include:</p>
          <ul>
            <li>
              UX stuff: interviews, user testing, mockups &amp; wireframes,
              prototypes (as in the video above), and more testing.
            </li>
            <li>
              Front-end dev stuff: HTML, CSS, JS (both for prototyping purposes
              and as production code).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
