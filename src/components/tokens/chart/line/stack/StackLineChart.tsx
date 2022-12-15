import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import { basicChartDataType } from './data/chartDummyData';
import { v4 as uid } from 'uuid';
import styled from "@emotion/styled";
import tw from "twin.macro";

import { css } from '@emotion/core';
import {omit} from "lodash";

/* 22.10.27 수정: 차트 라이센스 추가 */
am5.addLicense('AM5C358434391');

interface LineChartPropsType {
  data: basicChartDataType[];
  category: string[];
}

const StackLineChart: React.FC<LineChartPropsType> = ({ data, category }) => {
  const id = uid();

  useEffect(() => {
    const root = am5.Root.new(id);
    const colorChip = [am5.color(0x9860ff), am5.color(0x36b8ff), am5.color(0x5e5ff5), am5.color(0xffd056)];

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        paddingRight: 0,
        maxTooltipDistance: 0,
      }),
    );
    /* 22.10.27 수정: 차트 zoomButton 제거 코드 추가 */
    chart.zoomOutButton.set('forceHidden', true);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        numberFormat: "#.#'B'",
        renderer: am5xy.AxisRendererY.new(root, {
          // opposite: true,
          visible: false,
        }),
      }),
    );
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'date',
        renderer: am5xy.AxisRendererX.new(root, {
          visible: false,
        }),
        paddingLeft: 15,
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
          minBulletDistance: 10,
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

      const tooltip = series.set(
        'tooltip',
        am5.Tooltip.new(root, {
          pointerOrientation: 'horizontal',
          getFillFromSprite: false,
          getLabelFillFromSprite: false,
          paddingRight: 8,
          paddingLeft: 8,
          paddingTop: 6,
          paddingBottom: 6,
          width: 95,
        }),
      );

      tooltip.get('background')!.setAll({
        opacity: 1,
        fill: am5.color(0xffffff),
        stroke: am5.color(0xd9d9d9),
        fillOpacity: 1,
      });

      tooltip.label.adapters.add('html', (html, target) => {
        const categoryValueObj: any = target.dataItem?.dataContext;

        if (categoryValueObj) {
          const newCategoryValueObj = omit(categoryValueObj, ['date']);
          const newObjArray = Object.entries(newCategoryValueObj).map(([key, value]) => ({key, value}));

          let text = '';
          text += `<div class="stack-tooltip"><ul>`;

          category.forEach((item, index) => {
            const categoryValue = newObjArray[index];
            if (categoryValue !== undefined) {
              if (category[index] === 'Total') {
                // total
                text += `
                  <li class="total">
                    <span class="name">${category[index]}</span>
                    <span class="figure">${categoryValue.value}B</span>
                  </li>`;
              } else {
                text += `
                  <li>
                    <span class="name"><span style="background-color: ${colorChip[index]}"></span>${category[index]}</span>
                    <span class="figure">${categoryValue.value}B</span>
                  </li>`;
              }
            }
          });

          text += '</ul></div>';
          return text;
        }
        return '';
      });

      const cursor = chart.set(
        'cursor',
        am5xy.XYCursor.new(root, {
          xAxis,
        }),
      );
      cursor.lineX.setAll({
        stroke: am5.color(0x404040),
        strokeDasharray: [0, 0],
      });
      cursor.lineY.set('visible', false);
      series.data.setAll(data);
      series.appear(1000);
    };

    createSeries('LineChart', 'value', am5.color(0x9860ff));
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [id, data, category]);

  return <Chart id={id} />;
};

const Chart = styled.div([
  tw`w-full`,
  tw`h-[197px]`,
  tw`md:h-[250px]`,
  css`
    .stack-tooltip {
      ${tw`flex`}
      ${tw`overflow-hidden`}
      ${tw`bg-white`}
      ${tw`rounded-[2px]`}
      ${tw`w-[80px]`}
      
      ul {
        ${tw`flex`}
        ${tw`flex-col`}
        ${tw`gap-[6px]`}
        ${tw`w-full`}
        
        li {
          ${tw`flex`}
          ${tw`w-full`}
          ${tw`items-center`}
          ${tw`justify-between`}
        }
      }

      .name {
        ${tw`flex`}
        ${tw`items-center`}
        ${tw`text-black`}
        ${tw`text-[10px]`}
        
        span {
          ${tw`rounded-full`}
          ${tw`w-1`}
          ${tw`h-1`}
          ${tw`mr-[3px]`}
        }
      }
      
      .figure {
        ${tw`text-xs`}
        ${tw`font-bold`}
        ${tw`text-black`}
      }
      .total {
        ${tw`mb-[2px]`}
      }
    }
  `,
]);

export default StackLineChart;
