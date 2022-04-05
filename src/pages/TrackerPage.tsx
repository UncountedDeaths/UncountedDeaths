import React from 'react';
import { Row, Layout, Typography, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import TableauView from '../components/TableauView';

import styles from '../styles/TrackerPage.module.less';
import ContentLayout from '../components/ContentLayout';

export const TrackerPage: React.FC = () => {
  return (
    <ContentLayout title="EXCESS DEATH TRACKER">
      <Title level={2}>Interactive Map</Title>
      <TableauView />
    </ContentLayout>
  );
};
