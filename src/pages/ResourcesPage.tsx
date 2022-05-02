import { Typography } from 'antd';
import Tabs, { TabPaneProps } from 'antd/lib/tabs';
import React from 'react';
import ContentLayout from '../components/ContentLayout';
import FAQ from '../components/FAQ';
import {
  FAQ_Death_Cert_Data,
  FAQ_FEMA_FAQ_Data,
  FAQ_FEMA_SubHeader_Text,
  FAQ_Medicolegal_Data,
  text_content,
} from '../content/FAQContent';
import styles from '../styles/ResourcesPage.module.less';

type Key = {
  key: string;
};

const tabs: (TabPaneProps & Key)[] = [
  {
    key: '1',
    tab: <p className={styles.titletabpane}>Death Certificates</p>,
    children: (
      <>
        <FAQ data={FAQ_Death_Cert_Data} />
      </>
    ),
  },
  {
    key: '2',
    tab: <p className={styles.titletabpane}>Death Investigation System</p>,
    children: (
      <>
        <FAQ data={FAQ_Medicolegal_Data} />
      </>
    ),
  },
  {
    key: '3',
    tab: <p className={styles.titletabpane}>FEMA: Funeral Assistance</p>,
    children: (
      <>
        <div style={{ padding: '0.5rem' }} />
        <Typography.Text style={{ alignContent: 'center' }}>
          {FAQ_FEMA_SubHeader_Text}
        </Typography.Text>
        <div style={{ padding: '2rem' }} />
        <FAQ data={FAQ_FEMA_FAQ_Data} />
      </>
    ),
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <ContentLayout title="FREQUENTLY ASKED QUESTIONS" text={text_content}>
      <div>
        {/* <CustomTitle title="FREQUENTLY ASKED QUESTIONS" /> */}
        {/* <FAQ data={FAQ_data} /> */}
        <Tabs className={styles.resourcestabs} defaultActiveKey="1">
          {tabs.map((t) => (
            <Tabs.TabPane {...t} key={t.key} />
          ))}
        </Tabs>
      </div>
    </ContentLayout>
  );
};

export default ResourcesPage;
