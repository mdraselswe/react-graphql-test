import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2 12h5v1H2v-1ZM2 9h5v1H2V9ZM13 7H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1ZM3 3v3h10V3H3ZM13 14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1Zm-3-4v3h3v-3h-3Z'
      fill='#000'
    />
  </svg>
);

export default SvgComponent;
