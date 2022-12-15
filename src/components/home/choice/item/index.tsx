import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_right_24.svg';
import classNames from 'classnames';
import { css } from '@emotion/core';
import { useTranslation } from 'next-i18next';

interface buttonType {
  link: string;
  value: string;
}

export type NilePickCardProps = {
  type: 'card' | 'list';
  category: string;
  title: string;
  content: string;
  thumbnail: string;
  buttonList: buttonType[];
};

export const NilePickCard = ({ type, category, title, content, thumbnail, buttonList }: NilePickCardProps) => {
  const { t } = useTranslation(['nile']);

  return (
    <Container>
      <Card className={classNames({ card: type === 'card' })}>
        <ImageContainer>
          <Image src={thumbnail} objectFit="cover" layout="fill" className="absolute inset-0" loader={NileCDNLoader} />
        </ImageContainer>
        <SquareTag>{category}</SquareTag>
        <InfoWrapper>
          <Title>{t(title, { ns: 'nile' })}</Title>
          <Content>{t(content, { ns: 'nile' })}</Content>
          <ButtonWrapper>
            {buttonList.map((item, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link href={item.link} key={idx}>
                <StyledLink>
                  <strong>{item.value}</strong>
                  <StyledArrow />
                </StyledLink>
              </Link>
            ))}
          </ButtonWrapper>
        </InfoWrapper>
      </Card>
    </Container>
  );
};

const StyledLink = styled.span([
  tw`flex`,
  tw`gap-3`,
  tw`items-center`,
  tw`cursor-pointer`,
  `
    &:hover {
      strong {
        text-decoration: underline;
        text-underline-offset: 0.25em;
      }
    }
  `,
]);

const StyledArrow = styled(IconArrow)([]);

const Content = styled.div([
  tw`text-sm`,
  tw`text-black`,
  tw`mb-5`,
]);

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`gap-8`,
  tw`text-black`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`overflow-hidden`,
  tw`after:content-['']`,
  `aspect-ratio: 10/3.6`,
  tw`after:absolute`,
  tw`after:inset-0`,
  tw`after:bg-[#1A1A1A70]`,
]);

const InfoWrapper = styled.span([]);

const Title = styled.h3([
  tw`font-bold`,
  tw`text-xl`,
  tw`text-black`,
  tw`mb-3`,
]);

const Card = styled.div(({ className }) => [
  tw`relative`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-5`,
  className?.includes('card') && [
    tw`md:gap-0`,
    css`
      ${ImageContainer} {
        @media (min-width: 768px) {
          aspect-ratio: 688/320;
        }

        @media (min-width: 1280px) {
          aspect-ratio: 10/3;
        }
      }

      ${InfoWrapper} {
        ${tw`md:absolute`}
        ${tw`md:bottom-10`}
        ${tw`md:left-10`}
      }

      ${ButtonWrapper} {
        ${tw`md:text-white`}
      }

      ${Content} {
        ${tw`md:text-white`}
      }

      ${StyledArrow} {
        @media (min-width: 768px) {
          path {
            fill: #FFF;
          }
        }
      }

      ${Title} {
        ${tw`md:text-white`}
      }
    }
    `,
  ],
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const SquareTag = styled.span([
  tw`absolute`,
  tw`left-0`,
  tw`md:left-3`,
  tw`top-0`,
  tw`px-6`,
  tw`text-white`,
  tw`bg-black`,
  tw`h-[48px]`,
  tw`flex`,
  tw`items-center`,
]);
