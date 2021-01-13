import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Navigation from './Navigation';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Head>
      <title>Bartek Telec - portfolio</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <Navigation></Navigation>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href='/users'>
          <a>Users List</a>
        </Link>{' '}
        | <a href='/api/users'>Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
