import { Avatar, Space, Typography } from 'antd';
import React from 'react';
import ContentLayout from '../components/ContentLayout';
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
    <ContentLayout title="OUR TEAM">
      <Space style={{ marginTop: '10%' }} size={80} direction="vertical">
        {content.map((c) => (
          <MemberCard key={c.imgSrc} {...c} />
        ))}
      </Space>
    </ContentLayout>
  );
};

export default OurTeamPage;
