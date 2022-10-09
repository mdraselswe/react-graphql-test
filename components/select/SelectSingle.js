import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const SelectSingle = ({
  label = '',
  childLabel = '',
  options = [],
  handleSelectedItem,
  ...otherProps
}) => {
  return (
    <div className='input_root'>
      <label htmlFor={label} className='label'>
        {label}
      </label>
      <label htmlFor={label} className='child_label'>
        {childLabel}
      </label>
      <Select
        showSearch
        style={{
          width: '100%',
        }}
        placeholder='Search to Select'
        optionFilterProp='children'
        filterOption={(input, option) => option.children.includes(input)}
        onChange={handleSelectedItem}
        {...otherProps}
      >
        {options.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectSingle;
