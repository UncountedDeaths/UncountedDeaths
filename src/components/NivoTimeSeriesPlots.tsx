import React from 'react';
import { ResponsiveLine, PointTooltip, PointTooltipProps } from '@nivo/line';
import { Autaga } from '../content/AutagaTimeSeriesData';
import styles from '../styles/TimeSeriesPlots.module.less';

const NivoTSPlot: React.FC = () => {
  return (
    <div className={styles.TimeSeriesViewBox}>
      <ResponsiveLine
        curve="natural"
        data={Autaga}
        margin={{ top: 50, bottom: 50, left: 22 }}
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
          tickValues: 'every 6 month',
          legend: 'date',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
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
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: -160,
            translateY: -50,
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
        tooltip={CustomTooltip}
      />
    </div>
  );
};

const CustomTooltip: PointTooltip = ({ point }: PointTooltipProps) => {
  const { serieId, serieColor } = point;
  const { xFormatted, yFormatted } = point.data;
  const serie = serieId === 'expDeaths' ? 'Exp. Deaths' : 'Deaths';
  return (
    <div className={styles.CustomTooltipContainer} style={{ color: serieColor }}>
      {/* <div style={{ height: 8, width: '80%', alignSelf: 'center', color: serieColor }}></div> */}
      <span>
        Date: <strong>{xFormatted}</strong>
      </span>
      <span>
        {serie}: <strong>{yFormatted}</strong>
      </span>
    </div>
  );
};

export default NivoTSPlot;
