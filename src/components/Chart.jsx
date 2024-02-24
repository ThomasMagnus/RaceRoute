import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { data } from '../data/Data';

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const xAxisData = data.map(item => item.distance)
    const yAxisData = data.map(item => item.height)

    const maxSpeedColorObj = {
      FAST: "green",
      NORMAL: "blue",
      SLOW: "red"
    }

    const surfaceColorObj = {
      SAND: "rgba(243, 245, 39, 0.4)", 
      ASPHALT: "rgba(153, 153, 153, 0.4)", 
      GROUND: "rgba(255, 161, 0, 0.4)"
    }

    const maxSpeedColor = []
    const surfaceColor = []

    for (let i = 0; i < data.length; i++)
    {

      if (i === 0) {
        maxSpeedColor.push(
          {
            lte: i + 1, color: maxSpeedColorObj[data[i]["maxSpeed"]]
          }
        )

        surfaceColor.push(
          {
            type: 'line',
            smooth: true,
            data: yAxisData,
            markArea: {
              itemStyle: {
                color: surfaceColorObj[data[i]["surface"]]
              },
              data: [
                [{ xAxis: i }, { xAxis: i + 1 }],
              ],
            }
          }
        )
        continue;
      }
      else if (i === data.length - 1)
      {
        maxSpeedColor.push(
          {
            gt: i, color: maxSpeedColorObj[data[i]["maxSpeed"]]
          }
        );

        break;
      }

      
      surfaceColor.push(
        {
          type: 'line',
          smooth: true,
          markArea: {
            itemStyle: {
              color: surfaceColorObj[data[i]["surface"]]
            },
            data: [
              [{ xAxis: i }, { xAxis: i + 1 }],
            ],
          }
        }
      )

      maxSpeedColor.push(
        {
          gt: i, lte: i + 1, color: maxSpeedColorObj[data[i]["maxSpeed"]]
        }
      );
    }

    console.log(surfaceColor)

    const option = {
      title: {
        text: 'Планирование маршрутов',
        subtext: 'Fake Data'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        },
        axisPointer: {
          snap: true
        }
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: maxSpeedColor
      },
      series: surfaceColor
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default Chart;