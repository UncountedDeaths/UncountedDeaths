import React from 'react';
import styles from '../styles/TableauView.module.less';

const TableauView: React.FC = () => {
  return (
    <div className={styles.TableauViewBox}>
      <tableau-viz
        toolbar="bottom"
        hide-tabs
        height="1325px"
        width="100%"
        src="https://public.tableau.com/views/TestingCovidCountiesv0_20/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
      ></tableau-viz>
    </div>
  );
};

export default TableauView;
