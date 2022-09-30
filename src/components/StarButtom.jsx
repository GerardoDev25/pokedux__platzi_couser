import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import React from 'react';

export const StarButtom = ({ isFavorite, click }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;

  return <Button icon={<Icon />} onClick={click} />;
};
