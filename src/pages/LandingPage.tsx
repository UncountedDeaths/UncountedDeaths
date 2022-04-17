import React from 'react';
import { Layout } from 'antd';
import { landingPage1 } from '../assets/assets.index';
import styles from '../styles/LandingPage.module.less';
import cardStyles from '../styles/PublicationsPage.module.less';
import * as Content from '../content/LandingPageContent';
import Paragraph from 'antd/lib/typography/Paragraph';
import ViewTrackerButton from '../components/ViewTrackerButton';
import CustomTitle from '../components/CustomTitle';
import { content as mediaContent } from '../content/MediaPageContent';
import { ContentCard } from './PublicationsPage';
import { content as pubContent } from '../content/PublicationsPageContent';

export const LandingPage: React.FC = () => {
  return (
    <Layout.Content>
      <div className={styles.landingpagecontainer}>
        <div className={styles.landingpagebanner}>
          <img className={styles.LandingPageFullWidthImagesContainer} src={landingPage1} />
          <div>
            <div className={styles.LandingPageOverlayText}>
              <div className={styles.UnderlineBlockWrapper}>
                <strong>Millions </strong>
                <div className={styles.UnderlineBlock} /> of deaths from COVID-19 are underreported.
              </div>
              <div className={styles.LabDescription}>
                <span>Millions of deaths from COVID-19 are</span>
              </div>
              <div className={styles.LabDescription}>
                <span>underreported. Millions of deaths from COVID-19.</span>
              </div>
              <ViewTrackerButton content="View excess death tracker" />
            </div>
          </div>
        </div>
        <div className={styles.contentbody}>
          <div>
            <CustomTitle title={Content.what_we_do_header.toUpperCase()} />
            <Paragraph className={styles.ContentText}>{Content.what_we_do_body}</Paragraph>
          </div>
          <div>
            <CustomTitle title="RECENT MEDIA" />
            <div className={cardStyles.pubgridlayout}>
              {mediaContent.slice(0, 2).map((mc) => (
                <ContentCard key={mc.title} imgAligned="flex-start" {...mc} />
              ))}
            </div>
          </div>
          <div>
            <CustomTitle title="PUBLICATIONS" />
            <div className={cardStyles.pubgridlayout}>
              {pubContent.slice(0, 2).map((pc) => (
                <ContentCard key={pc.title} imgAligned="flex-start" {...pc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout.Content>
  );
};
