import React from 'react';

const THEME_WITH_TABS = '39031';
const THEME_WITHOUT_TABS = '39032';

const CodepenEmbed = ({ penId, title, description, height, tags }: props) => (
  <div>
    {/* <div className="codepen__heading-wrapper">
      <h2 className="codepen__heading">{title}</h2> */}
    {/* <p className="codepen__description">{description}</p> */}
    {/* </div> */}

    <iframe
      className="codepen-embed"
      height={height}
      scrolling="no"
      title={title}
      src={`https://codepen.io/liamj/embed/preview/${penId}?height=${height}&theme-id=${THEME_WITH_TABS}&default-tab=result`}
      frameBorder="no"
      allowtransparency="true"
      allowFullScreen={true}
    />
    {tags && (
      <div className="tags">
        {tags.map(tag => (
          <div className="tags__tag">{tag}</div>
        ))}
      </div>
    )}
    <p className="codepen__description">{description}</p>
  </div>
);

export default CodepenEmbed;
