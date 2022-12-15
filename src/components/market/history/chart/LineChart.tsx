import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import { basicChartDataType } from '@components/market/history/chart/data/chartDummyData';
import { useLayoutResize } from "@utils/layout";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { css } from '@emotion/core';

interface LineChartPropsType {
  id: string;
  data: basicChartDataType[];
}

am5.addLicense('AM5C358434391');

const LineChart = ({ id, data }: LineChartPropsType) => {
  const { isTablet } = useLayoutResize();

  useEffect(() => {
    const root = am5.Root.new(id);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        paddingRight: 0,
        maxTooltipDistance: 0, //
      }),
    );

    chart.children.unshift(
      am5.Label.new(root, {
        text: 'WEMIX$',
        fontSize: 12,
        position: 'absolute',
        fill: am5.color(0x737373),
        y: am5.percent(92),
        x: -10,
        dy: 5,
      }),
    );

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: 'month', count: 1 },
        dateFormats: {
          month: 'MMM',
        },
        gridIntervals: [{ timeUnit: 'month', count: isTablet ? 1 : 2 }],
        renderer: am5xy.AxisRendererX.new(root, {
          visible: false,
        }),
        paddingTop: 5,

        markUnitChange: isTablet,
        x: isTablet ? 50 : 59,
        extraMax: -0.01,
        extraMin: isTablet ? 0.01 : 0,
      }),
    );

    xAxis.data.setAll(data);

    // 축 스타일
    const xRenderer = xAxis.get('renderer');

    xRenderer.grid.template.setAll({
      fill: am5.color(0x737373),
      strokeDasharray: [4, 4],
    }); // x축 배경선

    xRenderer.labels.template.setAll({
      oversizedBehavior: 'none',
      textAlign: 'center',
      fill: am5.color(0x737373),
      paddingTop: 8,
      paddingLeft: 0,
      fontSize: 12,
    }); // x축 라벨

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        numberFormat: "#,###",
        renderer: am5xy.AxisRendererY.new(root, {
          cellEndLocation: -1,
        }),
      }),
    );

    const yRenderer = yAxis.get('renderer');

    yRenderer.grid.template.setAll({
      fill: am5.color(0x737373),
      strokeDasharray: [4, 4],
    }); // y축 배경선

    yRenderer.labels.template.setAll({
      oversizedBehavior: 'fit',
      textAlign: 'right',
      paddingRight: 25,
      width: 66,
      fontSize: 12,
      fill: am5.color(0x737373),
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
          minDistance: 0,
          maskBullets: false,
        }),
      );

      series.strokes.template.setAll({
        strokeWidth: 2,
        stroke,
      });

      series.bullets.push((root, _series) => {
        const circle = am5.Circle.new(root, {
          radius: 4.5,
          interactive: true,
          fill: am5.color(0xffffff),
          stroke: am5.color(0x1a1a1a),
          strokeWidth: 2,
          opacity: 0,
        });

        circle.states.create('default', {
          opacity: 0,
        });

        circle.states.create('hover', {
          opacity: 1,
        });

        return am5.Bullet.new(root, {
          sprite: circle,
        });
      });

      const cursor = chart.set(
        'cursor',
        am5xy.XYCursor.new(root, {
          xAxis,
        }),
      );

      cursor.lineY.set('visible', false);

      let previousBulletSprites: any[] = [];
      const cursorMoved = () => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < previousBulletSprites.length; i++) {
          previousBulletSprites[i].unhover();
        }
        previousBulletSprites = [];
        chart.series.each((series) => {
          const { dataItem } = series?.get('tooltip') ?? {};
          if (dataItem) {
            const bulletSprite = dataItem.bullets?.[0]?.get('sprite');
            bulletSprite?.hover();
            previousBulletSprites.push(bulletSprite);
          }
        });
      };

      cursor.events.on('cursormoved', cursorMoved);

      const tooltip = series.set(
        'tooltip',
        am5.Tooltip.new(root, {
          pointerOrientation: 'up',
          getFillFromSprite: false,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 5,
          paddingBottom: 5,
          centerY: 0,
        }),
      );

      tooltip?.get('background')?.setAll({
        fill: am5.color('#1A1A1A'),
        strokeOpacity: 0,
        fillOpacity: 1,
      });

      tooltip.label.adapters.add('html', () => {
        return`
          <div class="tooltip">
            <span style="color: #fff; line-height: 18px; font-size: 12px;">
              {valueY} WEMIX$
            </span>
          </div>
        `
      })

      series.data.setAll(data);
      series.appear(1000);
    };

    createSeries('LineChart', 'value', am5.color(0x1a1a1a));
    chart.appear(1000, 100);
    return () => root.dispose();
  }, [id, data, isTablet]);
  return <Chart id={id} style={{ width: '100%' }} />;
};

const Chart = styled.div([
  tw`relative`,
  tw`h-[400px]`,
  tw`mt-[12px]`,
  css`
    &:after {
      ${tw`absolute`}
      ${tw`top-[15px]`}
      ${tw`left-[66px]`}
      ${tw`w-[1px]`}
      ${tw`bg-gray-50`}
      ${tw`content-['']`}
      height: calc(100% - 61px);
    }

    &:before {
      ${tw`absolute`}
      ${tw`bottom-[45px]`}
      ${tw`left-[66px]`}
      ${tw`h-[1px]`}
      ${tw`bg-gray-50`}
      ${tw`content-['']`}
      width: calc(100% - 64px);
    }
  `,
])

export default LineChart;