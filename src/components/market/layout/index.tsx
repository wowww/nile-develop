import { ReactNode } from 'react';
import { MarketTabs } from '@components/market/tab';
import styled from '@emotion/styled';
import { MarketMainBanner } from '@components/market/banner';
import { MarketCreatorApply } from '@components/market/creator/apply';

export type MarketLayoutProps = {
  children?: ReactNode;
};

export const MarketLayout = ({ children }: MarketLayoutProps) => {
  return (
    <Container>
      <MarketMainBanner />
      <MarketTabs />
      {children}
      <MarketCreatorApply />
    </Container>
  );
};

MarketLayout.defaultProps = {
  children: undefined,
};

const Container = styled.div([]);
