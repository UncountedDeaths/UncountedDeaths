import { Space, Typography } from 'antd';
import React from 'react';
import { stokes } from '../assets/assets.index';
import ContentLayout from '../components/ContentLayout';
import { content, text_content } from '../content/MediasPageContent';

import styles from '../styles/MediasPage.module.less';
import { PubCard } from './PublicationsPage';

const MediasPage: React.FC = () => {
  return (
    <ContentLayout title="MEDIAS">
      <div className={styles.mediastarttext}>
        <Typography.Text>{text_content}</Typography.Text>
      </div>
      <Space direction="vertical" size="large">
        {content.map((c) => (
          <PubCard key={c.title} {...c} imgElement={<img src={stokes} />} />
        ))}
      </Space>
    </ContentLayout>
  );
};

export default MediasPage;
