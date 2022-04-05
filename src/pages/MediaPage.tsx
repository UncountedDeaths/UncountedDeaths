import { Space, Typography } from 'antd';
import React from 'react';
import ContentLayout from '../components/ContentLayout';
import { content, text_content } from '../content/MediaPageContent';

import styles from '../styles/MediaPage.module.less';
import { ContentCard } from './PublicationsPage';

const MediaPage: React.FC = () => {
  return (
    <ContentLayout title="MEDIA">
      <div className={styles.mediastarttext}>
        <Typography.Text>{text_content}</Typography.Text>
      </div>
      <Space direction="vertical" size="large">
        {content.map((c) => (
          <ContentCard key={c.title} {...c} />
        ))}
      </Space>
    </ContentLayout>
  );
};

export default MediaPage;
