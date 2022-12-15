import React, { useEffect } from 'react';
import cn from 'classnames';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import { v4 as uid } from 'uuid';
import styled from '@emotion/styled';
import tw from 'twin.macro';

/* 22.10.27 수정: 차트 라이센스 추가 */
am5.addLicense('AM5C358434391');

interface LineChartPropsType {
  data: any;
}

const FilledLineChart: React.FC<LineChartPropsType> = ({ data }) => {
  const id = uid();
  useEffect(() => {
    const root = am5.Root.new(id);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        paddingRight: 0,
        maxTooltipDistance: 0,
      }),
    );
    chart.zoomOutButton.set('forceHidden', true);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        numberFormat: "#.#'B'",
        renderer: am5xy.AxisRendererY.new(root, {
          visible: false,
        }),
      }),
    );
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'date',
        endLocation: 0,
        paddingLeft: 15,
        renderer: am5xy.AxisRendererX.new(root, {
          visible: false,
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
      oversizedBehavior: 'none',
      // maxWidth: 40,
      textAlign: 'center',
      fill: am5.color(0x8c8c8c),
      paddingTop: 8,
      paddingLeft: 0,
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
        am5xy.LineSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueYField: field,
          categoryXField: 'date',
          stroke,
          fill: am5.color(0x9860ff),
          stacked: true,
        }),
      );
      series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.6,
      });
      series.strokes.template.setAll({
        strokeWidth: 1,
        stroke,
      });

      series.data.setAll(data);
      series.appear(1000);
    };

    createSeries('LineChart', 'value', am5.color('rgba(152, 96, 255, 0.6)'));
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data, id]);
  return <Chart id={id} className={cn('filed-chart-wrap')} />;
};

const Chart = styled.div([
  tw`h-[201px]`,
  tw`md:h-[213px]`,
]);

export default FilledLineChart;
