import Nft from '@/models/nile/market/nft';
import styled from '@emotion/styled';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import tw from 'twin.macro';
import { MarketNftItemStatus, MarketNftItemStatusType } from '@components/market/nft/item/status';
import { MarketViewCount } from '@components/market/viewcount';
import { MarketFavoriteToggle } from '@components/market/favorite/toggle';
import { MarketShareButton } from '@components/market/share/button';
import { MarketNftCoverPurchase } from '@components/market/nft/cover/purchase';

export type MarketNftCoverProps = {
  product: Nft;
  status: MarketNftItemStatusType;
};

export const MarketNftCover = ({ product, status }: MarketNftCoverProps) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={product.image ?? ''} loader={NileCDNLoader} width={320} height={320} />
        </ImageWrapper>
        <InformationSection>
          <ProductInfoSection>
            <MetadataWrapper>
              <MarketNftItemStatus status={status} />
              <MenuWrapper>
                <MarketViewCount views={0} />
                <MarketFavoriteToggle direction="horizontal" onChange={(changed) => console.log(changed)} />
                <MarketShareButton type="icon" />
              </MenuWrapper>
            </MetadataWrapper>
            <Collection>{product.collection.title}</Collection>
            <Title>{product.title}</Title>
            <Edition># Edition 1 of 10</Edition>
          </ProductInfoSection>
          <MarketNftCoverPurchase product={product} status={status} />
        </InformationSection>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`w-full`,
  tw`justify-center`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col lg:flex-row`,
  tw`items-center`,
  tw`mx-auto`,
  tw`max-w-screen-xl`,
  tw`w-full`,
  tw`p-2 md:p-4 lg:px-0`,
  tw`gap-4`,
]);

const ImageWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`w-full lg:w-[678px]`,
  tw`max-h-[320px] md:h-[464px] lg:h-[428px]`,
]);

const InformationSection = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`px-2`,
  tw`flex-1`,
  tw`justify-between`,
  tw`gap-2`,
]);

const ProductInfoSection = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
  tw`my-3`,
]);

const MetadataWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
]);

const MenuWrapper = styled.div([
  tw`flex`,
  tw`gap-2`,
]);

const PurchaseWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
]);

const Collection = styled.p([
  tw`text-base`,
]);

const Title = styled.h2([
  tw`text-2xl`,
]);

const Edition = styled.p([
  tw`text-xs`,
  tw`text-gray-50`,
]);
