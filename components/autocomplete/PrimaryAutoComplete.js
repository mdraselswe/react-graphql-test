import { AutoComplete } from 'antd';
import React from 'react';
// const options = [
//   {
//     value: 'Burns Bay Road',
//   },
//   {
//     value: 'Downing Street',
//   },
//   {
//     value: 'Wall Street',
//   },
// ];
const options = [
  { label: 'Test 1', value: 'Test 1' },
  { label: 'Test 1', value: 'Test 1' },
  { label: 'Test 1', value: 'Test 1' },
  { label: 'Test 1', value: 'Test 1' },
];

const PrimaryAutoComplete = ({ ...otherProps }) => {
  // const [value, setValue] = React.useState('');
  // const [result, setResult] = React.useState([]);
  // const handleSearch = (value) => {
  //     let res = [];
  //     if (!value || value.indexOf('@') >= 0) {
  //         res = [];
  //     } else {
  //         res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
  //     }
  //     setResult(res);
  // };
  const onSelect = (value, option) => {
    console.log('onSelect', value, option);
  };

  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      options={options}
      //   value={value}
      onSelect={onSelect}
      placeholder='try to type `b`'
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default PrimaryAutoComplete;
