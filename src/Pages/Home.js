import React, { useState, useCallback } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
// import '@reach/tabs/styles.css';
import imgMe from '../img/liam-johnston.png';
import { Helmet } from 'react-helmet';
import Codepens from './Codepens';
import SideProjects from './SideProjects';
import WorkList from './WorkList';

console.log(
  '%chi :)',
  'color: red; font: 30px Comic Sans MS; font-weight: bold'
);

const tabs = [
  {
    title: 'Projects',
    color: '#ea004e',
  },
  {
    title: 'Codepens',
    color: '#0078c7',
  },
  {
    title: 'Past work',
    color: '#00864f',
  },
];

const Home = () => {
  const [selected, setSelected] = useState(0);

  const handleTabsChange = useCallback(
    (index) => {
      setSelected(index);
    },
    [setSelected]
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
            </div>
            <div className="intro-img">
              <img src={imgMe} width="375" height="362" alt="Liam Johnston" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Tabs onChange={handleTabsChange}>
          <TabList>
            <AnimateSharedLayout>
              {tabs.map(({ title, color }, i) => (
                <Tab key={i}>
                  <span
                    className="tab__text"
                    style={{
                      color: i === selected ? color : '#444',
                    }}
                  >
                    {title}
                  </span>
                  {i === selected && (
                    <motion.div
                      // animate
                      layoutId="tab__underline"
                      className="tab__underline"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </Tab>
              ))}
            </AnimateSharedLayout>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SideProjects />
            </TabPanel>
            <TabPanel>
              <Codepens />
            </TabPanel>
            <TabPanel>
              <WorkList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

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
