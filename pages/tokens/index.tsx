import tw from 'twin.macro';
import styled from '@emotion/styled';
import classNames from 'classnames';
import React, { useState } from 'react';
import { TokensBarChart } from '@components/tokens/chart/bar';
import { TinyChartDefaultData } from '@components/tokens/chart/bar/data/chartDummyData';
import { TokensStackLineChart } from '@components/tokens/chart/line/stack';
import { stackChartDefaultData } from '@components/tokens/chart/line/stack/data/chartDummyData';
import { TokensWemixPriceBanner } from '@components/tokens/banner';
import { TokensTable } from '@components/tokens/table';
import { TokensExchangeListBanner } from '@components/tokens/exchange';
import { useLayoutResize } from '@utils/layout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TokensPage = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('stack');
  const { isTablet } = useLayoutResize();

  const categoryList = [
    {
      value: 'stack',
      text: 'Market Cap',
    },
    {
      value: 'bar',
      text: 'Volume 24h',
    },
  ];

  const tableData = [
    {
      key: 1,
      name: 'Wrapped BNB',
      shortenName: 'klaytn',
      price: 237.53,
      price24h: 213.24,
      volume7d: 125.37,
      marketCap: 160.89,
    },
    {
      key: 2,
      name: 'Wrapped BNB',
      shortenName: 'klaytn',
      price: 213.53,
      price24h: 266.24,
      volume7d: 213.37,
      marketCap: 180.89,
    },
  ]

  const changePeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCategory(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Main>
          <Title>1 Token on NILE<br />is changing our life</Title>
        </Main>
        <ChartWrapper>
          <TokenInfo>
            <ToggleButtonGroup
              onChange={changePeriod}
            >
              {categoryList.map((type) => (
                <Label className={classNames({ checked: currentCategory === type.value })} key={type.value} >
                  <ToggleButton
                    value={type.value}
                    type="radio"
                    checked={currentCategory === type.value}
                  />
                  {type.text}
                </Label>
              ))}
            </ToggleButtonGroup>
            <ValueInfo>
              <Desc>Total Market Cap</Desc>
              <Amount>$4,841,012,349</Amount>
              <Date>2022-08-16 13:53 기준</Date>
            </ValueInfo>
          </TokenInfo>
          <Chart>
            { currentCategory === 'stack' ?
              <TokensStackLineChart data={stackChartDefaultData} category={['TIPO']} />
              : <TokensBarChart data={TinyChartDefaultData} isPeriod={false} height={isTablet ? 250 : 197}/>
            }
          </Chart>
        </ChartWrapper>
      </Wrapper>
      <TokensWemixPriceBanner data={TinyChartDefaultData} />
      <TokensTable data={tableData} />
      <TokensExchangeListBanner />
    </Container>
  )
};

const Chart = styled.div([
  tw`w-full`,
  `
    @media (min-width: 768px) {
      width: calc(100% - 335px);
    }

    @media (min-width: 1280px) {
      width: calc(100% - 356px);
    }
  `,
]);

const Desc = styled.span([
  tw`mb-2`,
  tw`leading-[100%]`,
]);

const Amount = styled.strong([
  tw`mb-4`,
  tw`text-[28px]`,
  tw`font-bold`,
  tw`md:text-[32px]`,
  tw`leading-[100%]`,
]);

const Date = styled.span([
  tw`text-xs`,
  tw`text-gray-30`,
  tw`leading-[100%]`,
]);

const ValueInfo = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const TokenInfo = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-6`,
  tw`md:gap-[56px]`,
  tw`xl:gap-[60px]`,
]);

const Wrapper = styled.div([
  tw`max-w-[1200px]`,
  tw`mx-auto`,
  tw`px-5`,
  tw`py-10`,
  tw`md:px-10`,
  tw`md:py-[50px]`,
  tw`xl:px-0`,
  tw`xl:py-[90px]`,
])

const ChartWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`md:justify-between`,
  tw`mt-[60px]`,
  tw`md:flex-row`,
  tw`md:mt-8`,
])

const Container = styled.div([
  tw`w-full`,
]);

const Main = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const Title = styled.div([
  tw`text-black`,
  tw`font-bold`,
  tw`font-header`,
  tw`text-2xl`,
  tw`leading-[28px]`,
  tw`md:text-[40px]`,
  tw`md:leading-[48px]`,
]);

const ToggleButtonGroup = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`gap-2`,
]);

const ToggleButton = styled.input([
  tw`hidden`,
]);

const Label = styled.label(({ className }) => [
  tw`inline-flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`h-9`,
  tw`px-[20px] py-[1px]`,
  tw`rounded-full`,
  tw`w-fit`,
  tw`text-sm`,
  tw`md:text-base`,
  tw`cursor-pointer`,
  tw`border`,
  tw`border-black`,
  tw`whitespace-nowrap`,
  className?.includes('checked') && [
    tw`text-white`,
    tw`bg-black`,
  ],
]);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'tokens']);
  return { props: { ...translations } };
};

export default TokensPage;
