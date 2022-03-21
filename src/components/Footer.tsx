import React from 'react';
import { BULogo } from '../assets/assets.index';

export const MainFooter: React.FC = () => {
  return (
    <div style={{ width: '100vw%' }}>
      <img src={BULogo} style={{ display: 'flex', alignItems: 'left', padding: '20px', width: '648px' }} />
    </div>
  );
};
