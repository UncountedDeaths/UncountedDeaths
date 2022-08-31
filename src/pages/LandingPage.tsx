import React from 'react';
import styles from '../styles/LandingPage.module.less';
import cardStyles from '../styles/PublicationsPage.module.less';
import * as Content from '../content/LandingPageContent';
import Paragraph from 'antd/lib/typography/Paragraph';
import CustomTitle from '../components/CustomTitle';
import { content as mediaContent } from '../content/MediaPageContent';
import { ContentCard } from './PublicationsPage';
import { content as pubContent } from '../content/PublicationsPageContent';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import * as TrackerPageContent from '../content/TrackerPageContent';
import { Typography } from 'antd';
import NavigationButton from '../components/NavigationButton';
import { InternalRoutes } from '../routes';
import ContentLayout from '../components/ContentLayout';
import Dashboard from '../components/Dashboard';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ContentLayout title={Content.title_text} center={true}>
      <Paragraph className={styles.ContentText}>{Content.title_body_text}</Paragraph>
      <IframeResizer
        src="https://mu0brt-zhenwei-zhou.shinyapps.io/covid_ex_app"
        style={{ width: '1px', minWidth: '100%', border: 'none' }}
      />
      <div className={styles.cardSection}>
        <CustomTitle title={TrackerPageContent.key_terms_title} />
        <div className={styles.trackkeyterms}>
          <Typography.Title level={5}>{TrackerPageContent.term_1_title}</Typography.Title>
          <Typography.Paragraph>{TrackerPageContent.term_1_body}</Typography.Paragraph>
          <Typography.Title level={5}>{TrackerPageContent.term_2_title}</Typography.Title>
          <Typography.Paragraph>{TrackerPageContent.term_2_body}</Typography.Paragraph>
          <Typography.Title level={5}>{TrackerPageContent.term_3_title}</Typography.Title>
          <Typography.Paragraph>{TrackerPageContent.term_3_body}</Typography.Paragraph>
          <Typography.Title level={5}>{TrackerPageContent.term_4_title}</Typography.Title>
          <Typography.Paragraph>{TrackerPageContent.term_4_body}</Typography.Paragraph>
        </div>
        <div>
          <CustomTitle title={Content.what_we_do_header.toUpperCase()} />
          <Paragraph className={styles.ContentText}>
            {Content.what_we_do_body}
            <br></br>
            <br></br>
            <a onClick={() => navigate(InternalRoutes.ABOUT.path)}>Learn more</a> about the project.
          </Paragraph>
        </div>
        <div>
          <CustomTitle title={Content.who_we_are_header.toUpperCase()} />
          <Paragraph className={styles.ContentText}>
            {Content.who_we_are_body}
            <br></br>
            <br></br>
            <a onClick={() => navigate(InternalRoutes.TEAM.path)}>Learn more</a> about us.
          </Paragraph>
        </div>
        <div className={styles.cardSection}>
          <CustomTitle title="RECENT MEDIA" />
          <div className={cardStyles.pubgridlayout}>
            {mediaContent.slice(0, 2).map((mc) => (
              <ContentCard key={mc.title} imgAligned={isMobile ? 'center' : 'flex-start'} {...mc} />
            ))}
          </div>
          <NavigationButton
            content={Content.view_more_media}
            navigationPath={InternalRoutes.MEDIA.path}
          />
        </div>
        <div className={styles.cardSection}>
          <CustomTitle title="PUBLICATIONS" />
          <div className={cardStyles.pubgridlayout}>
            {pubContent.slice(0, 2).map((pc) => (
              <ContentCard key={pc.title} imgAligned={isMobile ? 'center' : 'flex-start'} {...pc} />
            ))}
          </div>
          <NavigationButton
            content={Content.view_more_publications}
            navigationPath={InternalRoutes.PUBLICATIONS.path}
          />
        </div>
      </div>
    </ContentLayout>
  );
};
