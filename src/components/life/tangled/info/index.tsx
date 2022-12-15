import IconHomepage from '@/assets/icons/common/social/ico_homepage.svg';
import IconTwitter from '@/assets/icons/common/social/ico_twitter.svg';
import IconDiscord from '@/assets/icons/common/social/ico_discord.svg';

import Link from "next/link";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { css } from '@emotion/core';

export const TangledInformation = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Check more information</Title>
        <LinkWrapper>
          <Link href="https://tangled.im/" target="_blank" rel="noopener noreferrer" title="새창열림">
            <IconHomepage width={52} height={52} />
          </Link>
          <Link href="https://twitter.com/tangled_NFT" target="_blank" rel="noopener noreferrer" title="새창열림">
            <IconTwitter width={52} height={52} />
          </Link>
          <Link href="https://discord.com/invite/tUNwSykFGb" target="_blank" rel="noopener noreferrer" title="새창열림">
            <IconDiscord width={52} height={52} />
          </Link>
        </LinkWrapper>
        <TangledImage />
      </Wrapper>
    </Container>
  );
};

const TangledImage = styled.span([
  `background: url('https://file.mir4global.com/nile/resources/img/tangled/img_life_info_shape01.png') center / 100% no-repeat`,
  tw`absolute`,
  tw`right-[-38px]`,
  tw`bottom-[-66px]`,
  tw`w-[171px]`,
  tw`h-[174px]`,
  tw`md:right-[-9px]`,
  tw`md:bottom-[-25px]`,
  tw`md:w-[246.75px]`,
  tw`md:h-[251px]`,
  tw`xl:right-0`,
  tw`xl:w-[290px]`,
  tw`xl:h-[295px]`,
]);

const LinkWrapper = styled.div([
  tw`flex`,
  tw`gap-4`,
  tw`md:gap-6`,
  css`
    svg {
      ${tw`cursor-pointer`}
      path {
        fill: #fff;
      }
    }
  `,
])

const Title = styled.strong([
  tw`text-xl`,
  tw`text-white`,
  tw`font-bold`,
  tw`md:text-2xl`,
  tw`xl:text-[32px]`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`justify-center`,
  tw`relative`,
  tw`gap-3`,
  tw`h-[200px]`,
  tw`w-full`,
  tw`px-5`,
  tw`md:h-[260px]`,
  tw`md:px-10`,
  tw`md:gap-5`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
  tw`xl:px-0`,
  tw`xl:h-[290px]`,
  tw`xl:mt-5`,
])

const Container = styled.div([
  tw`mt-[60px]`,
  tw`overflow-hidden`,
  tw`md:mt-[100px]`,
  tw`xl:mt-[120px]`,
  `
    background: #611fb6 url('https://file.mir4global.com/nile/resources/img/tangled/bg_life_information_sm.png') 50% / cover no-repeat;
    
    @media (min-width: 768px) {
      background: #611fb6 url('https://file.mir4global.com/nile/resources/img/tangled/bg_life_information_md.png') 50% / cover no-repeat;
    }
    
    @media (min-width: 1280px) {
      background: #611fb6 url('https://file.mir4global.com/nile/resources/img/tangled/bg_life_information.png') 50% / cover no-repeat
    }
  `,
]);