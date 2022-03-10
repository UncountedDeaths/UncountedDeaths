import React from 'react';
import { Layout } from 'antd';
import { Header } from '../components/NavHeader';
import styles from '../styles/MasterPage.module.less';
import { HomePage } from './HomePage';
import {LandingPage} from './LandingPage';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Page404 } from './404Page';
import { SupportPage } from './SupportPage';
import { PartnersPage } from './PartnersPage';
import { AboutPage } from './AboutPage';
import { MainFooter } from '../components/Footer';
import { InternalRoutes } from '../routes';
interface Props { }

/**
 * This component represents the main part of the website. The header, footer, and content
 * are rendered here. Plus, the react router lives here!
 */
export const Main: React.FC<Props> = () => {
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <Layout className={styles.MasterLayout}>
      <Layout.Header className={styles.MenuHeader}>
        <Header />
      </Layout.Header>
      <Layout.Content className={styles.MasterContent}>
        {/* We put a router directly here so that it only has to re-load the contents
        of the page, not the entire thing! 
         */}
        <Routes>
          <Route path="/" element={<LandingPage/>}>
          </Route>

          <Route path="/support" element={<SupportPage/>}>

          </Route>
          <Route path="/partners" element={<PartnersPage/>}>
            {/* <PartnersPage /> */}
          </Route>
          <Route path="/about" element={<AboutPage/>}>
            {/* <AboutPage /> */}
          </Route>


          <Route path="/" element={<Page404/>} >
            {/* <Page404 /> */}
          </Route>
        </Routes>
      </Layout.Content>
      {/* Don't render the footer on the home page */}
      <Layout.Footer className={styles.MasterFooter}>
      <MainFooter />
    </Layout.Footer>
    </Layout>
  );
};
