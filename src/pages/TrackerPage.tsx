import React from 'react';
import Title from 'antd/lib/typography/Title';
import TableauView from '../components/TableauView';

import ContentLayout from '../components/ContentLayout';

export const TrackerPage: React.FC = () => {
  return (
    <ContentLayout title="EXCESS DEATH TRACKER">
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>Interactive Map</Title>
      </div>
      <TableauView />
    </ContentLayout>
  );
};
