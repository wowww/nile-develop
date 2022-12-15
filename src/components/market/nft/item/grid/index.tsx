import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { MarketNftItemPriceTitle, MarketNftItemProps } from '@components/market/nft/item';
import { MarketNftItemStatus } from '@components/market/nft/item/status';
import { FavoriteToggle } from '@components/market/favorite';
import { useCallback, useMemo } from 'react';
import { useNumberFormatter } from '@utils/formatter/number';
import { css } from '@emotion/core';
import { NileCDNLoader } from '@utils/image/loader';

export const MarketNftGridItem = ({
  id,
  status,
  image,
  title,
  favorite,
  favoriteVisible,
  saleStart,
  price,
  creator,
  collection,
  participants,
}: MarketNftItemProps) => {

  const { shorthanded } = useNumberFormatter();

  const onChangeFavorite = useCallback((active: boolean) => {
    // TODO
  }, []);

  const itemStatus = useMemo(() => {
    return <MarketNftItemStatus status={status} remain={saleStart} />;
  }, [status, saleStart]);

  const formattedPrice = useMemo(() => {
    return shorthanded(price, { digits: 4 });
  }, [shorthanded, price]);

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={image} layout="responsive" loader={NileCDNLoader} width="100%" height="100%" />
          <ImageInfoContainer>
            <ImageInfoWrapper>
              <Collection>{collection.title}</Collection>
              <Divider />
              <UserInfoWrapper>
                <UserInfoTitle>Creator</UserInfoTitle>
                <UserInfoValue>{creator?.name}</UserInfoValue>
              </UserInfoWrapper>
            </ImageInfoWrapper>
          </ImageInfoContainer>
        </ImageContainer>
        <InformationWrapper>
          <TitleWrapper>
            <Title>{title}</Title>
            {favoriteVisible && <FavoriteToggle onChange={onChangeFavorite} active={favorite} direction="horizontal" />}
          </TitleWrapper>
          <Divider />
          <MetadataWrapper>
            <PriceWrapper>
              <PriceTitle>{MarketNftItemPriceTitle[status]}</PriceTitle>
              <PriceValue>
                {formattedPrice}<PriceUnit>WEMIX$</PriceUnit>
              </PriceValue>
            </PriceWrapper>
            {itemStatus}
          </MetadataWrapper>
        </InformationWrapper>
      </Wrapper>
    </Container>
  );
};

MarketNftGridItem.defaultProps = {
  remainTime: 0,
};

const Container = styled.div([
  tw`inline-flex`,
  tw`w-full md:w-[48%] lg:w-[32%]`,
  tw`justify-between`,
  tw`duration-1000`,
]);

const Wrapper = styled.div([
  tw`inline-flex`,
  tw`w-full`,
  tw`flex-col`,
  tw`gap-3`,
  tw`mx-auto`,
  tw`overflow-auto`,
]);

const TitleWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`gap-1`,
]);

const Title = styled.h4([
  tw`text-base`,
  tw`font-bold`,
]);

const ImageInfoContainer = styled.div([
  tw`absolute`,
  tw`flex`,
  tw`items-end`,
  tw`opacity-0`,
  tw`inset-0`,
  tw`duration-500`,
  css`
    background: linear-gradient(180deg, rgb(26 26 26 / 0%) 0%, rgb(26 26 26 / 80%) 76.04%, #1a1a1a 100%)
  `,
]);

const ImageInfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`m-4`,
  tw`gap-2`,
]);

const UserInfoWrapper = styled.dl([]);

const UserInfoTitle = styled.dt([
  tw`text-white`,
]);

const UserInfoValue = styled.dd([
  tw`text-white`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`cursor-pointer`,
  css`
    aspect-ratio: 1 / 1;

    &:hover {
      ${ImageInfoContainer} {
        ${tw`opacity-100`}
      }
    }
  `,
]);

const Collection = styled.p([
  tw`text-white`,
  tw`font-bold`,
]);

const Divider = styled.hr([
  tw`border-gray-60`,
]);

const InformationWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
]);

const MetadataWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`gap-1`,
]);

const PriceWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-0`,
]);

const PriceTitle = styled.span([
  tw`text-xs`,
  tw`text-gray-60`,
]);

const PriceValue = styled.span([
  tw`text-lg`,
  tw`text-black`,
  tw`font-bold`,
  tw`truncate`,
]);

const PriceUnit = styled.span([
  tw`mx-1`,
  tw`text-xs`,
  tw`font-normal`,
]);
