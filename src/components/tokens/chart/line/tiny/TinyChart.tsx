import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
// eslint-disable-next-line camelcase
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { v4 as uid } from 'uuid';

/* 22.10.27 수정: 차트 라이센스 추가 */
am5.addLicense('AM5C358434391');

interface actionPropsType {
  payload: statePropsType;
}
interface statePropsType {
  value: string;
}
interface Props {
  data: any;
  coinName?: string;
  strokeWidth?: number;
  type?: string;
  height: number;
}

const TinyChart = ({ data, coinName, strokeWidth, type, height }: Props) => {
  const chartRef: any = useRef(null);
  const id = uid();
  const strokeColor = type === 'ascend' ? '#00bf20' : '#ff3333';

  useEffect(() => {
    const root = am5.Root.new(`${id}`);
    root.setThemes([am5themes_Animated.new(root)]);
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        paddingRight: -20,
      }),
    );
    chartRef.current = chart;
    /* 22.10.27 수정: 차트 zoomButton 제거 코드 추가 */
    chart.zoomOutButton.set('forceHidden', true);

    setTimeout(() => {
      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          numberFormat: "#.00'M'",
          renderer: am5xy.AxisRendererY.new(root, {
            opposite: true,
          }),
        }),
      );
      const xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: 'day', count: 1 },
          dateFormats: {
            day: 'dd',
            week: 'dd',
            month: 'mm',
            year: 'yyyy',
          },
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
        visible: false,
      }); // x축 라벨
      const yRenderer = yAxis.get('renderer');
      yRenderer.grid.template.setAll({
        visible: false,
      }); // y축 배경선
      yRenderer.labels.template.setAll({
        visible: false,
      }); // y축 라벨

      // 시리즈 생성
      const createSeries = (name: string, field: string, stroke: any) => {
        const series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name,
            xAxis,
            yAxis,
            valueYField: field,
            valueXField: 'date',
            stroke,
          }),
        );
        series.fills.template.setAll({
          visible: false,
        });
        series.strokes.template.setAll({
          strokeWidth,
          stroke,
        });

        series.data.setAll(data);
        series.appear(1000);
      };

      createSeries('LineChart', 'value', am5.color(strokeColor));

      chartRef.current = chart;
      root.resize();
    }, 300);

    return () => {
      root.dispose();
    };
  }, [id, data, strokeColor, strokeWidth]);

  return <div id={id} style={{ width: 'auto', height }} />;
};

TinyChart.defaultProps = {
  coinName: undefined,
  strokeWidth: 1,
  type: 'ascend',
}

export default TinyChart;
