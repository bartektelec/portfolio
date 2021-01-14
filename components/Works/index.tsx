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
        <Carousel.Wrapper>
          <Carousel.Item
            title='Shuuz'
            text='Shoe e-commerce website, designed and coded by myself'
            tags='Vue3, TypeScript, Vuex, Tailwind CSS, JWT, Strapi'
            eyebrow='E-commerce store'
            imageURL='./assets/shuuz.png'
            ghURL='https://github.com/bartektelec/shuuz-client'
            liveURL='https://bartektelec.github.io/shuuz-client/'
          />
          <Carousel.Item
            title='Foodie'
            text='Food ordering / restaurant searching app.'
            tags='Vanilla JS ES6, Bootstrap, Strapi'
            eyebrow='food ordering website'
            imageURL='./assets/foodie.png'
            ghURL='https://github.com/bartektelec/foodie-app'
            liveURL='https://bartektelec.github.io/foodie-app/'
          />
        </Carousel.Wrapper>
      </Container>
    </section>
  );
};

export default Works;
