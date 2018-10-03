import React, { Component } from 'react';
import WorkList from './WorkList';
import WorkCTA from './WorkCTA';
import imgMe from '../img/liam-johnston.png';
import { Helmet } from 'react-helmet';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Liam Johnston: web developer</title>
        </Helmet>
        <div className="intro-wrap mb-xxl">
          <div className="container">
            <div className="d-flex home-intro">
              <div className="intro-text">
                <p>
                  <strong>Hi</strong> 👋
                </p>
                <p>
                  I'm Liam, a front-end developer and UX enthusiast. I love to
                  make the web more usable, accessible and useful.
                </p>
                <p>See some of my work below.</p>

                <p className="text-small">
                  Also, check out my{' '}
                  <a
                    href="https://codepen.io/liamj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodePen
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://github.com/liamjohnston/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
              <div className="intro-img">
                <img src={imgMe} width="375" height="362" alt="Liam Johnston" />
              </div>
            </div>
          </div>
        </div>

        <WorkList />

        <WorkCTA />

        <p className="text-sm text-muted text-center mt-xl mb-xl">
          Illustration by{' '}
          <a
            href="https://www.gabriellebaker.space/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gabrielle Baker
          </a>
          . &nbsp;&nbsp;Site built with React.
        </p>
      </div>
    );
  }
}

export default Home;
