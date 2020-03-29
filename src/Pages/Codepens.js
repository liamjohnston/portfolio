import React from 'react';
import CodepenEmbed from '../Components/CodepenEmbed';

const gridHeightS = 450;
const gridHeightM = 500;
const gridHeightL = 700;

const TAG_NO_JS = 'No javascript';
const TAG_CSS_GRID = 'CSS grid';
const TAG_ANIMATION = 'Animation';
const TAG_DUMB = 'Dumb!';

export default () => (
  <>
    {/* <p className>
      If I get a good — or silly — idea for something to code, I try it out in
      in Codepen. Check out a few below, or have a look at{' '}
      <a href="http://www.codepen.io/liamj">the rest</a>.
    </p> */}

    <div className="grid-50">
      <CodepenEmbed
        title="Breezy Windows logo"
        penId="VdqgZK"
        description="Pug & scss loops, grid & flex"
        height={gridHeightM}
        tags={[TAG_NO_JS, TAG_CSS_GRID, TAG_ANIMATION]}
      />
      <CodepenEmbed
        title="Click the dot"
        penId="ELrYWd"
        description="Click the dot!"
        height={gridHeightM}
        tags={[TAG_DUMB]}
      />
      <CodepenEmbed
        title=":placeholder-shown selector"
        penId="vYYLGZj"
        description="Playing with a little-known CSS property to make an accessible, JS-free search box animation."
        height={gridHeightS}
        tags={[TAG_NO_JS]}
      />
      <CodepenEmbed
        title="Corner border button"
        penId="yrEXNx"
        description="A fun button border animation"
        height={gridHeightS}
        tags={[TAG_NO_JS, TAG_ANIMATION]}
      />
    </div>

    <CodepenEmbed
      hideSm
      title="Sunrise loop"
      penId="qPdPOp"
      description="Sometimes I see a neat thing on Dribbble and I want to see if I can make it in CSS. This was one of those neat things."
      height={gridHeightL}
      tags={[TAG_NO_JS, TAG_ANIMATION]}
    />

    <div className="grid-50">
      <CodepenEmbed
        title="Swappy radios"
        penId="NegxNB"
        description="An unnecessarily elaborate radio button effect"
        height={gridHeightM}
        tags={[TAG_ANIMATION, TAG_DUMB]}
      />
      <CodepenEmbed
        title="Bulgy radios"
        penId="QRgrpE"
        description="And another"
        height={gridHeightM}
        tags={[TAG_ANIMATION, TAG_DUMB]}
      />
    </div>
  </>
);
