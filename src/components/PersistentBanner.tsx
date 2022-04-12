import React from 'react';
import * as Content from '../content/BannerContent';
import styles from '../styles/PersistentBanner.module.less';
import { NavLink } from 'react-router-dom';
import { InternalRoutes } from '../routes';

export const PersistentBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <strong>{Content.blue_text}</strong> &nbsp;
      <NavLink to={InternalRoutes.RESOURCES.path}>
        <b>
          <u>{Content.hyperlink_text}</u>
        </b>
      </NavLink>
    </div>
  );
};
