import Container from '../Container/';
import Carousel from '../Carousel/';

export interface WorksProps {}

const Works: React.FC<WorksProps> = () => {
  return (
    <section id='works' className='mb-16'>
      <Container>
        <h2 className='font-marker text-4xl my-16'>
          <span className='accented'>My works</span>
        </h2>
        <Carousel.Wrapper></Carousel.Wrapper>
      </Container>
    </section>
  );
};

export default Works;
