import { useEffect, useState } from 'react';
import { replace } from 'eva-icons';

export interface IconProps {
  [key: string]: string;
}

const Icon: React.FC<IconProps> = ({ name, ...other }) => {
  useEffect(() => {
    replace();
  }, []);

  return <span data-eva={name} {...other}></span>;
};

export default Icon;
