import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { rechartsdata } from '../content/TimeSeriesData';

const RechartsTSPlot: React.FC = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={rechartsdata}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 2 }} />
    </LineChart>
  );
};

export default RechartsTSPlot;
