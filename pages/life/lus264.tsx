import { useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from 'lodash';
import { LusMainInfo } from '@components/life/lus/main';
import { LusOverview } from '@components/life/lus/sub';
import { LusArtistInfo } from '@components/life/lus/artist';
import { LusVideo } from '@components/life/lus/video';
import { LifeFloatingBar } from '@components/life/floatingbar';
import moment from 'moment-timezone';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LusPage = () => {
  const targetDate = moment.tz(process.env.NEXT_PUBLIC_ENV_NFT_SALE_START_DATE, 'Asia/Seoul');
  const [showFloating, setShowFloating] = useState(false);
  const productInfoRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<Document>();

  const throttleHandler = useMemo(
    () =>
      throttle(() => {
        const { pageYOffset } = window;
        const productInfoOffset = productInfoRef.current?.offsetTop as number;
        const productInfoHeight = productInfoRef.current?.scrollHeight as number;

        if (pageYOffset > productInfoOffset + productInfoHeight + 50) {
          setShowFloating(true);
        } else {
          setShowFloating(false);
        }
      }, 300),
    []);

  useEffect(() => {
    documentRef.current = document;
    const documentCurrent = documentRef.current;

    documentCurrent.addEventListener('scroll', throttleHandler);
    return () => {
      documentCurrent.removeEventListener('scroll', throttleHandler);
    };
  }, [throttleHandler]);

  return (
    <div>
      <LusMainInfo ref={productInfoRef} />
      <LusOverview />
      <LusArtistInfo />
      <LusVideo />
      {
        moment().isAfter(targetDate) && (
          <LifeFloatingBar status="upcoming" sellType="auction" nftLink="/" show={showFloating} />
        )
      }
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'life']);
  return { props: { ...translations } };
};

export default LusPage;
