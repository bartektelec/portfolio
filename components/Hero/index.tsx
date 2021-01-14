import Image from 'next/image';
import Container from '../Container/';
import Separator from '../Separator/';
import styles from './hero.module.css';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <header id='top' className='mt-20 w-full h-full'>
      <Container className='max-w-full relative grid grid-cols-6 sm:grid-cols-12 '>
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className={styles.confetti} />
        <div className='sm:order-2 col-span-6'>
          <img
            src='/assets/profile.png'
            className='max-h-profile'
            alt="Bartek's profile picture"
          />
        </div>
        <div className='col-span-6 sm:col-start-2 sm:col-span-5 flex flex-col justify-center items-start my-8'>
          <h2 className='text-xl'>
            Hello there!
            <br />
            <span className='text-6xl font-bold accented mt-4'>I’m Bart</span>
          </h2>
          <p className='my-8 hero-paragraph text-gray-300'>
            I’m a <b>frontend developer</b> based in Oslo, that means I write
            code to align boxes on the screen and make them interactive.
          </p>
          <div className='flex flex-wrap justify-between w-full sm:justify-start gap-4'>
            <button className='border-gray-100 bg-gray-800 border py-3 px-4 rounded'>
              See my works
            </button>
            <button className='bg-yellow-600 py-3 px-4 rounded'>
              Contact me
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
