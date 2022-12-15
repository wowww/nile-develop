import tw from "twin.macro";
import styled from "@emotion/styled";
import {TagData} from "@components/tagdata";
import { css } from '@emotion/core';
import {ChartPeriodToggleButton} from "@components/common/chart/togglebutton";
import {useEffect, useState} from "react";
import {TokensDetailNegativeLineChart} from "@components/tokens/chart/line/negative";
import {TokensBarChart} from "@components/tokens/chart/bar";
import {stackChartDefaultData} from "@components/tokens/chart/line/fill/data/chartDummyData";
import {TinyChartDefaultData} from "@components/tokens/chart/line/negative/data/chartDummyData";
import {TokensDetailFilledLineChart} from "@components/tokens/chart/line/fill";
import {useLayoutResize} from "@utils/layout";

export type TokensDetailChartAreaProps = {
  currentTab: string;
}

export const TokensDetailChartArea = ({ currentTab }: TokensDetailChartAreaProps) => {
  const [currentPeriod, setCurrentPeriod] = useState<string>('day');
  const { isTablet } = useLayoutResize();

  useEffect(() => {
    // TODO: 기간에 따른 차트 데이터 수정 로직
  }, [currentPeriod])

  const periodType = [
    {
      value: 'day',
      text: '1D',
    },
    {
      value: 'week',
      text: '1W',
    },
    {
      value: 'month',
      text: '1M',
    },
    {
      value: 'year',
      text: '1Y',
    },
    {
      value: 'all',
      text: 'All',
    },
  ]
  return (
    <Container>
      <Info>
        <Value>
          <span>$259.09</span>
          <TagData number={9.66} showSign format="%" backgroundType theme="light" />
        </Value>
        <DateWrapper>
          <Date>2022-08-16 13:53 기준</Date>
          <ChartPeriodToggleButton periodType={periodType} setPeriod={setCurrentPeriod} />
        </DateWrapper>
      </Info>
      <ChartWrapper>
        {
          {
            price: <TokensDetailNegativeLineChart data={TinyChartDefaultData} />,
            volume: <TokensBarChart data={TinyChartDefaultData} isPeriod={false} height={isTablet ? 213 : 201 }/>,
            market: <TokensDetailFilledLineChart data={stackChartDefaultData} />,
          } [currentTab]
        }
      </ChartWrapper>
    </Container>
  );
};

const ChartWrapper = styled.div([
  tw`mt-10`,
  tw`md:mt-8`,
  tw`w-full`,
]);

const Date = styled.span([
  tw`text-xs`,
  tw`leading-[100%]`,
  tw`text-gray-40`,
  tw`md:text-gray-30`,
  tw`xl:text-gray-40`,
]);

const Info = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`w-full`,
]);

const DateWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
]);

const Value = styled.div([
  tw`flex`,
  tw`gap-2`,
  tw`items-center`,
  css`
    span {
      ${tw`font-bold`}
      ${tw`text-[28px]`}
      ${tw`md:text-[32px]`}
      ${tw`leading-[100%]`}
    }
  `,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`min-h-[201px]`,
  tw`md:min-h-[213px]`,
  `flex-shrink`,
]);