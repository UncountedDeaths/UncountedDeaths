import React from 'react';
import { Row, Col, Layout, Typography, Space } from 'antd';
import styles from '../styles/TrackerPage.module.less';
import * as Content from '../content/TrackerPageContent';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';

export const TrackerPage: React.FC = () => {
  return (
    <Layout.Content>
      <Row>
        <p>A chart will go here</p>
      </Row>
      <Space direction="vertical" size={75}>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <Typography>
              <Title level={5}>{Content.about_title}</Title>
              <Title>{Content.about_1_title}</Title>
              <Paragraph>{Content.about_1_body}</Paragraph>
              <Title>{Content.about_2_title}</Title>
              <Paragraph>{Content.about_2_body}</Paragraph>
            </Typography>
          </Col>
          <Col span={6}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <Typography>
              <Title level={5}>{Content.key_terms_title}</Title>
              <Title>{Content.term_1_title}</Title>
              <Paragraph>{Content.term_2_body}</Paragraph>
              <Title>{Content.term_2_title}</Title>
              <Paragraph>{Content.term_2_body}</Paragraph>
              <Title>{Content.term_3_title}</Title>
              <Paragraph>{Content.term_3_body}</Paragraph>
            </Typography>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Space>
    </Layout.Content>
  );
};
