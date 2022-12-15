import React, {useEffect, useState} from 'react';

import dynamic from 'next/dynamic';
import { lineChartDefaultData } from "@components/market/history/chart/data/chartDummyData";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {ChartPeriodToggleButton} from "@components/common/chart/togglebutton";

const LineChart = dynamic(() => import('./LineChart'), {ssr: false});

export const MarketHistoryLineChart = () => {
  const [currentPeriod, setCurrentPeriod] = useState<string>("day");

  useEffect(() => {
    // 기간에 따른 데이터 수정 로직 필요
    console.log(currentPeriod);
  }, [currentPeriod]);

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
      <WrapTitle>
        <Title>Price History</Title>
        <ChartPeriodToggleButton periodType={periodType} setPeriod={setCurrentPeriod} />
      </WrapTitle>
      <LineChart id="line-chart" data={lineChartDefaultData}/>
    </Container>
  )
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
]);

const Title = styled.h2([
  tw`text-black`,
  tw`text-[18px]`,
  tw`font-bold`,
]);

const WrapTitle = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`justify-between`,
]);