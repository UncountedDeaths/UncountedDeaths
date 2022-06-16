import React from 'react';
import IframeResizer from 'iframe-resizer-react';
export const TrackerPage: React.FC = () => {
  return (
    <IframeResizer
      log
      src="https://mu0brt-zhenwei-zhou.shinyapps.io/covid_ex_app"
      style={{ width: '1px', minWidth: '100%', marginTop: '8rem', border: 'none' }}
    />
  );
};
