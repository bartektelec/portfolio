import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Navigation from './Navigation';
import Hero from './Hero';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Bartek Telec - portfolio</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className='app'>
      <Navigation />
      <Hero />
    </div>
  </>
);

export default Layout;
