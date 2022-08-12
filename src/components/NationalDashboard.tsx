import React, { useState } from 'react';
import styles from '../styles/dashboard.module.less';
import IframeResizer from 'iframe-resizer-react';
import { Select } from 'antd';
import national_charts from '../data/national_charts.json';
import { IGraphSet } from '../data/interfaces';

const { Option } = Select;
type ControlsPropsType = {
  onChange: (dataType: string) => void;
  dataSet: IGraphSet[];
};

const DashboardControls: React.FC<ControlsPropsType> = (props) => {
  return (
    <div className={styles.nationalDashboardControl}>
      <p className={styles.nationalDashboardControlLabel}>Data types: </p>
      <Select
        onChange={props.onChange}
        defaultValue={props.dataSet[0].graph_type}
        style={{ width: 300 }}
      >
        {props.dataSet.map((dataType, index) => (
          <Option key={dataType.graph_type} value={index}>
            {dataType.graph_type}
          </Option>
        ))}
      </Select>
    </div>
  );
};

const NationalDashboard: React.FC = () => {
  const graphs: IGraphSet[] = national_charts;
  const [currGraph, setCurrGraph] = useState<JSX.Element[]>(
    graphs[0].graphs.map((graph) => (
      <IframeResizer key={graph.url} className={styles.appIFrame} src={graph.url} />
    ))
  );

  const onChange = (value: string) => {
    setCurrGraph(
      graphs[parseInt(value)].graphs.map((graph) => (
        <IframeResizer key={graph.url} className={styles.appIFrame} src={graph.url} />
      ))
    );
  };

  return (
    <div className={styles.dashboardTab}>
      <DashboardControls onChange={onChange} dataSet={national_charts} />
      <div className={styles.nationalDashboard}>{currGraph}</div>
    </div>
  );
};

export default NationalDashboard;
