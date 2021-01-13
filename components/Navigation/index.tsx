import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { debounce } from '../../utils/debounce';

import styles from './navigation.module.css';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const prevScrollPos = useRef(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    console.log(currentScrollPos + ' ' + prevScrollPos.current);
    setVisible(prevScrollPos.current > currentScrollPos);
    prevScrollPos.current = currentScrollPos;
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navigation} style={{ top: visible ? '0' : '-60px' }}>
      <div className='flex justify-between items-center max-w-screen-2xl mx-auto'>
        <a href='#top'>
          <Image
            src='/assets/logo.png'
            alt='Bartek Telec logo'
            width='24'
            height='24'
          />
          <span className='sr-only'>Bartek Telec logo</span>
        </a>
        <ul className='list-none flex gap-6 text-sm text-gray-500'>
          <li>
            <a className='text-gray-100' href='#'>
              About
            </a>
          </li>
          <li>
            <a href='#'>Works</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
