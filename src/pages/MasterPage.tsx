import React from 'react';
import { Layout } from 'antd';
import { Header } from '../components/NavHeader';
import styles from '../styles/MasterPage.module.less';
import { LandingPage } from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import { Page404 } from './404Page';
import { PublicationsPage } from './PublicationsPage';
import OurTeamPage from './OurTeamPage';
import ResourcesPage from './ResourcesPage';
import { InternalRoutes } from '../routes';
import MediaPage from './MediaPage';
import { PersistentBanner } from '../components/PersistentBanner';
import { BULogo } from '../assets/assets.index';
import AboutPage from './AboutPage';
import { Link } from 'react-router-dom';
import { useScreenWidth } from '../utils';
import { sponsors } from '../content/LandingPageContent';

/**
 * This component represents the main part of the website. The header, footer, and content
 * are rendered here. Plus, the react router lives here!
 */
export const Main: React.FC = () => {
  const { isMobile } = useScreenWidth();

  const sponsorsText = sponsors.map((sponsor) => {
    return <div key={sponsor}>{sponsor}</div>;
  });

  return (
    <Layout className={styles.MasterLayout}>
      <Layout.Header className={styles.MenuHeader}>
        {isMobile ? <Header /> : <PersistentBanner />}
        {isMobile ? <PersistentBanner /> : <Header />}
      </Layout.Header>
      <Layout.Content className={styles.MasterContent}>
        {/* We put a router directly here so that it only has to re-load the contents
        of the page, not the entire thing! 
         */}
        <Routes>
          <Route path={InternalRoutes.HOME.path} element={<LandingPage />} />
          <Route path={InternalRoutes.PUBLICATIONS.path} element={<PublicationsPage />} />
          <Route path={InternalRoutes.TEAM.path} element={<OurTeamPage />} />
          <Route path={InternalRoutes.RESOURCES.path} element={<ResourcesPage />} />
          <Route path={InternalRoutes.MEDIA.path} element={<MediaPage />} />
          <Route path={InternalRoutes.ABOUT.path} element={<AboutPage />} />
          <Route path="/" element={<Page404 />} />
        </Routes>
      </Layout.Content>
      {/* Don't render the footer on the home page */}
      <Layout.Footer className={styles.MasterFooter}>
        <BULogo href="https://www.bu.edu/ceid/" target="_blank" className={styles.FooterLogo} />

        <div className={styles.FooterContainer}>
          <div className={styles.SponsorsTextContainer}>
            <div>Our Sponsors</div>
            {sponsorsText}
          </div>

          <div className={styles.FooterLinksContainer}>
            <Link
              className={styles.FooterLink}
              to={{ pathname: InternalRoutes.ABOUT.path, hash: '#contact' }}
            >
              Contact Us
            </Link>
            <a className={styles.FooterLink} href="https://twitter.com/vitalstatslab">
              Follow Us on Twitter
            </a>
          </div>
        </div>
      </Layout.Footer>
    </Layout>
  );
};
