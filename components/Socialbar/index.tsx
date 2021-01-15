import Icon from '../Icon/';

export interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  return (
    <aside className='hidden fixed left-8 bottom-0 sm:flex flex-col items-center gap-4'>
      <div className='w-px bg-gray-500 h-36'></div>
      <a
        className='opacity-70 hover:opacity-100'
        href='https://github.com/bartektelec'
      >
        <Icon name='github-outline' data-eva-fill='#ffffff' />
        <span className='sr-only'>Github profile</span>
      </a>
      <a
        className='opacity-70 hover:opacity-100'
        href='https://www.linkedin.com/in/bart-telec'
      >
        <Icon name='linkedin-outline' data-eva-fill='#ffffff' />
        <span className='sr-only'>Linkedin profile</span>
      </a>

      <div className='w-px bg-gray-500 h-12'></div>
    </aside>
  );
};

export default Social;
