import React from 'react';
import { Column } from '@ant-design/plots';
import { barsInterface } from '../data/interfaces';

type barData = {
  data: barsInterface[];
};

const DemoColumn: React.FC<barData> = (props) => {
  const data = props.data;

  const config = {
    data,
    xField: 'abbr',
    yField: 'value',
    columnStyle: {
      fill: '#08979c',
    },
    height: 200,
    columnWidthRatio: 0.75,
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
      },
    },
    meta: {
      value: {
        alias: 'Deaths Per 100,000',
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
    ],
  };

  return <Column {...config} />;
};

export default DemoColumn;
