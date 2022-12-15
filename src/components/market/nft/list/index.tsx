import styled from '@emotion/styled';
import tw from 'twin.macro';
import { MarketNftItem, MarketNftItemProps } from '@components/market/nft/item';
import classNames from 'classnames';

export type AuctionNftListProps = {
  data: Omit<MarketNftItemProps, 'viewType'>[];
  viewType: 'list' | 'grid';
};

export const MarketNftList = ({ data, viewType }: AuctionNftListProps) => {
  return (
    <Container>
      <Wrapper className={classNames([viewType])}>
        {data.map((item) => <MarketNftItem key={`${item.collection.id}-${item.id}`} {...item} viewType={viewType} data={data} />)}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`w-full`,
  tw`cursor-pointer`,
]);

const Wrapper = styled.div(({ className }) => [
  tw`flex`,
  tw`justify-start`,
  tw`w-full`,
  className?.includes('grid') && [
    tw`flex-wrap`,
  ],
  className?.includes('list') && [
    tw`flex-col`,
  ],
  tw`gap-4`,
]);
