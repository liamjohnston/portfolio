import React from 'react';
import { Link } from 'react-router-dom';
import BrowserFrame from 'react-browser-frame';
import imgTGS from '../img/teaser-tgs.jpg';
import iconExternal from '../img/icon-external-link.svg';
import imgDerKatalog from '../img/teaser-derkatalog.jpg';
import imgComicSlack from '../img/teaser-comicslack.jpg';

export default () => (
  <>
    <Link to={`/work/tgs`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <BrowserFrame url="thegreatsuspender.com">
          <img src={imgTGS} alt="" />
        </BrowserFrame>
      </div>
      <div className="flex-child card-desc col-2">
        <h2 className="card__heading">The Great Suspender</h2>
        <p>
          The Great Suspender is my buddy Dean Oemcke's Chrome extension, which
          I maintain the UI for. It helps over 1.5 million active users free up
          memory by pausing unused chrome tabs.
        </p>
        <p className="fake-card-link">Read more</p>
      </div>
    </Link>

    <a
      href="http://derkatalog.surge.sh/"
      className="card-wrap d-flex flex-wrap"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-child card-img col-2">
        <BrowserFrame url="derkatalog.surge.sh">
          <img src={imgDerKatalog} alt="" />
        </BrowserFrame>
      </div>
      <div className="flex-child card-desc col-2">
        <h2 className="card__heading">Der Katalog</h2>
        <p>
          An app for cataloguing my record collection. It was one of the first
          things I made with React.
        </p>
        <p className="fake-card-link">
          Visit Der Katalog
          <span className="u-accessible-text"> (opens in a new window)</span>
          <img src={iconExternal} className="icon-external-link" alt="" />
        </p>
      </div>
    </a>

    <a
      href="https://www.npmjs.com/package/react-browser-frame"
      className="card-wrap d-flex flex-wrap"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-child card-img col-2">
        <BrowserFrame url="npmjs.com/react-browser-frame" padding="80px 10px">
          <p className="text-center">(this browser frame thingy)</p>
        </BrowserFrame>
      </div>
      <div className="flex-child card-desc col-2">
        <h2 className="card__heading">react-browser-frame</h2>
        <p>An NPM package to put stuff in a browser frame mockup.</p>
        <p className="fake-card-link">
          Go get it
          <span className="u-accessible-text"> (opens in a new window)</span>
          <img src={iconExternal} className="icon-external-link" alt="" />
        </p>
      </div>
    </a>

    <a
      href="https://liamjohnston.github.io/comic-slack/"
      className="card-wrap d-flex flex-wrap"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-child card-img col-2">
        <BrowserFrame url="liamjohnston.github.io/comic-slack">
          <img src={imgComicSlack} alt="" />
        </BrowserFrame>
      </div>
      <div className="flex-child card-desc col-2">
        <h2 className="card__heading">Comic Slack</h2>
        <p>A thing that lets you use Comic Sans in Slack... kinda.</p>
        <p className="fake-card-link">
          Try it out
          <span className="u-accessible-text"> (opens in a new window)</span>
          <img src={iconExternal} className="icon-external-link" alt="" />
        </p>
      </div>
    </a>
  </>
);
