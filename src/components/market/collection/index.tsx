import { MarketArticleBanner } from '@components/market/article/banner';
import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Collection from '@/models/nile/market/collection';
import { MarketNftList } from '@components/market/nft/list';
import { useTranslation } from 'next-i18next';

export type MarketCollectionSectionProps = {
  collections: Collection[];
}

export const MarketCollectionSection = ({ collections }: MarketCollectionSectionProps) => {
  const { t } = useTranslation(['common']);

  return (
    <CollectionContainer>
      {
        collections.map((collection) => {
          return (
            <CollectionItemWrapper key={collection.id}>
              <BannerWrapper>
                <MarketArticleBanner
                  status={collection.status}
                  title={collection.title}
                  background={collection.image}
                  buttonInfo={[
                    {
                      text: t('aboutThisCollection', { ns: 'common' }),
                      link: `/life/${collection.slug}`,
                      disabled: collection.disabled,
                    },
                  ]}
                />
              </BannerWrapper>
              <MarketNftList data={collection.items?.slice(0, 3) ?? []} viewType="grid" />
              {/* <ItemList> */}
              {/*  {collection.items?.map((item: Nft) => ( */}
              {/*    <MarketNftItem {...item} /> */}
              {/*  ))} */}
              {/* </ItemList> */}
            </CollectionItemWrapper>
          );
        })
      }
      {/* <MarketRanking /> */}
    </CollectionContainer>
  );
};

const CollectionItemWrapper = styled.div([]);

const BannerWrapper = styled.div([
  tw`mt-[60px]`,
  tw`mb-12`,
]);

const ItemList = styled.div([
  tw`flex`,
  tw`flex-wrap`,
  tw`justify-between`,
  tw`gap-y-12`,
]);

const CollectionContainer = styled.div([
  tw`max-w-[1200px]`,
  tw`mx-auto`,
  tw`px-5`,
  tw`md:px-10`,
  tw`xl:px-0`,
]);
