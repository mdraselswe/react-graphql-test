import { Select } from 'antd';
import React from 'react';

const SelectItems = ({
  selectedItems,
  setSelectedItems,
  options = [],
  placeholder = 'Select items',
}) => {
  const filteredOptions = options.filter(
    ({ value }) => !selectedItems.includes(value)
  );

  console.log('selectedItems', selectedItems, setSelectedItems, options);

  return (
    <Select
      mode='multiple'
      placeholder={placeholder}
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
    >
      {filteredOptions.map((item) => (
        <Select.Option key={item.value} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectItems;
