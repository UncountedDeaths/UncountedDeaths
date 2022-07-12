import React from 'react';
import { Line } from '@nivo/line';
import { Autaga } from '../content/AutagaTimeSeriesData';
import styles from '../styles/TimeSeriesPlots.module.less';

const NivoTSPlot: React.FC = () => {
  return (
    <div className={styles.TimeSeriesViewBox}>
      <Line
        data={Autaga}
        height={350}
        width={5000}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
          type: 'time',
          format: '%m/%d/%Y',
          precision: 'month',
          useUTC: false,
        }}
        xFormat="time:%m/%d/%Y"
        yScale={{
          type: 'linear',
        }}
        yFormat=" >-.2f"
        axisBottom={{
          format: '%b %Y',
          tickValues: 'every 1 month',
          legend: 'date',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'deaths',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        enableGridX={false}
        colors={{ scheme: 'set1' }}
        pointSize={1}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        useMesh={true}
        legends={[
          {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
      />
    </div>
  );
};

export default NivoTSPlot;
