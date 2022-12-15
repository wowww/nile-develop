import React from 'react';

import dynamic from 'next/dynamic';
import {basicChartDataType} from "@components/market/history/chart/data/chartDummyData";

const StackLineChartDark = dynamic(() => import('./StackLineChartDark'), {ssr: false});

interface LineChartPropsType {
  data: basicChartDataType[];
  category: string[];
}

export const HomeStackLineChart = ({ data, category }: LineChartPropsType) => {

  return (
    <StackLineChartDark data={data} category={category} />
  )
};