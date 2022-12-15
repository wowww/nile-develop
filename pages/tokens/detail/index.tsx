import { useMemo, useState } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

import { TokensDetailHeader } from '@components/tokens/detail/header';
import { TokensDetailPriceBoard } from '@components/tokens/detail/board';
import { RadioTabButton } from '@components/common/button/radio';
import { TokensDetailChartArea } from '@components/tokens/detail/chart';
import { TokensDetailInfo } from '@components/tokens/detail/about';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TokensDetail = () => {
  const [currentTab, setCurrentTab] = useState<string>('price');
  const buttonList = useMemo(() => ([
    {
      text: 'Price',
      value: 'price',
    },
    {
      text: 'Volume',
      value: 'volume',
    },
    {
      text: 'Market Cap',
      value: 'market',
    },
  ]), []);

  return (
    <Container>
      <TokensDetailHeader />
      <Wrapper>
        <TokensDetailPriceBoard />
        <Content>
          <ButtonWrapper>
            <RadioTabButton buttonList={buttonList} currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </ButtonWrapper>
          <TokensDetailChartArea currentTab={currentTab} />
          <TokensDetailInfo />
        </Content>
      </Wrapper>
    </Container>
  );
};

const ButtonWrapper = styled.div([
  tw`mb-11`,
  tw`md:mb-9`,
  tw`xl:mb-10`,
]);

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`flex-shrink`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[30px]`,
  tw`flex-grow`,
  tw`flex-shrink`,
  tw`md:gap-[34px]`,
  tw`md:flex-row`,
  tw`xl:gap-12`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`pt-8`,
  tw`pb-[60px]`,
  tw`px-5`,
  tw`px-10`,
  tw`gap-5`,
  tw`md:gap-10`,
  tw`md:pt-10`,
  tw`md:pb-[80px]`,
  tw`xl:px-0`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'tokens']);
  return { props: { ...translations } };
};

export default TokensDetail;
