import styled from '@emotion/styled';
import { forwardRef, useMemo, useState } from 'react';

import tw from 'twin.macro';
import classNames from 'classnames';
import { CardBannerCountdown } from '@components/market/countdown/card-v2';
import { TangledInformation } from '@components/life/tangled/info';
import { CustomTab } from '@components/common/tab';
import { TangledNfts } from '@components/life/tangled/tab/nft';
import { TangledOverview } from '@components/life/tangled/tab/overview';
import moment from 'moment-timezone';
import { useTranslation } from 'next-i18next';

export const TangledBottom = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation(['life', 'common']);
  const [currentTab, setCurrentTab] = useState<string>('nfts');
  const [status, setStatus] = useState<string>('upcoming');
  const targetDate = moment.tz(process.env.NEXT_PUBLIC_ENV_NFT_SALE_START_DATE, 'Asia/Seoul');
  const remainSeconds = useMemo(() => targetDate.diff(moment(), 'seconds'), [targetDate]);

  const tangledTabs = useMemo(() => ([
    {
      label: 'NFTs',
      key: 'nfts',
      children: <TangledNfts />,
    },
    {
      label: 'Overview',
      key: 'overview',
      children: <TangledOverview />,
    },
  ]), []);

  return (
    <Container>
      {
        {
          'upcoming':
            <ContentItem className={classNames('upcoming')} ref={ref}>
              <UpcomingText>
                {t('salesStartsIn', { ns: 'common' })}
              </UpcomingText>
              <CardBannerCountdown expireTime={remainSeconds} />
            </ContentItem>,
          'buy-now':
            <Content>
              <ContentItem ref={ref}>
                <Desc>Fixed Price</Desc>
                <Value>1,100 WEMIX$</Value>
              </ContentItem>
              <ContentItem ref={ref}>
                <Desc>NFT left</Desc>
                <Value>214/1,000</Value>
              </ContentItem>
            </Content>,
        } [status]
      }
      <TabWrapper>
        <CustomTab
          activeKey={currentTab}
          items={tangledTabs}
          onTabClick={(key: string) => {
            setCurrentTab(key);
          }}
          dark
        />
      </TabWrapper>
      <TangledInformation />
    </Container>
  );
});

const TabWrapper = styled.div([
  tw`mt-10`,
  tw`md:mt-[60px]`,
  tw`xl:mt-[80px]`,
]);

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`gap-[14px]`,
  tw`md:gap-5`,
  tw`xl:gap-10`,
  tw`xl:flex-row`,
  tw`xl:justify-center`,
]);

const UpcomingText = styled.strong([
  tw`font-bold`,
  tw`text-base`,
  tw`text-white`,
]);

const IconNoticeWrapper = styled.span([
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`bg-[#535353]`,
  tw`rounded-[56px]`,
  tw`w-8`,
  tw`h-8`,
  tw`ml-3`,
  `
    svg {
      path {
        fill: #fff;
      }
    }
  `,
]);

const Value = styled.strong([
  tw`flex`,
  tw`font-bold`,
  tw`text-2xl`,
  tw`text-white`,
  tw`leading-[24px]`,
  tw`md:text-[28px]`,
  tw`md:leading-[28px]`,
  tw`xl:leading-[24px]`,
  tw`xl:text-2xl`,
]);

const Desc = styled.span([
  tw`text-sm`,
  tw`text-white`,
  tw`leading-[22px]`,
  `letter-spacing: 0.01em`,
  tw`md:text-lg`,
  tw`md:leading-[26px]`,
  tw`xl:text-base`,
  tw`xl:leading-[24px]`,
]);

const ContentItem = styled.div(({ className }) => [
  tw`flex`,
  tw`gap-2`,
  tw`items-center`,
  className?.includes('upcoming') && [
    tw`flex-col`,
    tw`gap-8`,
  ],
]);

const Container = styled.div([
  `
    background: #000 url('https://file.mir4global.com/nile/resources/img/tangled/bg_tangled_bottom.png') 50% 0 / cover no-repeat;
    word-break: keep-all;
  `,
]);
