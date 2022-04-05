import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import ContentLayout from '../components/ContentLayout';
import FAQ from '../components/FAQ';
import { FAQ_data } from '../content/FAQContent';
import * as Content from '../content/TrackerPageContent';

import styles from '../styles/FAQPage.module.less';

const FAQPage: React.FC = () => {
  return (
    <ContentLayout title="FREQUENTLY ASKED QUESTION">
      <div className={styles.faqpagetext}>
        <div>
          <Title level={3} underline>
            {Content.about_title}
          </Title>
          <Title level={4}>{Content.about_1_title}</Title>
          <Paragraph>{Content.about_1_body}</Paragraph>
          <Title level={4}>{Content.about_2_title}</Title>
          <Paragraph>{Content.about_2_body}</Paragraph>
        </div>
        <div>
          <Title level={3} underline>
            {Content.key_terms_title}
          </Title>
          <Title level={4}>{Content.term_1_title}</Title>
          <Paragraph>{Content.term_2_body}</Paragraph>
          <Title level={4}>{Content.term_2_title}</Title>
          <Paragraph>{Content.term_2_body}</Paragraph>
          <Title level={4}>{Content.term_3_title}</Title>
          <Paragraph>{Content.term_3_body}</Paragraph>
        </div>
      </div>
      <FAQ data={FAQ_data} />
    </ContentLayout>
  );
};

export default FAQPage;
