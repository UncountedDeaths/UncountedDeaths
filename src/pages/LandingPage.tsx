import React from 'react';
import { Row, Col, Layout, Typography, Space } from 'antd';
import { landingPage1 } from '../assets/assets.index';
import styles from '../styles/LandingPage.module.less';
import * as Content from '../content/LandingPageContent';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import ViewTrackerButton from '../components/ViewTrackerButton';

export const LandingPage: React.FC = () => {
  return (
    <Layout.Content>
      <Space direction="vertical" size={150}>
        <Row>
          <Col>
            <img className={styles.LandingPageFullWidthImagesContainer} src={landingPage1} />
            <div className={styles.LandingPageOverlayText}>
              <p className={styles.OverlayTextMargin}>
                <div className={styles.UnderlineBlockWrapper}>
                  <strong>Millions</strong>
                  <div className={styles.UnderlineBlock}></div>
                </div>{' '}
                of deaths from COVID-19 are underreported.
              </p>
              <div className={styles.LabDescription}>
                Millions of deaths from COVID-19 are underreported. Millions of deaths from COVID-19
                are underreported.
              </div>
              <div className={styles.ButtonWrapper}>
                <ViewTrackerButton content="View excess death tracker"></ViewTrackerButton>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <Typography>
              <Title>{Content.what_we_do_header}</Title>
              <Paragraph className={styles.ContentText}>{Content.what_we_do_body}</Paragraph>
            </Typography>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Space>
    </Layout.Content>
  );
};
