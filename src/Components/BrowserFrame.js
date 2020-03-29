import React from 'react';

const BrowserFrame = ({ img, url, bottomCropped }) => (
  <div
    className={`browser-frame ${
      bottomCropped ? 'browser-frame--bottom-crop' : ''
    }`}
  >
    <div className="browser-frame__top">
      <div className="browser-frame__button browser-frame__button--red" />
      <div className="browser-frame__button browser-frame__button--yellow" />
      <div className="browser-frame__button browser-frame__button--green" />
      {url && (
        <div className="browser-frame__address" aria-hidden>
          {url}
        </div>
      )}
      <div className="browser-frame__burger">
        <span className="browser-frame__burger-line" />
        <span className="browser-frame__burger-line" />
        <span className="browser-frame__burger-line" />
      </div>
    </div>
    <div className="browser-frame__body">
      {img && <img className="browser-frame__img" src={img} alt="" />}
    </div>
  </div>
);

export default BrowserFrame;
