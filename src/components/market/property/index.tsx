import styled from "@emotion/styled";
import Link from "next/link";
import tw from "twin.macro";
import { css } from '@emotion/core';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';

type PropertyCardProps = {
  propertyType: string;
  name: string;
  rarity: string;
}

export const PropertyCard = ({ propertyType, name, rarity }: PropertyCardProps) => {
  return (
    <Link href="/marketplace">
      <Container>
        <Type>{propertyType}</Type>
        <Name>{name}</Name>
        <LinkWrapper>{rarity}<IconArrow /></LinkWrapper>
      </Container>
    </Link>
  )
}

const Type = styled.span([
  tw`text-[12px]`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`p-[16px]`,
  tw`border`,
  tw`border-gray-80`,
  tw`rounded-[4px]`,
  tw`text-black`,
  tw`hover:border-0`,
  tw`hover:bg-black`,
  tw`hover:text-white`,
  tw`cursor-pointer`,
  css`
    &:hover {
      ${Type} {
        ${tw`text-gray-60`}
      }
    }
  `,
]);

const Name = styled.h3([
  tw`text-sm`,
  tw`mt-[4px]`,
  tw`font-bold`,
]);

const LinkWrapper = styled.span([
  tw`cursor-pointer`,
  tw`text-gray-60`,
  tw`text-[12px]`,
  tw`mt-[16px]`,
  tw`flex`,
  tw`gap-[8px]`,
  tw`items-center`,
  `
    svg {
      transform: rotate(-90deg);
      path {
        fill: #A6A6A6;
      }
    }
  `,
]);