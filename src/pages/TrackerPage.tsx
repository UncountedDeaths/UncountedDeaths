import React from 'react';
import * as Content from '../content/TrackerPageContent';
import ContentLayout from '../components/ContentLayout';
import styles from '../styles/TrackerPage.module.less';
import { Typography } from 'antd';
import CustomTitle from '../components/CustomTitle';
import WarningModal from '../components/WarningModal';
import TableauView from '../components/TableauView';

export const TrackerPage: React.FC = () => {
  return (
    <ContentLayout title="EXCESS DEATH TRACKER" text={Content.text_content} marginBottom={'3rem'}>
      <WarningModal />
      <div style={{ fontSize: '1.2rem', marginBottom: '4rem' }}>
        <Typography.Text strong>{Content.description_tableau}</Typography.Text>
      </div>
      <TableauView />
      <div className={styles.trackpagetext}>
        <div className={styles.howtotext}>
          <CustomTitle title={Content.how_to_title} />
          <Typography.Paragraph>{Content.how_to_content}</Typography.Paragraph>
        </div>
        <div className={styles.trackkeyterms}>
          <p>{Content.key_terms_title}</p>
          <Typography.Title level={4}>{Content.term_1_title}</Typography.Title>
          <Typography.Paragraph>{Content.term_1_body}</Typography.Paragraph>
          <Typography.Title level={4}>{Content.term_2_title}</Typography.Title>
          <Typography.Paragraph>{Content.term_2_body}</Typography.Paragraph>
          <Typography.Title level={4}>{Content.term_3_title}</Typography.Title>
          <Typography.Paragraph>{Content.term_3_body}</Typography.Paragraph>
          <Typography.Title level={4}>{Content.term_4_title}</Typography.Title>
          <Typography.Paragraph>{Content.term_4_body}</Typography.Paragraph>
        </div>
      </div>
    </ContentLayout>
  );
};
