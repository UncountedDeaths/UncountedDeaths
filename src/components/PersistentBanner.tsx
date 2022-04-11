import React from 'react';
import * as Content from '../content/BannerContent';
import styles from '../styles/PersistentBanner.module.less';
import { NavLink } from 'react-router-dom';

export const PersistentBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <p>
        <strong>{Content.blue_text}</strong>{' '}
        <NavLink to="/resources">
          <b>
            <u>{Content.hyperlink_text}</u>
          </b>
        </NavLink>
      </p>
    </div>
  );
};

export const PersistentBannerWhitespace: React.FC = () => {
  return <div className={styles.banner_whitespace}></div>;
};
