import React from 'react';

import dynamic from 'next/dynamic';
import { basicChartDataType } from "./data/chartDummyData";

const StackLineChart = dynamic(() => import('./StackLineChart'), {ssr: false});

interface LineChartPropsType {
  data: basicChartDataType[];
  category: string[];
}

export const TokensStackLineChart = ({ data, category }: LineChartPropsType) => {

  return (
    <StackLineChart data={data} category={category} />
  )
};