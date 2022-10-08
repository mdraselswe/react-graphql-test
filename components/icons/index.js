import React from 'react';
import { IconsMap } from './Icons';

const Icon = ({ name, width = 20, height = 20, ...otherProps }) => {
  const Icons = IconsMap[name];
  return <Icons width={width} height={height} {...otherProps} />;
};

export default Icon;
