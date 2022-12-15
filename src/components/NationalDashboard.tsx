import React, { useState, useEffect } from 'react';
import styles from '../styles/dashboard.module.less';
import { Select } from 'antd';
import national_charts from '../data/national_charts.json';
import barchart2021 from '../data/barchart2021.json';
import { IGraphSet } from '../data/interfaces';
import DemoColumn from './barchart';
import { isMobile } from 'react-device-detect';
import { barTest } from '../data/interfaces';
import barchart2020 from '../data/barchart2020.json';
import DWChart from './DWChart';

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
  //code for datawrapper helper function
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.dwcdn.net/js/events.js';
    script.async = true;
    script.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(script);
  }, []);

  //code for choropleth maps and bar charts
  const graphs: IGraphSet[] = national_charts;
  const barData2020: barTest[] = barchart2020;
  const barData2021: barTest[] = barchart2021;
  const [currGraph, setCurrGraph] = useState<JSX.Element[]>(
    graphs[0].graphs.map((graph) => (
      <DWChart
        key={graph.url}
        title={graph.id}
        src={graph.url}
        className={[styles.appIFrame, styles.appIFrameLarge].join(' ')}
      />
    ))
  );
  const [currBar, setCurrBar] = useState<JSX.Element | null>(null);
  const onChange = (value: string) => {
    const pos = parseInt(value);
    setCurrGraph(
      graphs[pos].graphs.map((graph) => (
        <DWChart
          key={graph.url}
          title={graph.id}
          src={graph.url}
          className={[styles.appIFrame, pos === 0 ? styles.appIFrameLarge : ''].join(' ')}
        />
      ))
    );
    if (pos !== 0) {
      setCurrBar(<DemoColumn data={barData2020[pos].bars} />);
    }
  };
  useEffect(() => {
    if (!loaded) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    datawrapper.on('region.mouseenter', (event: any) => {
      //super ugly bit to have the chart re render based on hover
      //can be cleaned by adding property for and year
      if (event.chartId == 'g01tG') {
        for (let step = 0; step < 51; step++) {
          if (
            barData2020[0].bars[step].abbr.replace(/\s/g, '') === event.data.STUSPS &&
            barData2020[0].bars[step].select != 'selected'
          ) {
            barData2020[0].bars[step].select = 'selected';
            for (let substep = 0; substep < 51; substep++) {
              if (
                barData2020[0].bars[substep].abbr.replace(/\s/g, '') !== event.data.STUSPS &&
                barData2020[0].bars[substep].select == 'selected'
              ) {
                barData2020[0].bars[substep].select = 'unselected';
              }
            }
            setCurrBar(<DemoColumn data={barData2020[0].bars} />);
            break;
          }
        }
      }
      if (event.chartId == '9XHiP') {
        for (let step = 0; step < 51; step++) {
          if (
            barData2021[0].bars[step].abbr.replace(/\s/g, '') === event.data.STUSPS &&
            barData2021[0].bars[step].select != 'selected'
          ) {
            barData2021[0].bars[step].select = 'selected';
            for (let substep = 0; substep < 51; substep++) {
              if (
                barData2021[0].bars[substep].abbr.replace(/\s/g, '') !== event.data.STUSPS &&
                barData2021[0].bars[substep].select == 'selected'
              ) {
                barData2021[0].bars[substep].select = 'unselected';
              }
            }
            setCurrBar(<DemoColumn data={barData2021[0].bars} />);
            break;
          }
        }
      }
      if (event.chartId == 'f5seJ') {
        for (let step = 0; step < 51; step++) {
          if (
            barData2020[1].bars[step].abbr.replace(/\s/g, '') === event.data.STUSPS &&
            barData2020[1].bars[step].select != 'selected'
          ) {
            barData2020[1].bars[step].select = 'selected';
            for (let substep = 0; substep < 51; substep++) {
              if (
                barData2020[1].bars[substep].abbr.replace(/\s/g, '') !== event.data.STUSPS &&
                barData2020[1].bars[substep].select == 'selected'
              ) {
                barData2020[1].bars[substep].select = 'unselected';
              }
            }
            setCurrBar(<DemoColumn data={barData2020[1].bars} />);
            break;
          }
        }
      }
      if (event.chartId == '8dCS5') {
        for (let step = 0; step < 51; step++) {
          if (
            barData2021[1].bars[step].abbr.replace(/\s/g, '') === event.data.STUSPS &&
            barData2021[1].bars[step].select != 'selected'
          ) {
            barData2021[1].bars[step].select = 'selected';
            for (let substep = 0; substep < 51; substep++) {
              if (
                barData2021[1].bars[substep].abbr.replace(/\s/g, '') !== event.data.STUSPS &&
                barData2021[1].bars[substep].select == 'selected'
              ) {
                barData2021[1].bars[substep].select = 'unselected';
              }
            }
            setCurrBar(<DemoColumn data={barData2021[1].bars} />);
            break;
          }
        }
      }
      if (event.chartId == 'uTCtN') {
        for (let step = 0; step < 51; step++) {
          if (
            barData2020[2].bars[step].abbr.replace(/\s/g, '') === event.data.STUSPS &&
            barData2020[2].bars[step].select != 'selected'
          ) {
            barData2020[2].bars[step].select = 'selected';
            for (let substep = 0; substep < 51; substep++) {
              if (
                barData2020[2].bars[substep].abbr.replace(/\s/g, '') !== event.data.STUSPS &&
                barData2020[2].bars[substep].select == 'selected'
              ) {
                barData2020[2].bars[substep].select = 'unselected';
              }
            }
            setCurrBar(<DemoColumn data={barData2020[2].bars} />);
            break;
          }
        }
      }
      if (event.chartId == 'UVczQ') {
        for (let step = 0; step < 51; step++) {
          if (
            barData2021[2].bars[step].abbr.replace(/\s/g, '') === event.data.STUSPS &&
            barData2021[2].bars[step].select != 'selected'
          ) {
            barData2021[2].bars[step].select = 'selected';
            for (let substep = 0; substep < 51; substep++) {
              if (
                barData2021[2].bars[substep].abbr.replace(/\s/g, '') !== event.data.STUSPS &&
                barData2021[2].bars[substep].select == 'selected'
              ) {
                barData2021[2].bars[substep].select = 'unselected';
              }
            }
            setCurrBar(<DemoColumn data={barData2021[2].bars} />);
            break;
          }
        }
      }
    });
  }, [loaded, barData2020, barData2021]);
  return (
    <>
      <div className={styles.dashboardTab}>
        <DashboardControls onChange={onChange} dataSet={national_charts} />
        <div className={styles.nationalDashboard}>{currGraph}</div>
      </div>
      <div>{isMobile ? null : currBar}</div>
    </>
  );
};

export default NationalDashboard;
