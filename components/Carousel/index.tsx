import style from './carousel.module.css';

export interface CarouselProps {}

const Wrapper: React.FC<CarouselProps> = () => {
  return <div className={style.wrapper}></div>;
};

export interface ItemProps {}

const Item: React.FC<ItemProps> = () => {
  return <div></div>;
};

export default {
  Wrapper,
  Item,
};
