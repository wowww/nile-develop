import { MarketArticleBanner } from '@components/market/article/banner';
import styled from '@emotion/styled';
import { MarketNftList } from '@components/market/nft/list';
import { MarketNftItemProps } from '@components/market/nft/item';
import tw from 'twin.macro';

export type MarketArticleProps = {
  status: string;
  title: string;
  background: string;
  data: MarketNftItemProps[];
};

export const MarketArticle = ({ data, ...props }: MarketArticleProps) => {
  return (
    <Container>
      <Wrapper>
        <MarketArticleBanner {...props} />
        <MarketNftList data={data} viewType="grid" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`w-full`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`container`,
  tw`gap-4`,
]);
