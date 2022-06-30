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
import IframeResizer from 'iframe-resizer-react';
import * as TrackerPageContent from '../content/TrackerPageContent';
import { Typography } from 'antd';
import NavigationButton from '../components/NavigationButton';
import { InternalRoutes } from '../routes';

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingpagecontainer}>
      <div className={styles.landingpagebanner}>
        <div className={styles.LandingPageFullWidthImagesContainer} />
        <div>
          <div className={styles.LandingPageOverlayText}>
            <div>
              <div className={styles.underlineoverlay}>
                <strong>180,000+</strong>
                <span />
              </div>
              &nbsp;deaths have gone uncounted across the US during the Covid-19 pandemic.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentbody}>
        <div>
          <Typography.Text strong>{TrackerPageContent.description_tableau}</Typography.Text>
        </div>
        <IframeResizer
          log
          src="https://mu0brt-zhenwei-zhou.shinyapps.io/covid_ex_app"
          className={styles.appIFrame}
        />
        <div>
          <CustomTitle title={Content.what_we_do_header.toUpperCase()} />
          <Paragraph className={styles.ContentText}>{Content.what_we_do_body}</Paragraph>
        </div>
        <div className={styles.trackpagetext}>
          <div className={styles.howtotext}>
            <CustomTitle title={TrackerPageContent.how_to_title} />
            <Typography.Paragraph>{TrackerPageContent.how_to_content}</Typography.Paragraph>
          </div>
          <div className={styles.trackkeyterms}>
            <p>{TrackerPageContent.key_terms_title}</p>
            <Typography.Title level={4}>{TrackerPageContent.term_1_title}</Typography.Title>
            <Typography.Paragraph>{TrackerPageContent.term_1_body}</Typography.Paragraph>
            <Typography.Title level={4}>{TrackerPageContent.term_2_title}</Typography.Title>
            <Typography.Paragraph>{TrackerPageContent.term_2_body}</Typography.Paragraph>
            <Typography.Title level={4}>{TrackerPageContent.term_3_title}</Typography.Title>
            <Typography.Paragraph>{TrackerPageContent.term_3_body}</Typography.Paragraph>
            <Typography.Title level={4}>{TrackerPageContent.term_4_title}</Typography.Title>
            <Typography.Paragraph>{TrackerPageContent.term_4_body}</Typography.Paragraph>
          </div>
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
    </div>
  );
};
