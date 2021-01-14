import { useEffect, useState } from 'react';
import Icon from '../Icon';
import style from './carousel.module.css';

export interface CarouselProps {}

const Wrapper: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <button className='focus:outline-none hidden sm:block'>
        <Icon
          name='arrow-ios-back-outline'
          data-eva-width='32'
          data-eva-height='32'
          data-eva-fill='#F7FAFC'
        />
        <span className='sr-only'>Previous project</span>
      </button>
      <div className='col-span-6 sm:col-span-8 sm:col-start-3'>{children}</div>
      <button className='focus:outline-none sm:col-start-12 hidden sm:block'>
        <Icon
          name='arrow-ios-forward-outline'
          data-eva-width='32'
          data-eva-height='32'
          data-eva-fill='#F7FAFC'
        />
        <span className='sr-only'>Next project</span>
      </button>
    </div>
  );
};

export interface ItemProps {
  title: string;
  text: string;
  eyebrow: string;
  tags: string;
  imageURL: string;
  ghURL?: string;
  liveURL?: string;
}

const Item: React.FC<ItemProps> = ({
  title,
  text,
  eyebrow,
  tags,
  imageURL,
  ghURL,
  liveURL,
}) => {
  return (
    <div className='grid grid-cols-8 relative'>
      <div
        style={{ backgroundImage: `url(${imageURL})` }}
        className='h-72 w-full bg-gray-500 bg-center bg-cover bg-top col-span-8 transform translate-y-8'
      ></div>
      <div className='shadow-md bg-gray-100 text-gray-800 p-8 col-span-8 md:col-span-6 md:col-start-2 transform -translate-y-8'>
        <p className='tracking-ultra text-xs uppercase'>{eyebrow}</p>
        <div className='flex justify-between items-center'>
          <h4 className='font-bold text-2xl inline'>{title}</h4>
          <div className='flex gap-4 ml-8'>
            {ghURL ? (
              <a href={ghURL}>
                <Icon width='24' height='24' name='github-outline' />
                <span className='sr-only'>Github Repository</span>
              </a>
            ) : null}
            {liveURL ? (
              <a href={liveURL}>
                <Icon width='24' height='24' name='external-link-outline' />
                <span className='sr-only'>Live demo</span>
              </a>
            ) : null}
          </div>
        </div>
        <p className='max-w-md mt-4'>{text}</p>
        <p className='text-xs mt-4'>{tags}</p>
      </div>
    </div>
  );
};

export default {
  Wrapper,
  Item,
};
