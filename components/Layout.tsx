import React, { ReactNode, useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Separator from './Separator/';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Works from './Works';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Socialbar from './Socialbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = () => {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scene.current) {
      const header = scene.current.querySelector('header')!;
      const confetti = header.querySelectorAll('[data-confetti]');
      const headerEls = header.querySelectorAll('a,p,h2');
      const image = header.querySelector('img');

      gsap.fromTo(
        confetti,
        { opacity: 0 },
        { opacity: 1, ease: 'easeInOut', duration: 0.5, stagger: 0.2 }
      );

      gsap.fromTo(
        image,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'easeInOut',
          duration: 1.5,
        }
      );

      gsap.fromTo(
        headerEls,
        { y: '+=100', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'easeInOut',
          stagger: 0.2,
          duration: 0.8,
        }
      );
      const navLinks = scene.current.querySelectorAll('nav ul li')!;

      gsap.fromTo(
        navLinks,
        { y: '-=20', opacity: 0 },
        { y: 0, opacity: 1, ease: 'easeInOut', stagger: 0.2, duration: 0.2 }
      );

      const sections = scene.current.querySelectorAll('section')!;

      sections.forEach(section => {
        gsap.fromTo(
          section.querySelectorAll('[data-animate]')!,
          { y: '+=100', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'easeInOut',
            stagger: 0.2,
            duration: 0.6,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Bartek Telec - portfolio</title>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-HX4G9E1V2Q'
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          };
          gtag('js', new Date());

          gtag('config', 'G-HX4G9E1V2Q');`,
          }}
        />
        <meta charSet='utf-8' />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:title'
          content='Bartek Telec - Portfolio'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:url'
          content='https://btelec.no'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:description'
          content='I’m a frontend developer based in Oslo, that means I write code to align boxes on the screen and make them interactive.'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:type'
          content='website'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:image'
          content='https://btelec.no/assets/portfolio.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='assets/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='assets/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='assets/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='assets/favicon/site.webmanifest' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='app' ref={scene} id='top'>
        <Navigation />
        <Socialbar />
        <Hero />
        <Separator />
        <About />
        <Separator />
        <Works />
        <Separator />
        <Blog />
        <Separator />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default Layout;
