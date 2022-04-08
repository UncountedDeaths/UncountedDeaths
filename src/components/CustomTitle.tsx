import { Divider, Typography } from 'antd';
import React from 'react';

type CustomTitleProps = {
  title: string;
};

const CustomTitle: React.FC<CustomTitleProps> = (props) => (
  <div>
    <Divider />
    <Typography.Title>{props.title}</Typography.Title>
  </div>
);

export default CustomTitle;
