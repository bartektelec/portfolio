import Icon from '../Icon';
export interface BlogPostProps {
  title: string;
  short: string;
  url: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, short, url }) => {
  return (
    <div data-animate>
      <div className='flex items-baseline text-gray-300 hover:text-gray-100'>
        <div className='px-2'>
          <Icon name='chevron-right-outline' data-eva-fill='white' />
        </div>
        <a href={url} className='flex flex-col max-w-sm'>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <p className='mt-4'>{short}</p>
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
