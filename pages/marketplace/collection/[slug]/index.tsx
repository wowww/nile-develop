import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CollectionInformationPage = () => {
  return (<>Collection Information Page</>);
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'marketplace']);
  return { props: { ...translations } };
};

export default CollectionInformationPage;
