import Image from 'next/image';
import Container from '../Container/';
import styles from './hero.module.css';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <header className='mt-20 h-screen mx-auto inline-flex'>
      <Container className='sm:max-h-screen'>
        <div className='picture col-span-6'>
          <img
            src='/assets/profile.png'
            alt="Bartek's profile picture"
            className='max-h-full max-w-full'
          />
        </div>
        <div className='flex flex-col justify-center items-start col-span-6 my-4'>
          <h2 className='text-xl'>
            Hello there!
            <br />
            <span className='text-6xl font-bold accented mt-4'>I’m Bart</span>
          </h2>
          <p className='my-8 text text-gray-300'>
            I’m a <b>frontend developer</b> based in Oslo, that means I write
            code to align boxes on the screen and make them interactive.
          </p>
          <div className='flex justify-between w-full'>
            <button className='border-gray-100 border py-3 px-4 rounded'>
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
