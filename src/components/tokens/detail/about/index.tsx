import Link from "next/link";

import IconMedium from '@/assets/icons/common/logo/ico_medium.svg';
import IconTwitter from '@/assets/icons/common/logo/ico_twitter.svg';
import IconYoutube from '@/assets/icons/common/logo/ico_youtube.svg';
import IconFaceBook from '@/assets/icons/common/logo/ico_facebook.svg';
import IconTelegram from '@/assets/icons/common/logo/ico_telegram.svg';
import IconDiscord from '@/assets/icons/common/logo/ico_discord.svg';
import IconGitBook from '@/assets/icons/common/logo/ico_gitbook.svg';
import IconLink from '@/assets/icons/common/ico_link.svg';
import styled from "@emotion/styled";
import tw from "twin.macro";
import {useLayoutResize} from "@utils/layout";
import {useMemo} from "react";

export const TokensDetailInfo = () => {
  const { isTablet, isLargeDesktop } = useLayoutResize();

  const iconSize = useMemo(() => {
    if (isLargeDesktop) {
      return {width: 32, height: 32};
    }
    if (isTablet) {
      return {width: 40, height: 40};
    }
    return {width: 32, height: 32};
  }, [isTablet, isLargeDesktop]);

  const btnList = [
    {
      name: 'medium',
      icon: <IconMedium {...iconSize} />,
      link: '/',
    },
    {
      name: 'telegram',
      icon: <IconTelegram {...iconSize} />,
      link: '/',
    },
    {
      name: 'twitter',
      icon: <IconTwitter {...iconSize} />,
      link: '/',
    },
    {
      name: 'youtube',
      icon: <IconYoutube {...iconSize} />,
      link: '/',
    },
    {
      name: 'facebook',
      icon: <IconFaceBook {...iconSize} />,
      link: '/',
    },
    {
      name: 'discord',
      icon: <IconDiscord {...iconSize} />,
      link: '/',
    },
    {
      name: 'gitbook',
      icon: <IconGitBook {...iconSize} />,
      link: '/',
    },
  ];
  return (
    <Container>
      <Title>About WEMIX</Title>
      <Content>
        WEMIX는 고성능 EVM 호환 오픈소스 프로토콜입니다. SPoA(스테이킹 기반 권한증명) 컨센서스 알고리즘을 기반으로 작동하며, 이 알고리즘은 자격이 충분한 글로벌 파트너에 의해 운영되는 40개의 탈중앙화 권위 노드 및 온체인 커뮤니티 DAO가 보장합니다. 플랫폼 중심의 서비스 지향적인, 튼튼하고 효율적인 퍼블릭 블록체인으로 기획됐으며, 커뮤니티 구성원이 만들고 전 세계에서 이용할 수 있는 혁신적인 프로젝트와 앱의 보금자리입니다.
      </Content>
      <ButtonWrapper>
        <Link href="/">
          <StyledLink>
            <span>Official Website</span>
            <IconLink width={12} height={12} />
          </StyledLink>
        </Link>
        <ButtonList>
          {btnList.map((item) => (
            <ButtonListItem key={item.name}>
              <Link href={item.link} target="_blank">
                {item.icon}
              </Link>
            </ButtonListItem>
          ))}
        </ButtonList>
      </ButtonWrapper>
    </Container>
  );
};

const ButtonListItem = styled.li([
  tw`cursor-pointer`,
  `
    svg {
      path {
        fill: #A6A6A6;
      }
    }
  `,
]);

const ButtonList = styled.ul([
  tw`flex`,
  tw`gap-1`,
]);

const ButtonWrapper = styled.div([
  tw`mt-10`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-5`,
  tw`md:gap-6`,
  tw`xl:gap-4`,
  tw`xl:flex-row`,
  tw`xl:mt-[42px]`,
]);

const Content = styled.p([
  tw`mt-5`,
  tw`text-sm`,
  tw`text-gray-10`,
  tw`leading-[22px]`,
  tw`md:leading-6`,
  tw`md:text-base`,
  tw`md:text-gray-30`,
  tw`xl:text-black`,
  tw`xl:leading-[22px]`,
  tw`xl:text-sm`,
])

const Title = styled.h3([
  tw`text-xl`,
  tw`md:text-2xl`,
  tw`font-bold`,
  tw`text-black`,
]);

const Container = styled.div([
  tw`mt-[60px]`,
  tw`md:mt-[80px]`,
])

const StyledLink = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`w-[124px]`,
  tw`h-[28px]`,
  tw`gap-1`,
  tw`text-xs`,
  tw`border`,
  tw`border-gray-60`,
  tw`rounded-[2px]`,
  tw`cursor-pointer`,
  tw`md:w-[136px]`,
  tw`md:h-[32px]`,
  tw`xl:w-[132px]`,
  tw`xl:h-[28px]`,
]);