import React from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/Footer.module.less';
import { CircleEmail, DevPost, Github } from '../assets/assets.index';


interface Props { }

export const MainFooter: React.FC<Props> = () => {

  return (
    <Row className={styles.FooterRow}>
      <Col className={styles.FooterText} sm={24} md={16} lg={14}>
        Disclaimer: The information on this website is for educational purposes only. Users’ privacy is our utmost concern. No identifiable information has been made public.
      </Col>
      <Col className={styles.FooterLogos}>
        <a href="https://forms.gle/fPnisqH8j5PgeLpH6" target="_blank" rel="noopener noreferrer">
          <CircleEmail className={styles.FooterSocialIcons} />
        </a>
        <DevPost className={styles.FooterSocialIcons} />
        <Github className={styles.FooterSocialIcons} />
      </Col>
    </Row>
  );
};
