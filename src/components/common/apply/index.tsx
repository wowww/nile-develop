import React, { useCallback } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { AskToJoinModal } from '@components/common/apply/modal';
import classNames from 'classnames';
import { css } from '@emotion/core';
import { useTranslation } from 'next-i18next';
import { NileCDNLoader } from '@utils/image/loader';
import { PolicyModal } from '@components/common/policy/modal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { AskToJoinModalState, PolicyModalState } from '@recoil/atoms';

export type ApplyBannerProps = {
  location: 'marketplace' | 'life';
  categoryList: {
    value: string,
    img: string,
  } [];
};

export const ApplyBanner = ({ location, categoryList }: ApplyBannerProps) => {
  const { t } = useTranslation(['common', 'life', 'marketplace']);
  const [policyModal, setPolicyModal] = useRecoilState(PolicyModalState);
  const setAskToJoinModal = useSetRecoilState(AskToJoinModalState);

  const onClickJoin = useCallback(() => {
    if (policyModal.agree) {
      setAskToJoinModal((prev) => ({ ...prev, open: true }));
    } else {
      setPolicyModal((prev) => ({ ...prev, open: true }));
    }
  }, [policyModal, setAskToJoinModal, setPolicyModal]);

  return (
    <Container className={classNames({ changeOrder: location === 'life' })}>
      <Title>
        {
          {
            marketplace: 'NFT is for Everyone',
            life: 'Launch a project on Life',
          } [location]
        }
      </Title>
      {
        {
          marketplace: <Description>{t('bottom.notice', { ns: 'marketplace' })}</Description>,
          life: <Description>{t('home.apply.desc', { ns: 'life' })}</Description>,
        } [location]
      }
      <BannerWrapper>
        <Banner>
          {categoryList.concat(categoryList).map((item, itemIdx) => (
            // eslint-disable-next-line react/no-array-index-key
            <BannerItem key={`${item.value}-${itemIdx}`} style={{ background: `url(${NileCDNLoader({ src: item.img })}) 0 0 / cover no-repeat` }}>
              <Value>{item.value}</Value>
            </BannerItem>
          ))}
        </Banner>
      </BannerWrapper>
      <ButtonWrapper>
        <Button
          className="hover:bg-[#FFFFFF20] md:font-xl xl:font-base"
          onClick={onClickJoin}
        >{t('modalJoin.button', { ns: 'common' })}</Button>
      </ButtonWrapper>
      <PolicyModal />
      <AskToJoinModal />
    </Container>
  );
};

const Title = styled.div([
  tw`font-header`,
  tw`font-bold`,
  tw`text-center`,
  tw`text-2xl`,
  tw`md:text-[40px]`,
]);

const Description = styled.p([
  tw`text-sm`,
  tw`text-gray-60`,
  tw`text-center`,
  tw`mt-4`,
  tw`xl:mt-3`,
  tw`md:text-base`,
]);

const ButtonWrapper = styled.div([
  tw`mt-[50px]`,
  tw`flex`,
  tw`justify-center`,
  tw`md:mt-10`,
  tw`xl:mt-[44px]`,
]);

const BannerWrapper = styled.div([
  tw`relative`,
  tw`h-[220px]`,
  tw`mt-[56px]`,
  tw`md:mt-8`,
  tw`xl:mt-10`,
]);

const Banner = styled.ul([
  tw`flex`,
  tw`absolute`,
  tw`top-0`,
  tw`left-0`,
  tw`gap-[24px]`,
  tw`animate-market-bottom-scrolling`,
]);

const BannerItem = styled.div([
  tw`w-[220px]`,
  tw`h-[220px]`,
  tw`flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`relative`,
  tw`after:content-['']`,
  tw`after:absolute`,
  tw`after:inset-0`,
  tw`after:bg-[#1A1A1A70]`,
]);

const Button = styled.button([
  tw`px-6`,
  tw`py-1.5`,
  tw`bg-transparent hover:bg-hover`,
  tw`text-base lg:text-sm`,
  tw`text-white`,
  tw`border`,
  tw`border-white`,
  tw`rounded`,
]);

const Value = styled.span([
  tw`text-[16px]`,
  tw`font-bold`,
  tw`z-10`,
]);

const Container = styled.div(({ className }) => [
  tw`flex`,
  tw`flex-col`,
  tw`py-[80px]`,
  tw`mt-[40px]`,
  tw`bg-gray-10`,
  tw`text-white`,
  tw`overflow-hidden`,
  className?.includes('changeOrder') && [
    css`
      ${Title} {
        ${tw`order-1`}
      }

      ${Description} {
        ${tw`order-2`}
        max-width: none;
        margin-top: 16px;
      }

      ${BannerWrapper} {
        ${tw`order-4`}
        ${tw`mt-[60px]`}
        ${tw`md:mt-[64px]`}
        ${tw`md:mt-[82px]`}
      }

      ${ButtonWrapper} {
        ${tw`order-3`}
        margin-top: 32px;
      }
    `,
  ],
]);
