import { Tabs } from 'antd';
import React from 'react';
import styles from './PrimaryTab.module.scss';

const PrimaryTab = ({
  items = [],
  mode = 'left',
  defaultActiveKey = 1,
  minWidth = 200,
  ...otherProps
}) => {
  return (
    <div className={styles.tab_container}>
      <Tabs
        tabPosition={mode}
        defaultActiveKey={defaultActiveKey}
        items={items}
        tabBarStyle={{
          minWidth,
          borderRight: '1px solid rgba(104, 112, 116, 0.31)',
        }}
        onChange={(e) => console.log('onchange', e)}
        onTabClick={(e) => console.log('ontabclick', e)}
        {...otherProps}
      />
    </div>
  );
};

export default PrimaryTab;
