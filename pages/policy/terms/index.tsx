import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TermsOfServicePage = () => {
  return (
    <>Terms of service</>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'policy']);
  return { props: { ...translations } };
};

export default TermsOfServicePage;
