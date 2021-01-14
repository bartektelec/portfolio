export interface SkillCardProps {
  title: string;
  icon: string;
  tags: string;
  text: string;
}

const SkillCard: React.SFC<SkillCardProps> = ({ title, icon, tags, text }) => {
  return <div>{title}</div>;
};

export default SkillCard;
