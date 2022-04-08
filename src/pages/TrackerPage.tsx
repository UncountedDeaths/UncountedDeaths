import React from 'react';
import Title from 'antd/lib/typography/Title';
import TableauView from '../components/TableauView';
import * as Content from '../content/TrackerPageContent';
import ContentLayout from '../components/ContentLayout';
import Paragraph from 'antd/lib/typography/Paragraph';

import styles from '../styles/TrackerPage.module.less';

export const TrackerPage: React.FC = () => {
  return (
    <ContentLayout title="EXCESS DEATH TRACKER">
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>Interactive Map</Title>
      </div>
      <TableauView />
      <div className={styles.faqpagetext}>
        <div>
          <Title level={3} underline>
            {Content.about_title}
          </Title>
          <Title level={4}>{Content.about_1_title}</Title>
          <Paragraph>{Content.about_1_body}</Paragraph>
          <Title level={4}>{Content.about_2_title}</Title>
          <Paragraph>{Content.about_2_body}</Paragraph>
        </div>
        <div>
          <Title level={3} underline>
            {Content.key_terms_title}
          </Title>
          <Title level={4}>{Content.term_1_title}</Title>
          <Paragraph>{Content.term_2_body}</Paragraph>
          <Title level={4}>{Content.term_2_title}</Title>
          <Paragraph>{Content.term_2_body}</Paragraph>
          <Title level={4}>{Content.term_3_title}</Title>
          <Paragraph>{Content.term_3_body}</Paragraph>
        </div>
      </div>
    </ContentLayout>
  );
};
