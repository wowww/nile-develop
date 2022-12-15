import React, {useState} from 'react';

import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import tw from "twin.macro";
import {ChartPeriodToggleButton} from "@components/common/chart/togglebutton";

const TinyChart = dynamic(() => import('./TinyChart'), {ssr: false});

interface LineChartPropsType {
  data: any[];
}

export const TokensTinyLineChart = ({ data }: LineChartPropsType) => {
  const [currentPeriod, setCurrentPeriod] = useState('day');

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
      <ChartPeriodToggleButton periodType={periodType} setPeriod={setCurrentPeriod} dark />
      <TinyChart data={data} height={46} />
    </Container>
  )
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
]);