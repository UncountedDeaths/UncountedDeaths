import React from 'react';
import { Layout } from 'antd';
import { Header } from '../components/NavHeader';
import styles from '../styles/MasterPage.module.less';
import { TrackerPage } from '../pages/TrackerPage';
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

/**
 * This component represents the main part of the website. The header, footer, and content
 * are rendered here. Plus, the react router lives here!
 */
export const Main: React.FC = () => {
  return (
    <Layout className={styles.MasterLayout}>
      <Layout.Header className={styles.MenuHeader}>
        <PersistentBanner />
        <Header />
      </Layout.Header>
      <Layout.Content className={styles.MasterContent}>
        {/* We put a router directly here so that it only has to re-load the contents
        of the page, not the entire thing! 
         */}
        <Routes>
          <Route path={InternalRoutes.HOME.path} element={<LandingPage />}></Route>
          <Route path={InternalRoutes.TRACKER.path} element={<TrackerPage />}></Route>
          <Route path={InternalRoutes.PUBLICATIONS.path} element={<PublicationsPage />}></Route>
          <Route path={InternalRoutes.TEAM.path} element={<OurTeamPage />}></Route>
          <Route path={InternalRoutes.RESOURCES.path} element={<ResourcesPage />}></Route>
          <Route path={InternalRoutes.MEDIA.path} element={<MediaPage />}></Route>
          <Route path="/" element={<Page404 />}>
            {/* <Page404 /> */}
          </Route>
        </Routes>
      </Layout.Content>
      {/* Don't render the footer on the home page */}
      <Layout.Footer className={styles.MasterFooter}>
        <img src={BULogo} className={styles.FooterLogo} />
      </Layout.Footer>
    </Layout>
  );
};
