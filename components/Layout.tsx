import React, { ReactNode } from 'react';
import Head from 'next/head';

import Separator from './Separator/';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Works from './Works';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = () => (
  <>
    <Head>
      <title>Bartek Telec - portfolio</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className='app' id='top'>
      <Navigation />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Works />
    </div>
  </>
);

export default Layout;
