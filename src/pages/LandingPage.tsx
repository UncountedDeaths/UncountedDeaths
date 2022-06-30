import React from 'react';
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
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { InternalRoutes } from '../routes';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.landingpagecontainer}>
      <div className={styles.landingpagebanner}>
        <img className={styles.LandingPageFullWidthImagesContainer} src={landingPage1} />
        <div>
          <div className={styles.LandingPageOverlayText}>
            <div>
              <div className={styles.underlineoverlay}>
                <strong>180,000+</strong>
                <span />
              </div>
              &nbsp;deaths have gone uncounted across the US during the Covid-19 pandemic.
            </div>
            <ViewTrackerButton content="View excess death tracker" />
          </div>
        </div>
      </div>
      <div className={styles.contentbody}>
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
        <div>
          <CustomTitle title="RECENT MEDIA" />
          <div className={cardStyles.pubgridlayout}>
            {mediaContent.slice(0, 2).map((mc) => (
              <ContentCard key={mc.title} imgAligned={isMobile ? 'center' : 'flex-start'} {...mc} />
            ))}
          </div>
        </div>
        <div>
          <CustomTitle title="PUBLICATIONS" />
          <div className={cardStyles.pubgridlayout}>
            {pubContent.slice(0, 2).map((pc) => (
              <ContentCard key={pc.title} imgAligned={isMobile ? 'center' : 'flex-start'} {...pc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
