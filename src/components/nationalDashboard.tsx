import React, { useState } from 'react';
import styles from '../styles/dashboard.module.less';
import IframeResizer from 'iframe-resizer-react';
import { Select } from 'antd';
import { DataSourceType, dataSources } from '../content/NationalDashboard';

const { Option } = Select;
type ControlsPropsType = {
  onChange: (dataType: string) => void;
};

const DashboardControls: React.FC<ControlsPropsType> = (props) => {
  return (
    <div className={styles.nationalDashboardControl}>
      <p className={styles.nationalDashboardControlLabel}>Data types: </p>
      <Select defaultValue={dataSources[0].id} onChange={props.onChange}>
        {dataSources.map((dataType) => (
          <Option key={dataType.id}>{dataType.name}</Option>
        ))}
      </Select>
    </div>
  );
};

const NationalDashboard: React.FC = () => {
  const [dataType, setDataType] = useState<DataSourceType>(dataSources[0]);

  const handleDataTypeChange = (dataTypeId: string) => {
    for (let i = 0; i < dataSources.length; i++) {
      if (dataSources[i].id === dataTypeId) {
        setDataType(dataSources[i]);
        break;
      }
    }
  };

  return (
    <div className={styles.dashboardTab}>
      <DashboardControls onChange={handleDataTypeChange} />
      <div className={styles.nationalDashboard}>
        <IframeResizer className={styles.appIFrame} src={dataType.sources[0]} />
        <IframeResizer className={styles.appIFrame} src={dataType.sources[1]} />
      </div>
    </div>
  );
};

export default NationalDashboard;
