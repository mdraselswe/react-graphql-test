import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    {...props}
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7Zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6Z'
      fill='#000'
    />
    <path
      d='M10.7 11.5 8 8.8l-2.7 2.7-.8-.8L7.2 8 4.5 5.3l.8-.8L8 7.2l2.7-2.7.8.8L8.8 8l2.7 2.7-.8.8Z'
      fill='#000'
    />
  </svg>
);

export default SvgComponent;
