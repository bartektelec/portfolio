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
      const headerEls = header.querySelectorAll('a,p,h2');
      const image = header.querySelector('img');

      gsap.fromTo(
        image,
        { y: '+=50', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 1.5,
          ease: 'easeInOut',
          duration: 1,
        }
      );

      gsap.fromTo(
        headerEls,
        { y: '+=100', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.8,
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
              start: 'top 60%',
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
        <meta charSet='utf-8' />
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
