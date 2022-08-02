import { Select } from 'antd';
import React, { useState } from 'react';
import countyData from '../content/stateDashContent';
import { stateData } from '../content/stateDashContent';
import { dataTypes } from '../content/stateDashContent';
const { Option } = Select;
import styles from '../styles/dashboard.module.less';
import IframeResizer from 'iframe-resizer-react';

import NivoTSPlot from '../components/NivoTimeSeriesPlots';

type CountyName = keyof typeof countyData;
type DataType =
  | 'Excess Death Rates'
  | 'Covid-19 Death Rates'
  | 'Potential Undercounting'
  | 'Medical Death Investigation System';

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

  const handleStateChange = (value: CountyName) => {
    setCurrState(value);
    setCurrCounty(countyData[value][0]);
  };

  const handleCountyChange = (value: CountyName) => {
    setCurrCounty(value);
  };

  const handleDataTypeChange = (value: DataType) => {
    setCurrData(value);
  };

  const stateCounties = countyData[currState as CountyName];

  // should change when currState is updated. Shows map of counties in a state
  const stateCountiesDashboardURL = 'https://datawrapper.dwcdn.net/q9LZ6/3/';
  // should change when currCounty is updated. Shows map of a county
  const countiesDashboardURL = 'https://datawrapper.dwcdn.net/EviBb/2/';

  const ExcessDeathRates = () => {
    return (
      <div className={styles.stateDashboard}>
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src="https://datawrapper.dwcdn.net/BJ7PN/"
        />
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src="https://datawrapper.dwcdn.net/UrD9D/"
        />
      </div>
    );
  };

  const CovidDeathRates = () => {
    return (
      <div className={styles.stateDashboard}>
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src="https://datawrapper.dwcdn.net/E5zKi/"
        />
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src="https://datawrapper.dwcdn.net/jYuD6/"
        />
      </div>
    );
  };

  const PotentialUndercounting = () => {
    return (
      <div className={styles.stateDashboard}>
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src="https://datawrapper.dwcdn.net/Otwmm/"
        />
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src="https://datawrapper.dwcdn.net/HXhjy/"
        />
      </div>
    );
  };

  const MedicalDeathInvestigationSystem = () => {
    return (
      <div className={styles.stateDashboard}>
        <IframeResizer
          className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
          src="https://datawrapper.dwcdn.net/OLxLq/"
        />
      </div>
    );
  };

  function DisplayIframe(data: string) {
    if (data === 'Excess Death Rates') {
      return <ExcessDeathRates />;
    } else if (data === 'Covid-19 Death Rates') {
      return <CovidDeathRates />;
    } else if (data === 'Potential Undercounting') {
      return <PotentialUndercounting />;
    } else if (data === 'Medical Death Investigation System') {
      return <MedicalDeathInvestigationSystem />;
    } else return <p>How did we get here?</p>;
  }

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
        <DisplayIframe data={currData} />
      </div>
      <NivoTSPlot />
    </div>
  );
};

export default CountyDashboard;
