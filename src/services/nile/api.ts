import axios from 'axios';

import homeArticles from '@/mocks/home/articles.json';
import homeBanners from '@/mocks/home/banners.json';
import homeCurations from '@/mocks/home/curations.json';
import homeNewsfeeds from '@/mocks/home/newsfeeds.json';
import lifeArticles from '@/mocks/life/articles.json';
import lifeCategories from '@/mocks/life/categories.json';
import marketplaceCollections from '@/mocks/marketplace/collections/list.json';
import marketplaceCategories from '@/mocks/marketplace/categories.json';
import marketplacePriceRanks from '@/mocks/marketplace/rank/price.json';
import marketplaceNftList from '@/mocks/marketplace/nft/list.json';
import marketplaceTransactionRanks from '@/mocks/marketplace/rank/transaction.json';
import communityDaoList from '@/mocks/community/dao/list.json';
import storyArticles from '@/mocks/story/articles.json';
import { MarketNftItemStatusType } from '@components/market/nft/item/status';
import myActivities from '@/mocks/mypage/activity.json';

export const NileApiService = () => {
  const server = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENV_NILE_API || 'https://api.dev.nile.io',
  });

  const home = {
    article: {
      getList: async () => homeArticles,
    },
    newsfeed: {
      getList: async () => homeNewsfeeds,
    },
    curation: {
      getList: async () => homeCurations,
    },
    banner: {
      getList: async () => homeBanners,
    },
  };

  const life = {
    article: {
      getList: async () => lifeArticles,
    },
    category: {
      getList: async () => lifeCategories,
    },
  };

  const marketplace = {
    banner: {
      getList: async () => [],
    },
    collection: {
      getList: async () => marketplaceCollections.map((collection) => ({
        ...collection,
        items: collection.items?.map((item) => ({ ...item, status: item.status as MarketNftItemStatusType })),
      })),
    },
    nft: {
      getList: async () => marketplaceNftList.map((item) => ({ ...item, status: item.status as MarketNftItemStatusType })),
      getItem: async (collectionId: number, id: number) => marketplaceCollections.find((collection) => collection.id === collectionId)?.items?.find((item) => item.id === id) ?? marketplaceCollections.at(0)?.items?.at(0),
    },
    category: {
      getList: async () => marketplaceCategories,
    },
    rank: {
      price: {
        getList: async () => marketplacePriceRanks,
      },
      transaction: {
        getList: async () => marketplaceTransactionRanks,
      },
      getList: async () => [],
    },
  };

  const community = {
    dao: {
      getList: async () => communityDaoList,
    },
  };

  const story = {
    article: {
      getList: async () => storyArticles,
    },
  };

  const user = {
    login: async (walletAddress: string, provider: string, signature: string) =>
      server.post('/user/login', {
        walletAddress,
        provider,
        signature,
      }),
    signup: async (walletAddress: string) =>
      server.post('/user/account', { walletAddress }),
    account: {
      getUserInfo: async (walletAddress: string) =>
        server.get(`/user/account/${walletAddress}`),
    },
  };

  const my = {
    activity: { getList: async () => myActivities },
  };

  return {
    home,
    life,
    marketplace,
    community,
    story,
    user,
    my,
  };
};
