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
        src="https://public.tableau.com/views/TestingCovidCountiesv0_19&#47;Dashboard1"
      ></tableau-viz>
    </div>
  );
};

export default TableauView;
