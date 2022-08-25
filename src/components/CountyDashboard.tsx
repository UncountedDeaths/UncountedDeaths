import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { stateData } from '../content/stateDashContent';
const { Option } = Select;
import styles from '../styles/dashboard.module.less';
import IframeResizer from 'iframe-resizer-react';

type ControlsPropsType = {
  onStateChange: (state: string) => void;
};

interface StateCharts {
  charts: Chart[];
}

interface Chart {
  name: string;
  url: string;
  id: string;
}

const DashboardControls: React.FC<ControlsPropsType> = (props) => {
  return (
    <Select
      defaultValue={stateData[0]}
      className={styles.stateDashboardControl}
      onSelect={props.onStateChange}
    >
      {stateData.map((state) => (
        <Option key={state}>{state}</Option>
      ))}
    </Select>
  );
};

const CountyDashboard: React.FC = () => {
  const [currState, setCurrState] = useState(stateData[0]);
  const [currChartSet, setCurrChartSet] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async (state: string) => {
      const state_key = state.toLowerCase().replaceAll(' ', '-');
      const res = await fetch(`/api/charts/states/${state_key}`);
      if (res.status != 200) {
        setIsError(true);
        return;
      }
      setCurrChartSet(await res.json());
      setIsError(false);
    };

    fetchData(currState).catch(console.error);
  }, [currState]);

  // should change when currState is updated. Shows map of counties in a state
  const [stateCountiesDashURL] = useState('https://datawrapper.dwcdn.net/q9LZ6/3/');
  // should change when currCounty is updated. Shows map of a county
  const [countiesDashURL] = useState('https://datawrapper.dwcdn.net/EviBb/2/');

  const handleStateChange = (value: string) => {
    setCurrState(value);
  };

  return (
    <div className={styles.dashboardTab}>
      <div className={styles.dropDowns}>
        <DashboardControls onStateChange={handleStateChange} />
        <Select className={styles.stateDashboardControl}>
          {currChartSet.map((chart: Chart) => (
            <Option key={chart.id}>{chart.name}</Option>
          ))}
        </Select>
      </div>
      {isError ? (
        <p>Sorry there was an error</p>
      ) : (
        <div className={styles.stateDashboard}>
          <IframeResizer
            className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
            src={stateCountiesDashURL}
          />
          <IframeResizer
            className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
            src={countiesDashURL}
          />
        </div>
      )}
    </div>
  );
};

export default CountyDashboard;
