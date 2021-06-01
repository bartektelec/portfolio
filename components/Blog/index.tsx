import Container from '../Container/';
import BlogCard from '../BlogCard/';
import Icon from '../Icon/';

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <section id='posts' className='mb-16'>
      <Container>
        <h2 className='font-marker text-4xl my-16'>
          <span className='accented'>Latest blog posts</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <BlogCard
            title='Running TypeScript on my fridge'
            short='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, eget sed rhoncus in. Orci eget placerat sagittis ac.'
            url='#'
          />
          <BlogCard
            title='Running TypeScript on my fridge'
            short='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, eget sed rhoncus in. Orci eget placerat sagittis ac.'
            url='#'
          />
          <BlogCard
            title='Running TypeScript on my fridge'
            short='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, eget sed rhoncus in. Orci eget placerat sagittis ac.'
            url='#'
          />
        </div>
        <a
          className='flex gap-4 mt-16 opacity-75 hover:opacity-100'
          href='https://next-blog-sable.vercel.app/'
        >
          See all my posts
          <Icon name='arrow-forward-outline' data-eva-fill='#ffffff' />
        </a>
      </Container>
    </section>
  );
};

export default Blog;
