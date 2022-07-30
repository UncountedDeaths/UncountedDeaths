import { Select } from 'antd';
import React, { useState } from 'react';
import countyData from '../content/stateDashContent';
import { stateData } from '../content/stateDashContent';
const { Option } = Select;
import styles from '../styles/dashboard.module.less';
import IframeResizer from 'iframe-resizer-react';

import NivoTSPlot from '../components/NivoTimeSeriesPlots';

type CountyName = keyof typeof countyData;

type ControlsPropsType = {
  onStateChange: (state: CountyName) => void;
};

const DashboardControls: React.FC<ControlsPropsType> = (props) => {
  return (
    <Select
      defaultValue="Alabama"
      className={styles.stateDashboardControl}
      onChange={props.onStateChange}
    >
      {stateData.map((state) => (
        <Option key={state}>{state}</Option>
      ))}
    </Select>
  );
};

const CountyDashboard: React.FC = () => {
  const [currState, setCurrState] = useState(stateData[0]);
  const [currCounty, setCurrCounty] = useState(countyData[stateData[0] as CountyName][0]);

  const handleStateChange = (value: CountyName) => {
    setCurrState(value);
    setCurrCounty(countyData[value][0]);
  };

  const handleCountyChange = (value: CountyName) => {
    setCurrCounty(value);
  };

  const stateCounties = countyData[currState as CountyName];

  // should change when currState is updated. Shows map of counties in a state
  const stateCountiesDashboardURL = 'https://datawrapper.dwcdn.net/q9LZ6/3/';
  // should change when currCounty is updated. Shows map of a county
  const countiesDashboardURL = 'https://datawrapper.dwcdn.net/EviBb/2/';

  return (
    <div className={styles.dashboardTab}>
      <div className={styles.dropDowns}>
        <div className={styles.bothDrop}>
          <DashboardControls onStateChange={handleStateChange} />
        </div>
        <div className={styles.bothDrop}>
          <Select
            style={{ width: 170 }}
            value={currCounty as CountyName}
            onChange={handleCountyChange}
          >
            {stateCounties.map((county) => (
              <Option key={county}>{county}</Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.stateDashboard}>
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src={stateCountiesDashboardURL}
        />
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src={countiesDashboardURL}
        />
      </div>
      <NivoTSPlot />
    </div>
  );
};

export default CountyDashboard;
