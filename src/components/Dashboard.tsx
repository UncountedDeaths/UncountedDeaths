import React from 'react';
import { Tabs, TabPaneProps } from 'antd';
import CountyDashboard from './countyDashboard';
import NationalDashboard from './nationalDashboard';
import styles from '../styles/dashboard.module.less';
type Key = {
  key: string;
};

const tabs: (TabPaneProps & Key)[] = [
  {
    key: '1',
    tab: <p className={styles.titletabpane}>State dashboard</p>,
    children: <NationalDashboard />,
  },
  {
    key: '2',
    tab: <p className={styles.titletabpane}>County Dashboard</p>,
    children: <CountyDashboard />,
  },
];

const Dashboard: React.FC = () => {
  return (
    <Tabs className={styles.dashboardTabs} defaultActiveKey="1">
      {tabs.map((t) => (
        <Tabs.TabPane {...t} key={t.key} />
      ))}
    </Tabs>
  );
};

export default Dashboard;
