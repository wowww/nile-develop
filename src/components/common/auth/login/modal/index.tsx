import { Modal } from 'antd';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { LoginModalState } from '@recoil/atoms/auth';
import styled from '@emotion/styled';
import classNames from 'classnames';
import { NileCDNLoader } from '@utils/image/loader';
import tw from 'twin.macro';
import { display } from 'styled-system';
import { WemixWalletQRCode } from '@components/wemix';
import { useMetamaskSDK } from '@utils/metamask';
import { useLayoutResize } from '@utils/layout';
import {css, Global} from '@emotion/core';
import React, { useEffect, useState } from 'react';
import IconClose from '@/assets/icons/common/ico_close.svg';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_right.svg';
import IconLink from '@/assets/icons/common/ico_link.svg';
import {ReactSVG} from "react-svg";

export type LoginModalProps = {
  onRefresh: () => void;
};

export const LoginModal = ({ onRefresh }: LoginModalProps) => {
  const [expireTime, setExpireTime] = useState(0);
  const [modalState, setModalState] = useRecoilState(LoginModalState);
  const { isTablet } = useLayoutResize();
  const { login } = useMetamaskSDK();

  useEffect(() => {
    setExpireTime(modalState.open ? 180 : 0);
  }, [modalState.open, setExpireTime]);

  return (
    <ConnectModalWrapper
      title="지갑 연결"
      centered
      closable
      width="none"
      transitionName=""
      maskTransitionName=""
      className={classNames('modal-wrap', 'modal-size-lg')}
      wrapClassName={classNames('header-connect-modal-wrap', { active: modalState.open })}
      closeIcon={<IconClose />}
      open={modalState.open}
      onOk={() => setModalState((prev) => ({ ...prev, open: false }))}
      onCancel={() => setModalState((prev) => ({ ...prev, open: false }))}
    >
      <Global styles={css`
        .header-connect-modal-wrap {
          top: inherit;
          ${tw`rounded-t-lg`}
          
          @media (min-width: 768px) {
            top: 0;
          }
        }
      `}/>
      <Container>
        <WemixWalletSection display={isTablet ? 'flex' : 'none'}>
          <QrWrapper>
            <WemixWalletQRCode requestUrl={modalState.uri ?? ''} expireTime={expireTime} onRefresh={onRefresh} />
          </QrWrapper>
          <StepsWrapper>
            <StepsTitle>WEMIX 3.0 Wallet</StepsTitle>
            <Steps>
              <Step>
                <StepIcon>
                  <ReactSVG src='https://file.mir4global.com/nile/resources/icons/common/ico_qrcode_step1.svg'/>
                </StepIcon>
                <StepTitle>STEP 1</StepTitle>
                <StepDescription>Open the Wallet App on mobile phone</StepDescription>
              </Step>
              <Step>
                <StepIcon>
                  <ReactSVG src='https://file.mir4global.com/nile/resources/icons/common/ico_qrcode_step2.svg'/>
                </StepIcon>
                <StepTitle>STEP 2</StepTitle>
                <StepDescription>Tap QR icon on the top</StepDescription>
              </Step>
              <Step>
                <StepIcon>
                  <ReactSVG src='https://file.mir4global.com/nile/resources/icons/common/ico_qrcode_step3.svg'/>
                </StepIcon>
                <StepTitle>STEP 3</StepTitle>
                <StepDescription>Verify after code scan</StepDescription>
              </Step>
            </Steps>
          </StepsWrapper>
        </WemixWalletSection>
        <MetamaskSection>
          <MetamaskButton display={isTablet ? 'none' : 'flex'}>
            <Image src="/icons/common/logo/ico_logo_wallet_wemix.svg" width={32} height={32} loader={NileCDNLoader} />
            <MetamaskButtonText>WEMIX Wallet</MetamaskButtonText>
            <IconArrow />
          </MetamaskButton>
          <MetamaskButton onClick={login}>
            <Image src="/icons/common/logo/ico_logo_wallet_metamask.svg" width={32} height={32} loader={NileCDNLoader} />
            <MetamaskButtonText>Metamask</MetamaskButtonText>
            <IconArrow />
          </MetamaskButton>
          <MetamaskLinkSection>
            <MetamaskLinkTitle>Metamask</MetamaskLinkTitle>
            <MetamaskLinkDescription>
              Learn how to connect
              <IconLink />
            </MetamaskLinkDescription>
          </MetamaskLinkSection>
        </MetamaskSection>
      </Container>
    </ConnectModalWrapper>
  );
};

