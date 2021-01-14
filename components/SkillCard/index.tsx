import Icon from '../Icon/';

export interface SkillCardProps {
  title: string;
  icon: string;
  tags: string;
  text: string;
}

const SkillCard: React.SFC<SkillCardProps> = ({ title, icon, tags, text }) => {
  return (
    <div className='col-span-4'>
      <div className='rounded-full bg-gray-300 h-6 w-6 flex justify-center items-center'>
        <Icon
          name={icon}
          data-eva-fill='#2D3748'
          data-eva-width='16'
          data-eva-height='16'
        />
      </div>
      <h4 className='font-bold my-4'>{title}</h4>
      <p className='text-sm'>{text}</p>
      <p className='mt-4 font-bold text-xs text-gray-300'>{tags}</p>
    </div>
  );
};

export default SkillCard;
