import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import { css } from '@emotion/core';
import { MarketNftItemStatus, MarketNftItemStatusType } from '@components/market/nft/item/status';
import { useNumberFormatter } from '@utils/formatter/number';

type NilePickAdditionListProps = {
  nftId: number,
  thumbnail: string,
  name: string,
  status: MarketNftItemStatusType,
  price: number,
  unit: string,
  remainTime?: number,
}

export const NilePickAdditionList = ({ nftId, thumbnail, name, status, price, unit, remainTime }: NilePickAdditionListProps) => {

  const { shorthanded } = useNumberFormatter();

  return (
    <Container>
      <ImageContainer>
        <Image className="absolute inset-0" src={thumbnail} alt="" layout="fill" objectFit="cover" loader={NileCDNLoader} />
      </ImageContainer>
      <InfoWrapper>
        <Inner>
          <Name>{name}</Name>
          <PriceWrapper>
            <Status>Start Price</Status>
            <Price>
              <strong>{shorthanded(price, { digits: 0 })}</strong>{unit}
            </Price>
          </PriceWrapper>
        </Inner>
        <div>
          <MarketNftItemStatus status={status} remain={remainTime} />
        </div>
      </InfoWrapper>
    </Container>
  );
};

NilePickAdditionList.defaultProps = {
  remainTime: null,
};

const Price = styled.span([
  tw`text-black`,
  tw`text-xs`,
  css`
    strong {
      ${tw`text-base`}
      ${tw`text-black`}
      ${tw`mr-1`}
    }
  `,
]);

const Status = styled.span([
  tw`text-xs`,
  tw`text-gray-60`,
]);

const PriceWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const Name = styled.span([
  tw`font-bold`,
  tw`text-base`,
  tw`md:text-lg`,
  tw`xl:text-base`,
]);

const Inner = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`flex-1`,
  tw`gap-3`,
  tw`md:gap-0`,
  tw`md:flex-row`,
  tw`md:items-center`,
  tw`md:justify-between`,
]);

const ImageContainer = styled.div([
  tw`w-[100px]`,
  tw`h-[100px]`,
  tw`relative`,
  tw`overflow-hidden`,
  tw`xl:h-[100px]`,
  tw`xl:h-[100px]`,
]);

const Container = styled.div([
  tw`flex`,
  tw`py-5`,
  tw`gap-6`,
  tw`cursor-pointer`,
]);
