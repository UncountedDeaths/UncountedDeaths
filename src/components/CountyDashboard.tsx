import { Select } from 'antd';
import React, { useState } from 'react';
import countyData from '../content/stateDashContent';
import { stateData } from '../content/stateDashContent';
import { dataTypes } from '../content/stateDashContent';
import { dataLinks } from '../content/stateDashContent';
const { Option } = Select;
import styles from '../styles/dashboard.module.less';
import IframeResizer from 'iframe-resizer-react';

import NivoTSPlot from '../components/NivoTimeSeriesPlots';

type CountyName = keyof typeof countyData;
type DataType = keyof typeof dataLinks;

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
  const [currData, setCurrData] = useState(dataTypes[0] as DataType[0]);
  const [currLink, setCurrLink] = useState(dataLinks[dataTypes[0] as DataType]);

  const handleStateChange = (value: CountyName) => {
    setCurrState(value);
    setCurrCounty(countyData[value][0]);
  };

  const handleCountyChange = (value: CountyName) => {
    setCurrCounty(value);
  };

  const handleDataTypeChange = (value: DataType) => {
    setCurrData(value);
    setCurrLink(dataLinks[value]);
  };

  const stateCounties = countyData[currState as CountyName];

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
        <div className={styles.bothDrop}>
          <Select
            style={{ width: 170 }}
            value={currData as DataType}
            onChange={handleDataTypeChange}
          >
            {dataTypes.map((state) => (
              <Option key={state}>{state}</Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.stateDashboard}>
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src={currLink[0]}
        />
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src={currLink[1]}
        />
      </div>
      <NivoTSPlot />
    </div>
  );
};

export default CountyDashboard;
