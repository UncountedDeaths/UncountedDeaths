import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { stateData } from '../content/stateDashContent';
const { Option } = Select;
import styles from '../styles/dashboard.module.less';
import IframeResizer from 'iframe-resizer-react';
import { title } from 'process';

type ControlsPropsType = {
  onStateChange: (state: string) => void;
};

interface StateCharts {
  charts: ChartType[];
  state: string;
}

interface ChartType {
  name: string;
  sources: Chart[];
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
  const [currChartSet, setCurrChartSet] = useState<StateCharts | undefined>(undefined);
  const [isError, setIsError] = useState(false);
  const [currChartType, setCurrCharType] = useState<number>(0);
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

  const handleStateChange = (value: string) => {
    setCurrState(value);
  };

  const handleChartTypeChange = (idx: number | string) => {
    setCurrCharType(idx as number);
  };

  return (
    <div className={styles.dashboardTab}>
      <div className={styles.dropDowns}>
        <DashboardControls onStateChange={handleStateChange} />
        <Select
          className={styles.stateDashboardControl}
          onSelect={handleChartTypeChange}
          value={currChartSet?.charts[currChartType].name}
        >
          {currChartSet &&
            currChartSet.charts.map((chart_type: ChartType, idx) => {
              return (
                <Option key={idx} label={chart_type.name}>
                  {chart_type.name}
                </Option>
              );
            })}
        </Select>
      </div>
      {isError ? (
        <p>Sorry there was an error loading the charts. Please refresh</p>
      ) : (
        <div className={styles.stateDashboard}>
          <IframeResizer
            className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
            src={currChartSet && currChartSet.charts[currChartType].sources[0].url}
          />
          {currChartSet != undefined && currChartSet.charts[currChartType].sources.length > 1 ? (
            <>
              <IframeResizer
                className={[styles.appIFrame, styles.appIFrameSmall].join(' ')}
                src={currChartSet.charts[currChartType].sources[1].url}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default CountyDashboard;
