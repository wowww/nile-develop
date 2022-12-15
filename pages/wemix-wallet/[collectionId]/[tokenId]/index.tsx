import MarketNftDetailPage from '@pages/marketplace/nft/[collectionId]/[tokenId]';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NileApiService } from '@/services/nile/api';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}: GetServerSidePropsContext) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'marketplace']);
  const api = NileApiService();
  const product = await api.marketplace.nft.getItem(Number(query.collectionId), Number(query.tokenId));

  return { props: { ...translations, data: { product } } };
};

export default MarketNftDetailPage;
