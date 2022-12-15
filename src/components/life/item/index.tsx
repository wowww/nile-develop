import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { useLayoutResize } from '@utils/layout';
import { NileCDNLoader } from '@utils/image/loader';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { ReactSVG } from 'react-svg';

export type LifeNftCardProps = {
  id: number;
  tagText: string;
  tagColor?: string;
  title: string;
  desc: string;
  buttonLink: string;
  disabled?: boolean;
  data: { name: string; amount: string }[];
  thumbnail: string;
};

export const LifeNftCard = ({ id, tagText, tagColor, title, desc, buttonLink, disabled, data, thumbnail }: LifeNftCardProps) => {
  const { push } = useRouter();
  const { t } = useTranslation(['common', 'life']);
  const isPublished = false;
  const { isTablet } = useLayoutResize();

  const onClick = useCallback(() => {
    push(buttonLink).then(() => {
      // do nothing
    });
  }, [buttonLink, push]);

  return (
    <Container>
      <BackgroundImage style={{ backgroundImage: `url(${NileCDNLoader({ src: thumbnail })})` }} className="life-item-background" />
      <Wrapper>
        <SquareTag style={{ background: tagColor }}>{tagText}</SquareTag>
        {title === 'London Underground Station 264 Genesis' ? (
          <>
            <Title className="first-item">{title}</Title>
            <Desc className="first-item">{t(desc, { ns: 'life' })}</Desc>
          </>
          ) : (
            <>
              <Title>{title}</Title>
              <Desc>{t(desc, { ns: 'life' })}</Desc>
            </>
          )
        }

        <ButtonWrapper>
          <LinkButton
            disabled={disabled}
            className={cn({ disabled })}
            onClick={onClick}
          >
            {t('home.nft.button', { ns: 'life' })}
            {!isTablet && <ReactSVG src={NileCDNLoader({ src: '/icons/common/arrow/ico_arrow_right.svg' })} width={24} height={24} />}
          </LinkButton>
        </ButtonWrapper>
        {isPublished && (
          <DataList>
            {data.map((item) => {
              return (
                <DataItem key={item.name}>
                  <Name>{item.name}</Name>
                  <Value>{item.amount}</Value>
                </DataItem>
              );
            })}
          </DataList>
        )}
      </Wrapper>
    </Container>

  );
};

LifeNftCard.defaultProps = {
  tagColor: '#1A1A1A',
  disabled: false,
};

const BackgroundImage = styled.div([
  css`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    ${tw`h-[180px] md:h-[460px]`}
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
  `,
]);

const ButtonWrapper = styled.div([
  tw`mt-5`,
  tw`md:mt-[52px]`,
]);

const LinkButton = styled.button(({ className }) => [
  tw`flex`,
  tw`items-center`,
  tw`bg-white`,
  tw`px-0 md:px-6`,
  tw`py-2`,
  tw`text-sm md:text-base`,
  tw`border-0`,
  tw`gap-2`,
  tw`rounded`,
  tw`font-bold md:font-normal`,
  css`
    &:hover,
    &:active {
      ${tw`underline`}
    }
  `,
  className?.includes('disabled') && [
    tw`text-[#a6a6a6]`,
    css`
      &:hover,
      &:active {
        ${tw`no-underline`}
      }
      svg {
        path {
          fill: #a6a6a6;
        }
      }
    `,
  ],
  css`
    svg {
      ${tw`w-[24px]`}
      ${tw`h-[24px]`}
    }
  `,
]);

const Name = styled.span([
  tw`text-xs`,
  tw`text-gray-30`,
  tw`md:text-white`,
]);

const Value = styled.strong([
  tw`font-bold`,
  tw`text-base`,
  tw`text-black`,
  tw`md:text-[28px]`,
  tw`md:text-white`,
]);

const DataItem = styled.li([
  tw`min-w-[134px]`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`md:min-w-0`,
]);

const DataList = styled.ul([
  tw`flex`,
  tw`flex-wrap`,
  tw`py-[20px]`,
  tw`border-t`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`mt-5`,
  tw`gap-x-6`,
  tw`gap-y-9`,
  tw`md:gap-[56px]`,
  tw`md:mt-6`,
  tw`md:p-0`,
  tw`md:border-0`,
]);

const Desc = styled.p([
  tw`mt-6`,
  tw`text-sm`,
  tw`text-gray-30`,
  tw`whitespace-pre-line`,
  `word-break: keep-all`,
  tw`md:text-base`,
  tw`md:leading-normal`,
  tw`text-gray-30 md:text-white`,
  tw`md:max-w-[560px]`,
  css`
    &.first-item {
      ${tw`text-gray-30 md:text-white xl:text-black`}  
    }
  `,
]);

const Title = styled.h3([
  tw`text-xl`,
  tw`absolute`,
  tw`top-[72px]`,
  tw`left-[20px]`,
  tw`font-header`,
  tw`whitespace-pre-line`,
  tw`text-white`,
  tw`md:static`,
  tw`text-[20px] md:text-[32px]`,
  tw`md:font-bold`,
  tw`max-w-[250px] md:max-w-[560px]`,
  css`
    &.first-item {
      ${tw`text-white xl:text-black`}  
    }
  `,
]);

const Wrapper = styled.div([
  css`
    ${tw`overflow-hidden`}
    ${tw`pb-[24px] md:pb-0`}
    ${tw`border-b md:border-none`}
    ${tw`border-[#d9d9d9]`}
  `,
]);

const Container = styled.div([
  tw`md:h-[460px]`,
  tw`pt-[180px] md:pt-[460px]`,
  tw`relative`,
  tw`bg-no-repeat`,
  tw`md:bg-bottom`,
  tw`md:bg-cover`,
  tw`md:pt-[80px]`,
  tw`md:px-[48px]`,
  tw`md:pb-[51px]`,
  css`
   .life-item-background {     
      background-size: cover;
      background-position: right bottom;
    }
    @media (min-width: 768px) {
      background-position: center bottom;
      
    }
    &:first-child {
      .life-item-background {
        background-size: auto 308px;    
        background-color: #b8d1e1;
        
        @media (min-width: 768px) {
          background-size: cover;
        }
              
        &::after {
          ${tw`absolute`}
          ${tw`z-0`}
          ${tw`top-0`}
          ${tw`left-0`}
          ${tw`block`}
          ${tw`w-full`}
          ${tw`h-full`}
          ${tw`bg-[rgba(26, 26, 26, 0.4)]`}
          content: '';
        }
        @media (min-width: 1280px) {
          &::after {
            ${tw`hidden`}
          }
        }
      }
    }
  `,
]);

const SquareTag = styled.div([
  tw`h-[28px] md:h-[48px]`,
  tw`text-xs md:text-sm`,
  tw`font-bold`,
  tw`absolute`,
  tw`px-4`,
  tw`top-0`,
  tw`left-0`,
  tw`md:left-3`,
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`text-white`,
  tw`md:text-base`,
]);
