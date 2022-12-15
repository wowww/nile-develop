import React from 'react';

import dynamic from 'next/dynamic';

const FilledLineChart = dynamic(() => import('./FilledLineChart'), {ssr: false});

interface LineChartPropsType {
  data: any[];
}

export const TokensDetailFilledLineChart = ({ data }: LineChartPropsType) => {
  return (
    <FilledLineChart data={data} />
  )
};