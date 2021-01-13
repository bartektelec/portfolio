import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

interface MyAppProps {
  Component: React.FC<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
