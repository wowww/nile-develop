import { MarketLayout } from '@components/market/layout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MarketNftPage = () => {
  return (
    <MarketLayout />
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'marketplace']);
  return { props: { ...translations } };
};

export default MarketNftPage;
