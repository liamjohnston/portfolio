import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import WorkCTA from './WorkCTA';
import imgMe from '../img/liam-johnston.png';
import { Helmet } from 'react-helmet';
import Codepens from './Codepens';
import SideProjects from './SideProjects';
import WorkList from './WorkList';

const Home = () => {
  console.log(
    '%cLiam was here!',
    'color: red; font: 30pt Comic Sans MS; font-weight: bold'
  );

  return (
    <div>
      <Helmet>
        <title>Liam Johnston: web developer</title>
      </Helmet>
      <div className="intro-wrap">
        <h1 className="u-accessible-text">Liam Johnston, Web developer</h1>
        <div className="container">
          <div className="d-flex home-intro">
            <div className="intro-text">
              <p>
                <strong>Hi</strong> 👋
              </p>
              <p>I'm Liam, a front-end developer and UX enthusiast.</p>
              <p>
                I work at <a href="https://www.springload.co.nz">Springload</a>{' '}
                where I make the web more usable, accessible and useful.
              </p>

              {/* <p className="text-small">
                  <a
                    href="https://codepen.io/liamj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodePen
                  </a>{' '}
                  /{' '}
                  <a
                    href="https://github.com/liamjohnston/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </p> */}
            </div>
            <div className="intro-img">
              <img src={imgMe} width="375" height="362" alt="Liam Johnston" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab>Projects</Tab>
            <Tab>Codepens</Tab>
            <Tab>Past work</Tab>
          </TabList>

          <TabPanel>
            <SideProjects />
          </TabPanel>
          <TabPanel>
            <Codepens />
          </TabPanel>
          <TabPanel>
            <WorkList />
          </TabPanel>
        </Tabs>
      </div>

      {/* <WorkCTA /> */}

      <p className="text-sm text-muted text-center mt-xl mb-xl">
        Illustration of me by{' '}
        <a
          href="https://www.gabriellebaker.space/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabrielle Baker
        </a>
      </p>
    </div>
  );
};

export default Home;
