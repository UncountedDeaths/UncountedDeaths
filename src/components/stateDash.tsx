import { Select } from 'antd';
import React, { useState } from 'react';
import countyData from '../content/stateDashContent';
import { stateData } from '../content/stateDashContent';
const { Option } = Select;
import styles from '../styles/stateDash.module.less';
import IframeResizer from 'iframe-resizer-react';

type CountyName = keyof typeof countyData;

const Menu: React.FC = () => {
  const [states, setStates] = useState(countyData[stateData[0] as CountyName]);
  const [counties, setCounties] = useState(countyData[stateData[0] as CountyName][0]);

  const handleStateChange = (value: CountyName) => {
    setStates(countyData[value]);
    setCounties(countyData[value][0]);
  };

  const onSecondCityChange = (value: CountyName) => {
    setCounties(value);
  };

  return (
    <>
      <div className={styles.dropDowns}>
        <div className={styles.bothDrop}>
          <Select defaultValue="Alabama" style={{ width: 170 }} onChange={handleStateChange}>
            {stateData.map((state) => (
              <Option key={state}>{state}</Option>
            ))}
          </Select>
        </div>
        <div className={styles.bothDrop}>
          <Select
            style={{ width: 170 }}
            value={counties as CountyName}
            onChange={onSecondCityChange}
          >
            {states.map((state) => (
              <Option key={state}>{state}</Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.stateDashboard}>
        <IframeResizer className={styles.appIFrame} src="https://datawrapper.dwcdn.net/q9LZ6/3/" />
        <IframeResizer className={styles.appIFrame} src="https://datawrapper.dwcdn.net/EviBb/2/" />
      </div>
    </>
  );
};

export default Menu;
