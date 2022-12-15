import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useMemo } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import IconTwitter from '@/assets/icons/common/social/ico_twitter.svg';
import IconInstagram from '@/assets/icons/common/social/ico_instagram_line.svg';
import IconCopyLink from '@/assets/icons/common/ico_copy_link.svg';
import IconSetting from '@/assets/icons/common/ico_setting.svg';
import IconCopy from '@/assets/icons/common/ico_copy.svg';

import { Avatar, message } from 'antd';
import { useLayoutResize } from '@utils/layout';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { CryptoWallet } from '@recoil/atoms';
import { useWalletFormatter } from '@utils/formatter/wallet';

export const MypageProfile = () => {
  const { isTablet, isLargeDesktop } = useLayoutResize();
  const wallet = useRecoilValue(CryptoWallet);
  const { shorten } = useWalletFormatter();

  const snsList = useMemo(() => ([
    {
      link: 'https://twitter.com/PICDOT',
      name: 'twitter',
      icon: <IconTwitter width={isTablet && !isLargeDesktop ? 32 : 24} height={isTablet && !isLargeDesktop ? 32 : 25} />,
    },
    {
      link: 'https://www.instagram.com/picdot_studio/',
      name: 'instagram',
      icon: <IconInstagram width={isTablet && !isLargeDesktop ? 32 : 24} height={isTablet && !isLargeDesktop ? 32 : 25} />,
    },
    {
      link: 'https://',
      name: 'link',
      icon: <IconCopyLink width={isTablet && !isLargeDesktop ? 32 : 24} height={isTablet && !isLargeDesktop ? 32 : 25} />,
    },
  ]), [isTablet, isLargeDesktop]);

  return (
    <Container>
      <Wrapper>
        <Avatar size={isTablet ? 100 : 64}>
          <span className="a11y">프로필 설정</span>
        </Avatar>
        <ProfileInfo>
          <Name>
            스칼렛장
            <Link href="/mypage/profile">
              <StyledIconSetting width={20} height={20} />
            </Link>
          </Name>
          <CopyToClipboard text={wallet.address ?? ''}>
            <StyledButton type="button" onClick={() => message.info('지갑 주소가 복사되었습니다.')}>
              {isTablet ? wallet.address : shorten(wallet.address)}
              <IconCopy />
              <span className="a11y">지갑 주소 복사</span>
            </StyledButton>
          </CopyToClipboard>
          <Desc>
            I write about health, science, and psychology. My work has appeared in Time magazine, the New York Times, Vice, and elsewhere. I live in
            Germany.
          </Desc>
        </ProfileInfo>
        <SnsBtnList>
          {snsList.map((item) => (
            <li key={`sns-list-${item.name}`}>
              <Link href={item.link} target="_blank" rel="noopener noreferrer" title="새창열림">
                <div>
                  {item.icon}
                  <span className="a11y">{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </SnsBtnList>
      </Wrapper>
    </Container>
  );
};

const SnsBtnList = styled.ul([
  tw`flex`,
  tw`gap-3`,
  tw`mt-6`,
  `
    svg {
      cursor: pointer;

      path {
        fill: #fff;
      }
    }
  `,
  tw`md:absolute`,
  tw`md:mt-0`,
  tw`md:top-[14px]`,
  tw`md:right-[40px]`,
  tw`xl:top-[25px]`,
  tw`xl:right-0`,
]);

const StyledButton = styled.button([
  tw`flex`,
  tw`items-center`,
  tw`mt-1`,
  tw`text-gray-60`,
  tw`text-sm`,
  tw`gap-1`,
  tw`hover:text-white`,
  tw`w-fit`,
  `transition: all .3s ease-in-out`,
  tw`md:text-base`,
  tw`md:leading-[1.5]`,
  tw`xl:text-sm`,
  tw`xl:leading-[22px]`,
]);

const Desc = styled.p([
  tw`text-sm`,
  tw`leading-[22px]`,
  tw`max-w-[580px]`,
  tw`mt-4`,
  tw`text-gray-60`,
  tw`md:text-base`,
  tw`md:leading-[1.5]`,
  tw`xl:text-sm`,
  tw`xl:leading-[22px]`,
]);

const Name = styled.h2([
  tw`text-xl`,
  tw`leading-none`,
  tw`flex`,
  tw`items-center`,
  tw`text-white`,
  tw`font-bold`,
  tw`md:text-2xl`,
]);

const StyledIconSetting = styled(IconSetting)([
  tw`cursor-pointer`,
  tw`ml-1`,
]);

const ProfileInfo = styled.div([
  tw`mt-5`,
  tw`w-full`,
  tw`flex`,
  tw`flex-col`,
]);

const Container = styled.div([
  tw`pt-[40px]`,
  tw`pb-[88px]`,
  tw`bg-black`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`px-5`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
  tw`relative`,
]);
