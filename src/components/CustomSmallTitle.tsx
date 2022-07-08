import { Divider, Typography } from 'antd';
import React from 'react';

import styles from '../styles/CustomSmallTitle.module.less';

type CustomSmallTitleProps = {
  title: string;
};

const CustomSmallTitle: React.FC<CustomSmallTitleProps> = (props) => (
  <div className={styles.titlecontainer}>
    <Divider className={styles.titledivider} />
    <Typography.Title level={4}>{props.title}</Typography.Title>
  </div>
);

export default CustomSmallTitle;
