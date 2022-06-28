import { Avatar, TabPaneProps, Tabs, Typography } from 'antd';
import React from 'react';
import ContentLayout from '../components/ContentLayout';
import {
  content,
  collaboratorContent,
  mediaContent,
  MemberCardProps,
  text_content,
  designContent,
} from '../content/OurTeamContent';
import styles from '../styles/OurTeamPage.module.less';

const MemberCard: React.FC<MemberCardProps> = (props) => {
  return (
    <div className={styles.ourteampage_member}>
      <Avatar className={styles.ourteampage_avatar} size={150} src={props.imgSrc} />
      <div className={styles.ourteampage_text}>
        <Typography.Title level={3}>{props.title}</Typography.Title>
        <Typography.Text>{props.subtitle}</Typography.Text>
      </div>
    </div>
  );
};

type Key = {
  key: string;
};

const tabs: (TabPaneProps & Key)[] = [
  {
    key: '1',
    tab: <p className={styles.titletabpane}>Research Staff</p>,
    children: (
      <div className={styles.teamcardsgrid}>
        {content.map((m) => (
          <MemberCard key={m.title} title={m.title} subtitle={m.subtitle} imgSrc={m.imgSrc} />
        ))}
      </div>
    ),
  },
  {
    key: '2',
    tab: <p className={styles.titletabpane}>Collaborators</p>,
    children: (
      <div className={styles.teamcardsgrid}>
        {collaboratorContent.map((m) => (
          <MemberCard key={m.title} title={m.title} subtitle={m.subtitle} imgSrc={m.imgSrc} />
        ))}
      </div>
    ),
  },
  {
    key: '3',
    tab: <p className={styles.titletabpane}>Media Partners</p>,
    children: (
      <div className={styles.teamcardsgrid}>
        {mediaContent.map((m) => (
          <MemberCard key={m.title} title={m.title} subtitle={m.subtitle} imgSrc={m.imgSrc} />
        ))}
      </div>
    ),
  },
  {
    key: '4',
    tab: <p className={styles.titletabpane}>Design / Engineering</p>,
    children: (
      <div className={styles.teamcardsgrid}>
        {designContent.map((m) => (
          <MemberCard key={m.title} title={m.title} subtitle={m.subtitle} imgSrc={m.imgSrc} />
        ))}
      </div>
    ),
  },
];

const OurTeamPage: React.FC = () => {
  return (
    <ContentLayout title="OUR TEAM" text={text_content}>
      <Tabs className={styles.ourteamtabs} defaultActiveKey="1">
        {tabs.map((t) => (
          <Tabs.TabPane {...t} key={t.key} />
        ))}
      </Tabs>
    </ContentLayout>
  );
};

export default OurTeamPage;
