import { ArrowRightOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import React from 'react';
import { stokes } from '../assets/assets.index';
import ContentLayout from '../components/ContentLayout';
import { content, PubCardProps, text_content } from '../content/PublicationsPageContent';

import styles from '../styles/PublicationsPage.module.less';

const PubCard: React.FC<PubCardProps> = (props) => {
  return (
    <div className={styles.pubcardcontainer}>
      <div style={{ flex: 1.25, alignItems: 'center' }}>{props.imgElement}</div>
      <div style={{ flex: 2, justifyContent: 'space-between' }}>
        <div style={{ margin: 0 }}>
          <Typography.Title level={3}>{props.title}</Typography.Title>
          <Typography.Text className={styles.pubcarddate}>{props.date}</Typography.Text>
        </div>
        <Typography.Paragraph>{props.text}</Typography.Paragraph>
        <a href={props.link}>
          Read More <ArrowRightOutlined />
        </a>
      </div>
    </div>
  );
};

export const PublicationsPage: React.FC = () => {
  return (
    <ContentLayout title="PUBLICATIONS">
      <div className={styles.pubstarttext}>
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
