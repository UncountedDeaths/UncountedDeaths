import React from 'react';
import styles from '../styles/MasterPage.module.less';
import { BULogo } from '../assets/assets.index';

export const MainFooter: React.FC = () => {
  return (
    <div>
      <div className={styles.Partners}>Partners</div>
      <div style={{ width: '100vw' }}>
        <img src={BULogo} className={styles.FooterLogo} />
      </div>
    </div>
  );
};
