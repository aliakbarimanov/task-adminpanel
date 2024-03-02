import React from 'react';

import { DownOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space } from 'antd';

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'Update',
    key: '1',
    icon: <EditOutlined />,
  },
  {
    label: 'Delete',
    key: '2',
    icon: <DeleteOutlined />,
    danger: true,
  }
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Actions: React.FC = () => (
  <Space wrap>

    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Actions
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    
  </Space>
);

export default Actions;