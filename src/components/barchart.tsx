import React from 'react';
import { Column } from '@ant-design/plots';
import { barsInterface } from '../data/interfaces';

type barData = {
  data: barsInterface[];
};

const DemoColumn: React.FC<barData> = (props) => {
  const data = props.data;
  const Legend: any = false;
  const config = {
    data,
    Tooltip: false,
    xField: 'abbr',
    yField: 'value',
    seriesField: 'select',
    color: ({ select }: any) => {
      if (select === 'selected') {
        return 'Red';
      }

      return '#08979c';
    },
    height: 200,
    columnWidthRatio: 0.75,
    legend: Legend,
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
      },
    },
  };

  return <Column {...config} />;
};

export default DemoColumn;
