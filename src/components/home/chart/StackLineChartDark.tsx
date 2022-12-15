/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */

import React, {useEffect} from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import {basicChartDataType} from '@components/market/history/chart/data/chartDummyData';
import {omit} from 'lodash';
import { css } from '@emotion/core'

// eslint-disable-next-line camelcase
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {v4 as uid} from 'uuid';
import styled from "@emotion/styled";
import tw from "twin.macro";

interface LineChartPropsType {
  data: basicChartDataType[];
  category: string[];
}

am5.addLicense('AM5C358434391');

const StackLineChartDark = ({data, category}: LineChartPropsType) => {
  const id = uid();
  const colorChip = [am5.color(0x9860ff), am5.color(0x36b8ff), am5.color(0x5e5ff5), am5.color(0xffd056)];

  useEffect(() => {
    const root = am5.Root.new(id);
    root.setThemes([am5themes_Animated.new(root)]);
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

    root.numberFormatter.setAll({
      numberFormat: '#,###.##a',
      bigNumberPrefixes: [
        { number: 100000, suffix: 'M' },
        { number: 1000000000, suffix: 'B' },
      ],
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          // opposite: true,
          // visible: false,
          minGridDistance: 43,
        }),
      }),
    );
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: 'day', count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          visible: false,
          // minGridDistance: 100,
        }),
        dateFormats: {
          day: 'MM.dd',
        },
        gridIntervals: [{ timeUnit: 'day', count: 1 }],
        paddingLeft: 0,
      }),
    );
    xAxis.data.setAll(data);

    // 축 스타일
    const xRenderer = xAxis.get('renderer');
    xRenderer.grid.template.setAll({
      visible: false,
      // stroke: am5.color(0xffffff),
    }); // x축 배경선
    xRenderer.labels.template.setAll({
      oversizedBehavior: 'none',
      // maxWidth: 40,
      textAlign: 'left',
      fill: am5.color(0xa6a6a6),
      paddingTop: 8,
      paddingLeft: 0,
      fontSize: 12,
    }); // x축 라벨
    const yRenderer = yAxis.get('renderer');
    yRenderer.grid.template.setAll({
      visible: true,
      stroke: am5.color(0x404040),
      strokeOpacity: 0.76,
    }); // y축 배경선
    yRenderer.labels.template.setAll({
      // visible: false,
      oversizedBehavior: 'fit',
      textAlign: 'left',
      fill: am5.color(0xa6a6a6),
      paddingRight: 8,
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
          valueXField: 'date',
          stroke,
          // maskBullets: false,
          fill: stroke,
          stacked: true,
          // locationX: 0,
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

      const cursor = chart.set(
        'cursor',
        am5xy.XYCursor.new(root, {
          // behavior: 'none',
          xAxis,
        }),
      );
      cursor.lineX.setAll({
        stroke: am5.color(0x404040),
        strokeDasharray: [0, 0],
      });
      cursor.lineY.set('visible', false);
      series.data.setAll(data);
      series.appear();
    };
    const createSeriesLine = (name: string, field: string, stroke: any) => {
      const seriesLine = chart.series.push(
        am5xy.LineSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueYField: field,
          valueXField: 'date',
          stroke,
          minDistance: 0,
          minBulletDistance: 10,
          maskBullets: false,
          tooltipX: am5.percent(100),
        }),
      );

      seriesLine.strokes.template.setAll({
        strokeWidth: 2,
        stroke,
        tooltipX: 8,
      });

      const tooltip = seriesLine.set(
        'tooltip',
        am5.Tooltip.new(root, {
          pointerOrientation: 'horizontal',
          getFillFromSprite: false,
          getLabelFillFromSprite: false,
          paddingRight: 8,
          paddingLeft: 8,
          paddingTop: 6,
          paddingBottom: 6,
        }),
      );

      tooltip.get('background')?.setAll({
        // interactive: true,
        opacity: 1,
        fill: am5.color(0x404040),
        stroke: am5.color(0x404040),
        fillOpacity: 1,
        // width: 95,
      });

      tooltip.label.adapters.add('html', (html, target) => {
        const categoryValueObj: any = target.dataItem?.dataContext;

        if (categoryValueObj) {
          const newCategoryValueObj = omit(categoryValueObj, ['date']); // date 뺀 값 가져오기
          const newObjArray = Object.entries(newCategoryValueObj).map(([key, value]) => ({ key, value }));

          let text = '';
          text += `<div class="stack-tooltip">`;

          category.forEach((item, index) => {
            const categoryValue = newObjArray[index];
            if (categoryValue !== undefined) {
              const currentValue = categoryValue.value;
              const numberFormatCategory = (value: any) => {
                if (value !== undefined) {
                  // 단위 표시는 개발에서 확인 필요
                  // (단위를 여기서 변경하지 않고 가져올 때 변환된 데이터를 가져오면 numberFormatCategory(currentValue) -> currentValue만 적어주면 됩니다.)
                  if (value > 100000 && value <= 1000000000) {
                    return `${(Math.floor((value / 100000) * 100) / 100).toLocaleString('ko-kR')  }M`;
                  } if (value > 1000000000) {
                    return `${(Math.floor((value / 1000000000) * 100) / 100).toLocaleString('ko-kR')  }B`;
                  } if (value <= 100000) {
                    return Math.floor((value / 100) * 100).toLocaleString('ko-kR');
                  }
                }
              };
              if (index === 0) {
                // total
                text += `<dl class="total">
                  <dt>${category[index]}</dt>
                  <dd>&dollar;${numberFormatCategory(currentValue)}</dd>
                </dl>`;
              } else {
                text += `<dl class="category">
                    <dt><span style="background-color: ${colorChip[index - 1]}"></span>${category[index]}</dt>
                    <dd>&dollar;${numberFormatCategory(currentValue)}</dd>
                  </dl>`;
              }
            }
          });

          text += '</div>';
          return text;
        }
      });

      seriesLine.bullets.push(() => {
        // create the circle first
        const circle = am5.Circle.new(root, {
          radius: 4.5,
          interactive: true,
          fill: am5.color(0x1a1a1a),
          stroke: am5.color(0xffffff),
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

      const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
      let previousBulletSprites: any = [];
      const cursorMoved = () => {
        for (let i = 0; i < previousBulletSprites.length; i += 1) {
          previousBulletSprites[i].unhover();
        }
        previousBulletSprites = [];
        const dataItem = seriesLine?.get('tooltip')?.dataItem;
        if (dataItem?.bullets) {
          const bulletSprite = dataItem.bullets[0].get('sprite');
          bulletSprite.hover();
          previousBulletSprites.push(bulletSprite);
        }
      };

      cursor.events.on('cursormoved', cursorMoved);
      cursor.lineX.set('visible', true);
      cursor.lineY.set('visible', false);

      cursor.lineX.setAll({
        stroke: am5.color(0xffffff),
        strokeDasharray: [2, 2],
      });

      seriesLine.data.setAll(data);
    };

    // 더미 데이터 용
    const dataArray = ['wonderDao', 'patronDao', 'Top3Dao', 'etc'];
    for (let i = category.length - 1; i >= 0; i -= 1) {
      if (i === 0) {
        createSeriesLine('Total', 'total', am5.color(0xffffff));
      } else {
        createSeries(category[i], dataArray[i - 1], colorChip[i - 1]);
      }
    }

    chart.appear(1000, 100);

    return () => root.dispose();
  }, [data, category, colorChip, id]);
  return <Chart id={id}/>;
};