const ConnectModalWrapper = styled(Modal)([
  css`
    ${tw`min-w-full md:min-w-min`}
    ${tw`md:px-6 md:py-5`}
    
    .ant-modal {
      ${tw`md:min-w-[790px]`}
      &-title {
        ${tw`font-bold md:text-[18px]`}
      }
      
      &-body {
        ${tw`px-5 py-6`}
      }
      
      &-header {
        ${tw`border-none`}
      }
      
      &-content {
        .ant-modal-close {
          &-x {
            ${tw`flex`}
            ${tw`justify-center`}
            ${tw`items-center`}
          }
          
          svg {
            ${tw`w-6 md:w-8`}
            ${tw`h-6 md:h-8`}
          }
        }
      }
    }
  `,
])

const Container = styled.div([
  tw`py-0`,
]);

const WemixWalletSection = styled.div([
  tw`flex`,
  tw`gap-x-5`,
  display,
]);

const QrWrapper = styled.div([
  tw`w-[300px]`,
  css`
    > div:first-child {
      ${tw`px-0`}
    }
  `,
])

const MetamaskButtonText = styled.span([
  tw`flex-1`,
  tw`mx-2`,
  tw`text-gray-0`,
  tw`text-left`,
  tw`md:text-[16px]`,
]);

const MetamaskButton = styled.button([
  tw`inline-flex`,
  tw`items-center`,
  tw`justify-between`,
  tw`font-bold`,
  tw`w-full md:w-80`,
  tw`p-4`,
  tw`border`,
  tw`border-solid`,
  tw`border-gray-80`,
  display,
  css`
    svg {
      ${tw`w-6`}
      ${tw`h-6`}
    }
  `,
]);

const MetamaskSection = styled.div([
  tw`flex`,
  tw`flex-col md:flex-row`,
  tw`items-center`,
  tw`mt-0 md:mt-4`,
  tw`gap-x-5`,
  tw`gap-y-4`,
]);

const MetamaskLinkTitle = styled.strong([
  display,
  tw`hidden md:block`,
  tw`text-[16px]`,
]);

const MetamaskLinkDescription = styled.a([
  tw`text-highlight`,
  tw`text-xs`,
  tw`mt-2 md:mt-0`,
  tw`inline-flex`,
  tw`items-center`,
  tw`underline`,
  css`
    svg {
      ${tw`ml-0.5`}
      ${tw`w-4`}
      ${tw`h-4`}
    }
    
    &:hover, 
    &:active {
      ${tw`text-highlight`}
      ${tw`underline`} 
    }
  `,
]);

const MetamaskLinkSection = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`p-0 md:px-5 md:py-3`,
  tw`mt-0`,
]);

const StepsWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-8`,
]);

const Steps = styled.ol([
  tw`flex`,
  tw`flex-col`,
  tw`gap-8`,
]);

const StepsTitle = styled.div([
  tw`text-[20px]`,
  tw`font-bold`,
  tw`md:min-w-[60px]`,
]);

const Step = styled.li([
  tw`relative`,
  tw`flex`,
  tw`gap-2`,
  tw`items-start`,
  css`
    &::before {
      ${tw`block`}
      ${tw`absolute`}
      ${tw`bg-gray-80`}
      ${tw`h-8`}
      ${tw`top-[-34px]`}
      ${tw`left-[14.5px]`}
      ${tw`w-0.5`}
      content: "";
    }

    &:first-child {
      svg {
        ${tw`w-5`}
        ${tw`h-5`}
      }
      &::before {
        ${tw`hidden`}  
      }
    }
  `,
]);

const StepIcon = styled.i([
  tw`relative`,
  tw`left-0`,
  tw`top-[-2px]`,
  tw`inline-flex`,
  tw`w-8 h-8`,
  tw`items-center`,
  tw`justify-center`,
  tw`bg-gray-90`,
  tw`rounded-full`,
]);

const StepTitle = styled.strong([
  tw`text-gray-0`,
  tw`font-bold`,
  tw`text-[16px]`,
]);

const StepDescription = styled.span([
  tw`text-gray-30`,
  tw`text-[16px]`,
]);
