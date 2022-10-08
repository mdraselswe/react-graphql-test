import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    {...props}
    width={18}
    height={18}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3ZM9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9Z'
      fill='#086EA7'
    />
    <path
      d='M6.73 12H2.67A2.68 2.68 0 0 1 0 9.33V2.67A2.68 2.68 0 0 1 2.67 0h6.66A2.68 2.68 0 0 1 12 2.67V6.4h-2V2.67A.67.67 0 0 0 9.33 2H2.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06v2Z'
      fill='#086EA7'
    />
  </svg>
);

export default SvgComponent;