const Chart = styled.div([
  tw`w-full`,
  tw`h-[252px]`,
  css`
    .stack-tooltip {
      ${tw`overflow-hidden`}
      ${tw`bg-gray-10`}
      ${tw`rounded-[2px]`}

      dl {
        ${tw`flex`}
        ${tw`items-center`}
        ${tw`justify-between`}

        & + dl {
          ${tw`mt-1`}
        }

        &.total {
          dt {
            ${tw`pl-0`}
          }
        }
      }

      dt {
        ${tw`relative`}
        ${tw`flex`}
        ${tw`w-[88px]`}
        ${tw`items-center`}
        ${tw`text-white`}
        ${tw`pl-2`}
        ${tw`text-xs`}

        span {
          ${tw`absolute`}
          ${tw`top-1/2`}
          ${tw`left-0`}
          ${tw`block`}
          ${tw`w-1`}
          ${tw`h-1`}
          ${tw`mt-[-2px]`}
          ${tw`rounded-[50%]`}
        }
      }

      dd {
        ${tw`min-w-[52px]`}
        ${tw`ml-1`}
        ${tw`text-white`}
        ${tw`text-right`}
        ${tw`font-bold`}
        ${tw`leading-normal`}
        ${tw`text-xs`}
      }
    }
  `,
]);

export default StackLineChartDark;