import Container from '../Container/';

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <section id='posts'>
      <Container>
        <h2 className='font-marker text-4xl my-16'>
          <span className='accented'>Latest blog posts</span>
        </h2>
      </Container>
    </section>
  );
};

export default Blog;
