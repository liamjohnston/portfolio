import React from 'react';
// import WorkCTA from '../Components/WorkCTA';
import { Helmet } from 'react-helmet';
import heroImg from '../img/tgs-hero.jpg';
import BrowserFrame from 'react-browser-frame';

const TGS = () => (
  <div>
    <Helmet>
      <title>The Great Suspender</title>
    </Helmet>
    <div className="intro-wrap bg-tgs text-center pt-xl mb-xxl">
      <div className="container">
        <h1>The Great Suspender</h1>
        <p className="text-big">
          &ldquo;The best extension I have ever used.&rdquo;
        </p>
        <div className="stars text-big mb-xl" aria-hidden>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
        <div className="cropped-bottom">
          <BrowserFrame>
            <img
              src={heroImg}
              alt=""
              style={{ display: 'block', width: '100%' }}
            />
          </BrowserFrame>
        </div>
      </div>
    </div>

    <div className="container narrow">
      <div className="content-blob">
        <h2>About The Great Suspender</h2>
        <p>
          The Great Suspender (TGS) is my friend's Google Chrome extension which
          I designed and generally helped out with. It frees up system memory by
          'suspending' tabs that haven't been used in a while.
        </p>
        <p>
          It has well over one million active users and has made many (many!)
          people's computers usable again. Some users have reported a 40% boost
          in battery life, and others say it's breathed life into laptops that
          were destined for the trash heap.
        </p>
      </div>

      <div className="content-blob">
        <h2>What I did</h2>
        <p>
          I thought TGS was a great idea, so I jumped at the chance to make it
          as good as it could be.
        </p>
        <ul>
          <li>I helped figure out what it should/shouldn't do.</li>
          <li>
            Wireframed and experimented with different versions of the settings
            and suspended tab areas.
          </li>
          <li>Coded the UI (HTML/CSS, some of the JS).</li>
        </ul>
      </div>

      <div className="content-blob">
        <h2>So do people like this thing or what?</h2>
        <p>
          They do. TGS has featured in{' '}
          <a
            href="https://www.theguardian.com/technology/2016/jun/21/seven-tricks-to-speed-up-google-chrome"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Guardian
          </a>
          ,{' '}
          <a
            href="http://www.huffingtonpost.com/2015/05/18/great-suspender-chrome_n_7307432.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Huffington Post
          </a>
          ,{' '}
          <a
            href="http://www.pcworld.com/article/3087525/software/tab-tamers-essential-chrome-extensions-for-cleaning-up-browser-clutter.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            PCWorld
          </a>
          ,{' '}
          <a
            href="https://www.lifehacker.com.au/2015/05/the-great-suspender-frees-up-memory-by-suspending-browser-tabs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LifeHacker
          </a>{' '}
          and more.
        </p>

        <p>
          It also got{' '}
          <a
            href="https://developers.google.com/web/updates/2015/09/tab-discarding#inspiration_hey_there_great_suspender"
            target="_blank"
            rel="noopener noreferrer"
          >
            a nice shoutout
          </a>{' '}
          from the Chrome team.
        </p>

        <div className="testimonials">
          <div className="testimonial">
            <div className="stars" aria-hidden>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p>
              I wanted to rate this extension even better than 5 stars but I
              can't
            </p>
          </div>
          <div className="testimonial">
            <div className="stars" aria-hidden>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p>Easy to use. Works as described. Highly recommend.</p>
          </div>
          <div className="testimonial">
            <div className="stars" aria-hidden>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p>One of the best things I discovered on the Internet.</p>
          </div>
          <div className="testimonial">
            <div className="stars" aria-hidden>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p>It is easy to use, very clear, and works great.</p>
          </div>
        </div>
        <p className="text-center text-muted">
          &mdash; Chrome Web Store reviewers
        </p>
      </div>

      <div className="text-center content-blob">
        <a
          href="https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg?hl=en"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the extension
        </a>
      </div>
    </div>
    {/* <WorkCTA /> */}
  </div>
);

export default TGS;
