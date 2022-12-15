import IconNotice from '@/assets/icons/common/ico_notice.svg';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';
import classNames from 'classnames';
import moment from 'moment-timezone';
import { useMemo, useState } from 'react';
import { LifeCountdownText } from '@components/life/countdown';

interface Props {
  show?: boolean;
  status: 'upcoming' | 'buy-now';
  sellType: 'auction' | 'fixed' | 'raffle';
  downloadLink?: string;
  nftLink?: string;
  tokensLink?: string;
  samePrice?: boolean;
}

export const LifeFloatingBar = ({ show, status, sellType, downloadLink, nftLink, tokensLink, samePrice }: Props) => {

  const targetDate = moment.tz(process.env.NEXT_PUBLIC_ENV_NFT_SALE_START_DATE, 'Asia/Seoul');
  const remainSeconds = useMemo(() => targetDate.diff(moment(), 'seconds'), [targetDate]);
  const [currentState, setCurrentState] = useState<string>('upcoming');

  return (
    <Container className={classNames({ show })}>
      <Wrapper>
        <Content>
          <ContentItem>
            <Desc>
              {status === 'upcoming' && (
                <>
                  {sellType === 'auction' && 'Auction Starts In'}
                  {sellType === 'fixed' && 'Sales Starts In'}
                </>
              )}
              {status === 'buy-now' && (
                <>
                  {sellType === 'auction' && 'Starting Bid'}
                  {(sellType === 'fixed' || sellType === 'raffle') && (samePrice ? 'Fixed Price' : 'From')}
                </>
              )}
            </Desc>
            {
              {
                'upcoming': <Value><LifeCountdownText expireTime={remainSeconds} /><StyledIconNotice /></Value>,
                'buy-now': <Value>1,100 WEMIX$</Value>,
              } [status]
            }
          </ContentItem>
          {status === 'buy-now' && (
            {
              auction: '',
              fixed:
                <ContentItem>
                  <Desc>NFT left</Desc>
                  <Value>214/1000</Value>
                </ContentItem>,
              raffle:
                <ContentItem>
                  <Desc>Sales Ends In</Desc>
                  <Value><LifeCountdownText expireTime={remainSeconds} /></Value>
                </ContentItem>,
            } [sellType]
          )}
        </Content>
        <ButtonWrapper>
          {downloadLink &&
            <Link href={downloadLink} target="_blank">
              <StyledButton className={classNames('dark')}>Download App</StyledButton>
            </Link>
          }
          {nftLink &&
            <Link href={nftLink} target="_blank">
              <StyledButton>{status === 'upcoming' ? 'ViewNFT' : 'Buy NFT'}</StyledButton>
            </Link>
          }
          {tokensLink &&
            <Link href={tokensLink} target="_blank">
              <StyledButton>ViewTokens</StyledButton>
            </Link>
          }
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

LifeFloatingBar.defaultProps = {
  show: false,
  downloadLink: '/',
  nftLink: '/',
  tokensLink: null,
  samePrice: false,
}

const StyledIconNotice = styled(IconNotice)([
  tw`ml-3`,
  tw`w-6`,
  tw`h-6`,
  `
    path {
      fill: #fff;
    }
  `,
])

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`gap-3`,
  tw`w-full`,
  tw`xl:w-fit`,
]);

const StyledButton = styled.span(({ className }) => [
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`text-sm`,
  tw`font-bold`,
  tw`leading-[22px]`,
  tw`w-full`,
  tw`h-[52px]`,
  tw`xl:w-[200px]`,
  tw`cursor-pointer`,
  tw`bg-white`,
  tw`text-black`,
  tw`hover:bg-gray-80`,
  className?.includes('dark') && [
    tw`border`,
    tw`border-white`,
    tw`text-white`,
    tw`bg-black`,
    tw`hover:bg-gray-10`,
  ],
]);

const Value = styled.strong([
  tw`flex`,
  tw`font-bold`,
  tw`text-2xl`,
  tw`text-white`,
  tw`leading-[25px]`,
]);

const Desc = styled.span([
  tw`text-base`,
  tw`text-white`,
  tw`leading-[25px]`,
  `letter-spacing: 0.01em`,
]);

const ContentItem = styled.div([
  tw`flex`,
  tw`gap-2`,
  tw`items-center`,
]);

const Content = styled.div([
  tw`hidden`,
  tw`gap-6`,
  tw`items-center`,
  tw`xl:flex`,
]);


const Container = styled.div(({ className }) => [
  tw`fixed`,
  tw`z-[300]`,
  tw`bottom-0`,
  tw`left-0`,
  tw`w-full`,
  tw`bg-black`,
  `
    transform: translateY(101%);
    transition: transform .3s;
  `,
  className?.includes('show') && [
    `transform: translateY(0)`,
  ],
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`justify-between`,
  tw`pt-[14px]`,
  tw`pb-[30px]`,
  tw`px-5`,
  tw`md:px-10`,
  tw`md:py-[14px]`,
  tw`xl:px-0`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);
