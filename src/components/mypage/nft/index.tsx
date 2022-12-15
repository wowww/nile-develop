import React, { useCallback, useMemo, useState } from 'react';
import { MypageNftCreated } from '@components/mypage/nft/created';
import { NftTab } from '@components/mypage/nft/tab';
import { MypageNftFavorites } from '@components/mypage/nft/favorites';
import { MypageNftOwned } from '@components/mypage/nft/owned';
import { MypageNftActivity } from '@components/mypage/nft/activity';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import Nft from '@/models/nile/market/nft';

type MyPageNFTTabProps = {
  nfts: Nft[];
};

export const MypageNFTTab = ({ nfts }: MyPageNFTTabProps) => {
  const [currentTab, setCurrentTab] = useState('created');

  const myPageNftTabs = useMemo(
    () => [
      {
        label: 'Created NFT',
        key: 'created',
        children: <MypageNftCreated nfts={nfts} />,
      },
      {
        label: 'Owned NFT',
        key: 'owned',
        children: <MypageNftOwned nfts={nfts}/>,
      },
      {
        label: 'Favorites',
        key: 'favorites',
        children: <MypageNftFavorites />,
      },
      {
        label: 'Activity',
        key: 'activity',
        children: <MypageNftActivity />,
      },
    ],
    [nfts],
  );

  const onTabClick = useCallback((key: string) => {
    setCurrentTab(key);
  }, []);

  return (
    <Container>
      <NftTab
        currentTab={currentTab}
        items={myPageNftTabs}
        onTabClick={onTabClick}
      />
    </Container>
  );
};

const Container = styled.div([
  tw`px-5`,
  tw`md:px-10`,
  tw`xl:px-0`,
  tw`xl:mx-auto`,
  tw`xl:max-w-[1200px]`,
]);