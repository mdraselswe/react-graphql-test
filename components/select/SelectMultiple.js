import { Select } from 'antd';
import React from 'react';

const SelectMultiple = ({
  label = '',
  childLabel = '',
  selectedItems,
  setSelectedItems,
  options = [],
  placeholder = 'Select items',
  ...otherProps
}) => {
  const filteredOptions = options.filter(
    ({ value }) => !selectedItems.includes(value)
  );

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
        mode='multiple'
        placeholder={placeholder}
        value={selectedItems}
        onChange={setSelectedItems}
        style={{
          width: '100%',
        }}
        {...otherProps}
      >
        {filteredOptions.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectMultiple;
