import Container from '../Container/';
import SkillCard from '../SkillCard/';
import styles from './about.module.css';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className='min-h-screen mb-16'>
      <Container>
        <h2 className='font-marker text-4xl my-16'>
          <span className='accented'>About me</span>
        </h2>
        <div className='mx-auto flex flex-col gap-8 text-center md:w-1/2'>
          <h1 className='text-4xl'>
            Hello, I'm Bartlomiej, a <strong>frontend developer</strong> based
            in Oslo, Norway.
          </h1>
          <p>
            I enjoy creating interactive, <strong>good-looking</strong> things
            such as websites and applications.
          </p>
          <p>
            I am a current student at <strong>Noroff Vocational</strong> in
            Oslo, as well as I’m always learning new stuff in my spare time.
          </p>
        </div>
        <h3 className='text-3xl font-bold text-gray-400 text-center my-12'>
          Skills
        </h3>
        <div className='grid grid-cols-4 gap-12 sm:grid-cols-12'>
          <SkillCard
            icon='code-outline'
            title='Web development'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem varius nisl at tempor, enim ullamcorper enim pharetra, mauris. '
            tags='React, Vue.js, Next.js, JavaScript, TypeScript, GSAP'
          />
          <SkillCard
            icon='brush-outline'
            title='UI Design'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem varius nisl at tempor, enim ullamcorper enim pharetra, mauris. '
            tags='Figma, Adobe XD, Photoshop'
          />
          <SkillCard
            icon='smartphone-outline'
            title='Other'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem varius nisl at tempor, enim ullamcorper enim pharetra, mauris. '
            tags='PWA, React Native, RWD, Node.js, Express, MongoDB'
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
