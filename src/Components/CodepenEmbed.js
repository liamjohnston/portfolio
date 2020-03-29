import React from 'react';

const THEME_WITH_TABS = '39031';
// const THEME_WITHOUT_TABS = '39032';

const CodepenEmbed = ({
  penId,
  title,
  description,
  height,
  tags,
  hideSm,
}: props) => (
  <div className={hideSm ? 'hide--up-to-md' : ''}>
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
        {tags.map((tag, i) => (
          <div className="tags__tag" key={`tag_${penId}_${i}`}>
            {tag}
          </div>
        ))}
      </div>
    )}
    <p className="codepen__description">{description}</p>
  </div>
);

export default CodepenEmbed;
