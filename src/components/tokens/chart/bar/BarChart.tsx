import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
// eslint-disable-next-line camelcase
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import styled from '@emotion/styled';
import {v4 as uid} from "uuid";
import tw from 'twin.macro';

/* 22.10.27 수정: 차트 라이센스 추가 */
am5.addLicense('AM5C358434391');

interface Props {
  data: any;
  height: number;
}

const BarChart = ({ data, height }: Props) => {
  const id = uid();

  useEffect(() => {
    const root = am5.Root.new(id);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        paddingRight: 0,
      }),
    );
    chart.zoomOutButton.set('forceHidden', true);

    setTimeout(() => {
      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          numberFormat: "#.00'M'",
          renderer: am5xy.AxisRendererY.new(root, {
            opposite: false,
          }),
        }),
      );
      const xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: 'month', count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {
            visible: false,
            minGridDistance: 30,
          }),
        }),
      );
      xAxis.data.setAll(data);

      // 축 스타일
      const xRenderer = xAxis.get('renderer');
      xRenderer.grid.template.setAll({
        visible: false,
      }); // x축 배경선
      xRenderer.labels.template.setAll({
        oversizedBehavior: 'fit',
        textAlign: 'center',
        fill: am5.color(0x8c8c8c),
        paddingTop: 8,
        fontSize: 12,
      }); // x축 라벨
      const yRenderer = yAxis.get('renderer');
      yRenderer.grid.template.setAll({
        visible: false,
      }); // y축 배경선
      yRenderer.labels.template.setAll({
        oversizedBehavior: 'fit',
        textAlign: 'center',
        fill: am5.color(0x8c8c8c),
        fontSize: 12,
      }); // y축 라벨

      // 시리즈 생성
      const createSeries = (name: string, field: string, stroke: any) => {
        const series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name,
            xAxis,
            yAxis,
            valueYField: field,
            valueXField: 'date',
            stroke,
          }),
        );
        // bar chart style
        series.columns.template.setAll({
          width: 13,
          strokeOpacity: 0,
          fillOpacity: 1,
          fill: am5.color(0x27c683),
        });

        series.data.setAll(data);
        series.appear(1000);
      };

      createSeries('BarChart', 'value', am5.color(0xff3333));

      root.resize();
    }, 300);

    return () => {
      root.dispose();
    };
  }, [data, id]);

  return <Chart id={id} style={{ height }} />;
};

const Chart = styled.div([
  tw`w-full`,
]);

export default BarChart;
