import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import sns from '@components/common/footer/sns/links.json';
import { ReactSVG } from 'react-svg';
import PapyrusIcon from '@/assets/icons/common/icon_papyrus.svg';
import Link from 'next/link';
import { NileCDNLoader } from '@utils/image/loader';

export const FooterSnsSection = () => {
  return (
    <Container>
      <Link href="/">
        <PapyrusWrapper>
          <PapyrusIcon />
        </PapyrusWrapper>
      </Link>
      <LinkWrapper>
        {
          sns.map(({ id, link, icon }) => (
            <LinkItem key={id} href={link} target="_blank" rel="noreferrer">
              <ReactSVG src={NileCDNLoader({ src: icon })} />
            </LinkItem>
          ))
        }
      </LinkWrapper>
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`gap-x-0 lg:gap-x-0`,
  tw`order-1 md:order-2`,
]);

const PapyrusWrapper = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`relative`,
  tw`pr-[20px]`,
  tw`mr-[10px] md:mr-[24px]`,
  tw`cursor-pointer`,

  css`
    &:after {
      display: block;
      clear: both;
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 12px;
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-50%);
    }

    svg {
      width: 71px;
      height: 32px;

      @media (min-width: 1024px) {
        padding-right: 20px;
        padding-left: 20px;
        width: 120px;
        height: 40px;
        border-radius: 40px;
        background-color: transparent;
        transition: background-color 0.3s;

        &:hover {
          background-color: #fff;
          transition: background-color 0.3s;

          .icon_papyrus_svg__papyrus-path {
            fill: #000;
          }
        }
      }
    }
  `,
]);

const LinkWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`md:gap-x-[20px]`,
]);

const LinkItem = styled.a([
  tw`w-[32px] lg:w-[40px]`,
  tw`opacity-[.17]`,

  css`
    transition: 0.3s ease-in;

    &:hover {
      opacity: 1;
      transition: opacity 0.3s;
    }

    svg {
      width: 100%;
      height: auto;
    }
  `,
]);
