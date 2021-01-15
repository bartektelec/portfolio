import Container from '../Container/';
import styles from './hero.module.css';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <header className='mt-20 w-full h-full'>
      <Container className='max-w-full relative grid grid-cols-6 sm:grid-cols-12 '>
        {[...Array(9)].map((_, index) => (
          <div
            data-confetti
            key={`confetti-${index}`}
            className={styles.confetti}
          />
        ))}
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
            <a
              href='#works'
              className='border-gray-100 bg-gray-800 hover:bg-gray-600 transition-colors border py-3 px-4 rounded'
            >
              See my works
            </a>
            <a
              href='#contact'
              className='bg-yellow-600 hover:bg-yellow-500 transition-colors py-3 px-4 rounded'
            >
              Contact me
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
