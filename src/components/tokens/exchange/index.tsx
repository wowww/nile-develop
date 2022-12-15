import { useState } from 'react';

// images
import Bithumb from '@/assets/icons/exchange/icon_bithumb.svg';
import GateIo from '@/assets/icons/exchange/icon_gateio.svg';
import MEXC from '@/assets/icons/exchange/icon_MEXC.svg';
import Korbit from '@/assets/icons/exchange/icon_korbit.svg';
import LBank from '@/assets/icons/exchange/icon_lbank.svg';
import ByBit from '@/assets/icons/exchange/icon_bybit.svg';
import Probit from '@/assets/icons/exchange/icon_probit.svg';
import CoinOne from '@/assets/icons/exchange/icon_coinone.svg';
import UpBit from '@/assets/icons/exchange/icon_upbit.svg';
import Huobi from '@/assets/icons/exchange/icon_huobi.svg';
import KuCoin from '@/assets/icons/exchange/icon_kucoin.svg';
import classNames from "classnames";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Link from "next/link";

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg'

export const TokensExchangeListBanner = () => {
  const imgSize = { width: "100%", height: "100%" };
  const exchangeList = [
    {
      icon: <UpBit {...imgSize} />,
      link: 'https://upbit.com/exchange?code=CRIX.UPBIT.KRW-WEMIX',
    },
    {
      icon: <Bithumb {...imgSize} />,
      link: 'https://www.bithumb.com/trade/order/WEMIX_KRW',
    },
    {
      icon: <GateIo {...imgSize} />,
      link: '',
    },
    {
      icon: <LBank {...imgSize} />,
      link: '',
    },
    {
      icon: <Huobi {...imgSize} />,
      link: '',
    },
    {
      icon: <ByBit {...imgSize} />,
      link: '',
    },
    {
      icon: <MEXC {...imgSize} />,
      link: '',
    },
    {
      icon: <Korbit {...imgSize} />,
      link: '',
    },
    {
      icon: <CoinOne {...imgSize} />,
      link: '',
    },
    {
      icon: <KuCoin {...imgSize} />,
      link: '',
    },
    {
      icon: <Probit {...imgSize} />,
      link: '',
    },
  ];
  const [activateShowMore, setActivateShowMore] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Title>Buy WEMIX</Title>
        <Desc>WEMIX가 상장된 가상자산 거래소에서 WEMIX를 구매할 수 있습니다.</Desc>
        <ExchangeList className={classNames({ active: activateShowMore })}>
          {exchangeList.map((e, idx) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <ExchangeListItem key={idx}>
                <Link href={e.link} target="_blank">
                  {e.icon}
                </Link>
              </ExchangeListItem>
            );
          })}
        </ExchangeList>
        <ButtonWrapper>
          <TextButton
            type="button"
            onClick={() => setActivateShowMore(!activateShowMore)}
          >
            { activateShowMore ?
              <>
                Show Less<IconArrowUp  width={12} height={12} />
              </>
              :
              <>
                Show More<IconArrow width={12} height={12} />
              </>
            }
          </TextButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const ButtonWrapper = styled.div([
  tw`w-full`,
  tw`flex`,
  tw`justify-center`,
  tw`mt-6`,
  tw`items-center`,
  tw`md:mt-[34px]`,
  tw`xl:mt-10`,
]);

const IconArrowUp = styled(IconArrow)([
  `transform: rotate(180deg)`,
]);

const TextButton = styled.button([
  tw`flex`,
  tw`gap-[6px]`,
  tw`text-xs`,
  tw`text-white`,
  `
    svg {
      path {
        fill: #fff;
      }
    }
  `,
]);

const ExchangeListItem = styled.li([
  tw`border`,
  tw`border-gray-30`,
  tw`rounded-[2px]`,
  tw`w-full`,
  tw`bg-gray-10`,
  tw`cursor-pointer`,
  tw`h-[84px]`,
  tw`xl:h-[100px]`,
]);

const ExchangeList = styled.ul(({ className }) => [
  tw`grid`,
  tw`w-full`,
  tw`grid-cols-2`,
  tw`gap-2`,
  tw`mt-6`,
  tw`max-h-[179px]`,
  tw`overflow-y-hidden`,
  `
    transition: max-height .5s;
    will-change: max-height;
  `,
  tw`md:gap-5`,
  tw`md:grid-cols-4`,
  tw`md:max-h-[84px]`,
  tw`md:mt-5`,
  tw`xl:gap-4`,
  tw`xl:grid-cols-6`,
  tw`xl:max-h-[100px]`,
  className?.includes('active') && [
    `max-height: 700px !important`,
  ],
]);

const Desc = styled.span([
  tw`text-sm`,
  tw`mt-2`,
  tw`text-gray-60`,
  tw`leading-[1.5]`,
  tw`md:text-base`,
  tw`xl:text-sm`,
]);

const Title = styled.h2([
  tw`font-header`,
  tw`font-bold`,
  tw`text-xl`,
  tw`leading-[1.2]`,
  tw`text-white`,
  tw`md:text-[32px]`,
  tw`xl:text-3xl`,
]);

const Wrapper = styled.div([
  tw`w-full`,
  tw`px-5`,
  tw`py-10`,
  tw`md:px-10`,
  tw`md:py-[60px]`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
  tw`xl:px-0`,
]);

const Container = styled.div([
  tw`bg-gray-10`,
  tw`mt-[60px]`,
  tw`md:mt-[80px]`,
]);