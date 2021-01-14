import styles from './container.module.css';
import cn from 'classnames';

export interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = props => {
  return (
    <div className={cn(styles.container, props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
