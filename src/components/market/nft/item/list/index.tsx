import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { MarketNftItemPriceTitle, MarketNftItemProps } from '@components/market/nft/item';
import { MarketNftItemStatus } from '@components/market/nft/item/status';
import { FavoriteToggle } from '@components/market/favorite';
import { useCallback, useMemo } from 'react';
import { useNumberFormatter } from '@utils/formatter/number';
import { css } from '@emotion/core';
import { useLayoutResize } from '@utils/layout';
import { NileCDNLoader } from '@utils/image/loader';

export const MarketNftListItem = ({
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
  const { isTablet } = useLayoutResize();
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
        </ImageContainer>
        <InformationWrapper>
          <ItemInfo>
            {isTablet && itemStatus}
            <TitleWrapper>
              <Title>
                {isTablet && <Collection>{collection.title}</Collection>}
                {title}
              </Title>
            </TitleWrapper>
            {!isTablet && <Divider />}
          </ItemInfo>
          <MetadataWrapper>
            <PriceWrapper>
              <PriceTitle>{MarketNftItemPriceTitle[status]}</PriceTitle>
              <PriceValue>
                {formattedPrice}<PriceUnit>WEMIX$</PriceUnit>
              </PriceValue>
            </PriceWrapper>
            {!isTablet && itemStatus}
          </MetadataWrapper>
        </InformationWrapper>
      </Wrapper>
      {favoriteVisible && <FavoriteToggle onChange={onChangeFavorite} active={favorite} direction={isTablet ? 'vertical' : 'horizontal'} />}
    </Container>
  );
};

MarketNftListItem.defaultProps = {
  remainTime: 0,
};

const Container = styled.div([
  tw`flex`,
  tw`md:border-b`,
  tw`md:border-gray-80`,
  tw`pb-[20px]`,
  tw`relative`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col md:flex-row`,
  tw`w-full`,
  tw`gap-[32px]`,
  tw`overflow-auto`,
]);

const TitleWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`gap-1`,
]);

const Collection = styled.div([
  tw`text-sm`,
  tw`font-bold`,
]);

const Title = styled.h3([
  tw`text-xl md:text-2xl`,
  tw`font-bold`,
  tw`font-header`,
]);

const ImageContainer = styled.div([
  tw`w-full md:w-72`,
  css`aspect-ratio: 1 / 1;`,
]);

const Divider = styled.hr([
  tw`border-gray-60`,
]);

const InformationWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`gap-3`,
  tw`justify-between`,
]);

const ItemInfo = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-y-3`,
  tw`justify-between`,
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
