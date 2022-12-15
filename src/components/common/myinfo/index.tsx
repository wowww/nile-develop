import cn from 'classnames';
import Link from 'next/link';
import { LanguagesProps } from '@components/common/languages';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactSVG } from 'react-svg';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { Avatar, message } from 'antd';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import { useRecoilValue } from 'recoil';
import { CryptoWallet } from '@recoil/atoms';
import { useWalletFormatter } from '@utils/formatter/wallet';

export type HeaderSideButtonProps = {
  // TODO
} & LanguagesProps;

export const MyInformation = ({ ...props }: HeaderSideButtonProps) => {
  const wallet = useRecoilValue(CryptoWallet);
  const { shorten } = useWalletFormatter();

  return (
    <MypageBannerWrapper>
      <InfoWrapper>
        <Avatar size={48} />

        <MyInfo>
          <MyName>Scarlet Jang</MyName>
          <MyWallet>
            <span>{shorten(wallet.address)}</span>
            <CopyToClipboard text={wallet.address ?? ''}>
              <button onClick={() => message.info('지갑 주소가 복사되었습니다.')} type="button">
                <ReactSVG className="copy-icon" src="https://file.mir4global.com/nile/resources/icons/common/ico_copy.svg" />
                <span className={cn('a11y')}>지갑 주소 복사</span>
              </button>
            </CopyToClipboard>
          </MyWallet>
        </MyInfo>
      </InfoWrapper>
      <Link href="/mypage">
        <MypageLink>
          <IconArrow />
          <span className={cn('a11y')}>마이페이지 바로가기</span>
        </MypageLink>
      </Link>
    </MypageBannerWrapper>
  );
};

const MypageBannerWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`py-[20px]`,
  tw`px-[16px]`,
  tw`rounded`,
  tw`bg-black`,
  tw`text-white`,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`gap-3`,

]);

const MyInfo = styled.div([]);

const MyName = styled.h3([
  tw`text-[16px]`,
  tw`font-bold`,
]);

const MyWallet = styled.div([
  tw`flex`,
  tw`items-center`,

  css`
    span {
      ${tw`text-gray-60`}
      ${tw`text-xs`}

    }

    svg {
      ${tw`w-5 h-5`}
    }
  `,
]);

const MypageLink = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`cursor-pointer`,
  tw`w-8`,
  tw`h-8`,
  tw`rounded-full`,
  css`
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition: background-color 0.2s;
    }

    svg {
      ${tw`w-5`}
      ${tw`h-5`}
      transform: rotate(270deg);

      path {
        fill: #fff;
      }
    }
  `,
]);
