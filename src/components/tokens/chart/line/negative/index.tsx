import React from 'react';

import dynamic from 'next/dynamic';

const NegativeLineChart = dynamic(() => import('./NegativeLineChart'), {ssr: false});

interface LineChartPropsType {
  data: any[];
}

export const TokensDetailNegativeLineChart = ({ data }: LineChartPropsType) => {

  return (
    <NegativeLineChart data={data} />
  )
};