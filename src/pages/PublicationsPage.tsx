import { ArrowRightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import React from 'react';
import ContentLayout from '../components/ContentLayout';
import { content, ContentCardProps, text_content } from '../content/PublicationsPageContent';

import styles from '../styles/PublicationsPage.module.less';

export const ContentCard: React.FC<ContentCardProps> = (props) => {
  return (
    <div className={styles.pubcardcontainer}>
      <div
        style={
          props.imgAligned == 'flex-start'
            ? {
                flex: 1,
              }
            : { flex: 1.25, alignItems: 'center' }
        }
      >
        <img
          src={props.imgSrc}
          onError={(t) => {
            t.currentTarget.onerror = null;
            t.currentTarget.src = ''; // should be an error placeholder image
          }}
        />
      </div>
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
    <ContentLayout title="PUBLICATIONS" text={text_content}>
      <div className={styles.pubgridlayout}>
        {content.map((c) => (
          <ContentCard key={c.title} {...c} />
        ))}
      </div>
    </ContentLayout>
  );
};
