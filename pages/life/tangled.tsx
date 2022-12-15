import { useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from 'lodash';
import cn from 'classnames';

import { LifeFloatingBar } from '@components/life/floatingbar';
import { TangledTop } from '@components/life/tangled/main';
import { TangledBottom } from '@/components/life/tangled/bottom';
import moment from 'moment-timezone';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TangledPage = () => {
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

        if (pageYOffset > productInfoOffset + productInfoHeight) {
          setShowFloating(true);
        } else {
          setShowFloating(false);
        }
      }, 300),
    [],
  );

  useEffect(() => {
    documentRef.current = document;
    const documentCurrent = documentRef.current;

    documentCurrent.addEventListener('scroll', throttleHandler);
    return () => {
      documentCurrent.removeEventListener('scroll', throttleHandler);
    };
  }, [throttleHandler]);
  /* 22.10.27 수정 end: floating bar 액션 제어용 코드 추가 */

  return (
    <div className={cn('life-tangled')}>
      <TangledTop />
      <TangledBottom ref={productInfoRef} />
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

export default TangledPage;
