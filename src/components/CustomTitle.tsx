import { Divider, Typography } from 'antd';
import React from 'react';

import styles from '../styles/CustomTitle.module.less';

type CustomTitleProps = {
  title: string;
};

const CustomTitle: React.FC<CustomTitleProps> = (props) => (
  <div className={styles.titlecontainer}>
    <Divider className={styles.titledivider} />
    <Typography.Title level={3}>{props.title}</Typography.Title>
  </div>
);

export default CustomTitle;
