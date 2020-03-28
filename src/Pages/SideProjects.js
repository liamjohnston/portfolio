import React from 'react';
import { Link } from 'react-router-dom';
import imgTGS from '../img/teaser-tgs.jpg';
import imgDerKatalog from '../img/teaser-derkatalog.jpg';
import imgComicSlack from '../img/teaser-comicslack.jpg';
import BrowserFrame from '../Components/BrowserFrame';

export default () => (
  <>
    {/* <h2 className="text-center mt-xl">Side projects</h2> */}

    <Link to={`/work/tgs`} className="card-wrap d-flex flex-wrap">
      <div className="flex-child card-img col-2">
        <BrowserFrame img={imgTGS} url="thegreatsuspender.com" />
      </div>
      <div className="flex-child card-desc col-2">
        <h3 className="card__heading">The Great Suspender</h3>
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
    >
      <div className="flex-child card-img col-2">
        <BrowserFrame img={imgDerKatalog} url="derkatalog.surge.sh" />
      </div>
      <div className="flex-child card-desc col-2">
        <h3 className="card__heading">Der Katalog</h3>
        <p>
          An app for cataloguing my record collection. It was one of the first
          things I made with React.
        </p>
        <p className="fake-card-link">Visit Der Katalog</p>
      </div>
    </a>

    <a
      href="https://liamjohnston.github.io/comic-slack/"
      className="card-wrap d-flex flex-wrap"
    >
      <div className="flex-child card-img col-2">
        <BrowserFrame
          img={imgComicSlack}
          url="liamjohnston.github.io/comic-slack"
        />
      </div>
      <div className="flex-child card-desc col-2">
        <h3 className="card__heading">Comic Slack</h3>
        <p>A thing that lets you use Comic Sans in Slack... kinda.</p>
        <p className="fake-card-link">Try it out</p>
      </div>
    </a>
  </>
);
