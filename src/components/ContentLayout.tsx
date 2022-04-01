import { Divider, Typography } from 'antd';
import React from 'react';
import styles from '../styles/ContentLayout.module.less';

type ContentLayoutProps = {
  title: string;
};

const ContentLayout: React.FC<ContentLayoutProps> = (props) => {
  return (
    <div className={styles.contentlayoutcontainer}>
      <Divider className={styles.contentlayoutdivider} />
      <div className={styles.contentlayouttitlecontainer}>
        <Typography.Title>{props.title}</Typography.Title>
      </div>
      {props.children}
    </div>
  );
};

export default ContentLayout;