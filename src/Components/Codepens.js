import React from 'react';
import CodepenEmbed from './CodepenEmbed';

export default () => (
  <>
    <p>
      If I get a good - or silly - idea for something to code, I try it out in
      in Codepen. Check out a few below, or have a look at{' '}
      <a href="http://www.codepen.io/liamj">the rest</a>.
    </p>

    <CodepenEmbed
      title="Breezy Windows logo"
      penId="VdqgZK"
      description="Pug & scss loops, grid & flex"
      height={450}
    />

    <CodepenEmbed
      title="Swappy radios"
      penId="NegxNB"
      description="One of several weird & fun radio button pens I've made"
      height={420}
    />

    <CodepenEmbed
      title="Click the dot"
      penId="ELrYWd"
      description="Some light trolling"
      height={500}
    />

    <CodepenEmbed
      title="Sunrise loop"
      penId="qPdPOp"
      description="Sometimes I see a neat thing on Dribbble and I want to see if I can make it in CSS - this is one of those neat things."
      height={700}
    />

    <CodepenEmbed
      title=":placeholder-shown selector"
      penId="vYYLGZj"
      description="Playing with a little-known CSS property to make an accessible, JS-free search box animation."
      height={300}
    />
  </>
);
