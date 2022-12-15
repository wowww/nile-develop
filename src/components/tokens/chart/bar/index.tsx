import React, {useEffect, useState} from 'react';

import dynamic from 'next/dynamic';
import {basicChartDataType} from "@components/market/history/chart/data/chartDummyData";
import styled from '@emotion/styled';
import tw from "twin.macro";
import {ChartPeriodToggleButton} from "@components/common/chart/togglebutton";

const BarChart = dynamic(() => import('./BarChart'), {ssr: false});

interface LineChartPropsType {
  data: basicChartDataType[];
  isPeriod: boolean;
  height: number;
}

export const TokensBarChart = ({ data, isPeriod, height }: LineChartPropsType) => {
  const [period, setPeriod] = useState<string>("day");

  useEffect(() => {
    // 기간에 따른 데이터 수정 로직 필요
    console.log(period);
  }, [period]);

  const periodType = [
    {
      value: "day",
      text: "1D",
    },
    {
      value: "week",
      text: "1W",
    },
    {
      value: "month",
      text: "1M",
    },
    {
      value: "year",
      text: "1Y",
    },
    {
      value: "all",
      text: "ALL",
    },
  ];

  return (
    <Container>
      { isPeriod &&
        <ChartPeriodToggleButton periodType={periodType} setPeriod={setPeriod} />
      }
      <BarChart data={data} height={height} />
    </Container>
  )
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
]);