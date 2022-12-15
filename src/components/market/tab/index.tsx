import styled from '@emotion/styled';
import { Tabs } from 'antd';
import Link from 'next/link';

export const MarketTabs = () => {
  return (
    <Tabs items={[
      {
        key: 'market-nft',
        label: <Link href="/marketplace/nft">NFT</Link>,
      },
      {
        key: 'matket-collection',
        label: <Link href="/marketplace/collection">Collection</Link>,
      },
    ]} />
  );
};

const Container = styled.div([]);
