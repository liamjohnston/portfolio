import React from 'react';

const CodepenEmbed = ({ penId, title, description, height }: props) => (
  <div className="codepen-block">
    <h2>{title}</h2>
    <p>{description}</p>
    <iframe
      className="codepen-embed"
      height={height}
      style={{ width: '100%' }}
      scrolling="no"
      title={title}
      src={`https://codepen.io/liamj/embed/${penId}?height=265&theme-id=dark&default-tab=result`}
      frameBorder="no"
      allowtransparency="true"
      allowFullScreen={true}
    />
  </div>
);

export default CodepenEmbed;
