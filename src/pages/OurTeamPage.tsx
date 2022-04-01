import { Avatar, Divider, Space, Typography } from 'antd';
import React from 'react';
import { content, MemberCardProps } from '../content/OurTeamContent';
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

const OurTeamPage: React.FC = () => {
  return (
    <div className={styles.ourteampage}>
      <Divider className={styles.teampagedivider} />
      <div className={styles.myteamtitle}>
        <Typography.Title>OUR TEAM</Typography.Title>
      </div>
      <Space size={80} direction="vertical">
        {content.map((c) => (
          <MemberCard key={c.imgSrc} {...c} />
        ))}
      </Space>
    </div>
  );
};

export default OurTeamPage;
