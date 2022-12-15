import { useEffect, useMemo } from 'react';
import { isMobile } from 'react-device-detect';
import moment from 'moment';
import QRCode from 'qrcode.react';

import styled from '@emotion/styled';
import classNames from 'classnames';
import tw from 'twin.macro';
import { useCountdown } from '@utils/countdown';
import { NileCDNLoader } from '@utils/image/loader';
import { css } from '@emotion/core';
import { ReactSVG } from 'react-svg';

export type WemixAuthProps = {
  requestUrl: string;
  expireTime?: number;
  onRefresh?: () => void;
};

export const DEFAULT_EXPIRE_TIME = 180;

export const WemixWalletQRCode = ({ requestUrl, expireTime, onRefresh }: WemixAuthProps) => {
  const { remainTime, refresh } = useCountdown({ seconds: expireTime || DEFAULT_EXPIRE_TIME, onRefresh });

  const refreshable = useMemo(() => {
    return remainTime <= 0;
  }, [remainTime]);

  useEffect(() => {
    refresh();
  }, [requestUrl, expireTime, refresh]);

  useEffect(() => {
    if (isMobile && requestUrl) {
      setTimeout(() => window.open(requestUrl, '_blank'));
    }
  }, [requestUrl]);

  const remainTimeText = useMemo(() => {
    if (remainTime <= 0) return <em>Expired</em>;
    return <span>Time left: <em>{moment().startOf('day').seconds(remainTime).format('m:ss')}</em></span>;
  }, [remainTime]);

  return (
    <Container>
      <Wrapper>
        <Title>WEMIX Wallet</Title>
        <QRWrapper className={classNames({ refreshable })}>
          <QRCode
            value={requestUrl}
            size={200}
            imageSettings={{
              width: 48,
              height: 48,
              excavate: true,
              src: NileCDNLoader({ src: '/icons/common/logo/ico_logo_wallet_wemix.svg' }),
            }}
          />
          <RefreshIconWrapper onClick={refresh}>
            <RefreshIcon>
              <ReactSVG src={NileCDNLoader({ src: '/icons/common/ico_qrcode_refresh.svg' })} />
            </RefreshIcon>
          </RefreshIconWrapper>
        </QRWrapper>
        <CountdownTimer>{remainTimeText}</CountdownTimer>
      </Wrapper>
    </Container>
  );
};

WemixWalletQRCode.defaultProps = {
  expireTime: DEFAULT_EXPIRE_TIME,
  onRefresh: undefined,
};

const Container = styled.div([
  tw`flex`,
  tw`bg-white`,
  tw`border`,
  tw`border-gray-80`,
  tw`py-6 px-14`,
]);

const Wrapper = styled.div([
  tw`w-full`,
]);

const RefreshIconWrapper = styled.div([
  tw`absolute`,
  tw`hidden`,
  tw`justify-center`,
  tw`items-center`,
  tw`w-full h-full`,
  tw`inset-0`,
  tw`z-50`,
]);

const RefreshIcon = styled.span([
  tw`bg-white`,
  tw`rounded-full`,
  tw`p-2`,
  tw`w-[46px]`,
  tw`h-[46px]`,
  tw`justify-center`,
  tw`items-center`,
  css`
    svg {
      ${tw`md:w-5`}
      ${tw`md:h-5`}
    }
  `,
]);

const QRWrapper = styled.div([
  tw`relative`,
  css`
    &.refreshable {
      canvas {
        filter: blur(5px);
      }

      ${RefreshIconWrapper} {
        display: flex;
      }
    }

    & > canvas {
      margin: 1em auto;
    }
  `,
]);

const Title = styled.h3([
  tw`text-center`,
  tw`text-base`,
  tw`font-bold`,
  tw`md:text-[16px]`,
]);


const CountdownTimer = styled.div`
  ${tw`text-center`}
  ${tw`text-[20px]`}
  em {
    color: red;
    ${tw`not-italic`}
  }
`;
