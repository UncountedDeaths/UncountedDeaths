import React from 'react';
import ContentLayout from '../components/ContentLayout';
import {
  about_page_head,
  about_page_subhead,
  about_page_support,
} from '../content/AboutPageContent';
import CustomTitle from '../components/CustomTitle';
import IframeResizer from 'iframe-resizer-react';
import { Typography } from 'antd';
import styles from '../styles/AboutPage.module.less';
const AboutPage: React.FC = () => {
  return (
    <ContentLayout title="ABOUT">
      <div className={styles.Content}>
        <Typography.Text>{about_page_head}</Typography.Text>
      </div>

      <br></br>
      <br></br>
      <CustomTitle title="Impacts" />
      <div className={styles.Content}>
        {about_page_subhead}
        <br></br>
        <br></br>
        <ol>
          <li>
            Increase vaccination rates and other protective behaviors across the U.S. by raising
            awareness about the true mortality risk in communities,
          </li>
          <li>
            Raise public awareness about the under-counting of Covid-19 deaths and the need for
            reforms to the U.S. death investigation system such as eliminating coroners,
          </li>
          <li>
            Increase the number of families who receive FEMA funeral assistance benefits by
            advocating for expanded eligibility to include uncounted Covid-19 deaths,
          </li>
          <li>
            Make our data available for researchers to conduct further research on the social,
            demographic, and structural factors associated with excess mortality.
          </li>
        </ol>
      </div>
      <br></br>
      <CustomTitle title="Who We Are" />
      <div className={styles.Content}>
        {about_page_support} <br></br>
        <br></br>
        <a href="/team">Learn more</a> about us.
      </div>
      <div id="contact">
        <br></br>
        <br></br>
        <CustomTitle title="Contact Us" />
      </div>
      <IframeResizer
        log
        src="https://form.jotform.com/221793942892166"
        style={{
          width: '1px',
          minWidth: '100%',
          border: 'none',
          minHeight: '100%',
          height: '50em',
        }}
      />
      <div>
        <CustomTitle title="Stay up to Date on the Project" />
      </div>
    </ContentLayout>
  );
};

export default AboutPage;
