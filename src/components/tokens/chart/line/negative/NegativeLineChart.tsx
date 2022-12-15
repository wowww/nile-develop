import {useEffect, useRef} from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
// eslint-disable-next-line camelcase
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import cn from 'classnames';
import {v4 as uid} from 'uuid';
import tw from 'twin.macro';
import styled from "@emotion/styled";

am5.addLicense('AM5C358434391');

interface Props {
  data: any;
}

const NegativeLineChart = ({ data }: Props) => {
  const chartRef: any = useRef(null);
  const id = uid();

  useEffect(() => {
    const root = am5.Root.new(`${id}`);
    root.setThemes([am5themes_Animated.new(root)]);
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        paddingRight: 0,
      }),
    );
    chartRef.current = chart;
    chart.zoomOutButton.set('forceHidden', true);

    setTimeout(() => {
      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          numberFormat: '#,###.00',
          renderer: am5xy.AxisRendererY.new(root, {
            minGridDistance: 30,
            opposite: false,
          }),
        }),
      );
      const xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: 'month', count: 1 },
          dateFormats: {
            hour: 'HH-MM',
            day: 'dd',
            week: 'dd',
            month: 'MM-dd',
            year: 'yyyy',
          },
          gridIntervals: [{ timeUnit: 'month', count: 2 }],
          renderer: am5xy.AxisRendererX.new(root, {
            // minGridDistance: 30,
          }),
          dx: 15,
        }),
      );
      xAxis.data.setAll(data);

      // 축 스타일
      const xRenderer = xAxis.get('renderer');
      xRenderer.grid.template.setAll({
        visible: false,
      }); // x축 배경선
      xRenderer.labels.template.setAll({
        oversizedBehavior: 'none',
        maxWidth: 50,
        textAlign: 'center',
        fill: am5.color(0x8c8c8c),
        paddingTop: 8,
        fontSize: 12,
      }); // x축 라벨

      const yRenderer = yAxis.get('renderer');
      yRenderer.grid.template.setAll({
        strokeOpacity: 0,
        stroke: am5.color(0xf2f2f2),
      }); // y축 배경선
      yRenderer.labels.template.setAll({
        oversizedBehavior: 'none',
        maxWidth: 50,
        textAlign: 'center',
        fill: am5.color(0x8c8c8c),
        fontSize: 12,
      }); // y축 라벨

      const createSeries = (
        name: string,
        field: string | undefined,
        lowColor: am5.Color | undefined,
        upColor: am5.Color | undefined,
        endValue: number,
      ): void => {
        const series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name,
            xAxis,
            yAxis,
            valueYField: field,
            valueXField: 'date',
            stroke: upColor,
          }),
        );
        series.strokes.template.setAll({
          strokeWidth: 2,
        });
        series.data.setAll(data);
        series.appear(1000);
        const rangeDataItem = yAxis.makeDataItem({
          value: -1000,
          endValue,
        });
        const range: any = series.createAxisRange(rangeDataItem);
        range.strokes.template.setAll({
          stroke: lowColor,
          strokeWidth: 2,
        });
      };

      createSeries('value', 'value', am5.color(0xff3333), am5.color(0x00bf20), 151.01);

      function createRange(value: number, color: am5.Color | undefined): void {
        const rangeDataItem = yAxis.makeDataItem({
          value,
        });

        const range: any = yAxis.createAxisRange(rangeDataItem);

        range.get('label').setAll({
          fill: am5.color(0xffffff),
          text: `${value}`,
          background: am5.Rectangle.new(root, {
            fill: color,
          }),
        });

        range.get('grid').setAll({
          stroke: color,
          strokeDasharray: [0],
          strokeOpacity: 1,
          location: 1,
        });
      }

      createRange(151.01, am5.color(0x00bf20));

      chartRef.current = chart;
      root.resize();
    }, 300);

    return () => {
      root.dispose();
    };
  }, [id, data]);

  return <Chart id={id} className={cn('negative-chart-wrap')} />;
};

const Chart = styled.div([
  tw`w-full`,
  tw`h-[201px]`,
  tw`md:h-[213px]`,
]);

export default NegativeLineChart;
