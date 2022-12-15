import React, { useCallback, useMemo } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NileCDNLoader } from '@utils/image/loader';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

export type ButtonType = {
  text: string;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export type SubBannerProps = {
  status: string;
  title: string;
  background?: string;
  buttonInfo?: ButtonType[];
};

export const MarketArticleBanner = ({ status, title, background, buttonInfo }: SubBannerProps) => {
  const { push } = useRouter();
  const { t } = useTranslation(['marketplace']);
  const backgroundUrl = useMemo(() => NileCDNLoader({ src: background }), [background]);

  const onClickItem = useCallback((link, disabled) => {
    if (disabled) {
      message.info({ content: t('snkrzInfo', { ns: 'marketplace' }), key: 'toast' }).then(() => {
        // nothing
      });
    } else {
      push(link).then(() => {
        // do nothing
      });
    }
  }, [push, t]);

  return (
    <Container style={{ background: `url(${backgroundUrl}) 50% 50% / cover no-repeat` }}>
      <Tag>{status}</Tag>
      <Title>{title}</Title>
      <ButtonWrapper>
        {buttonInfo?.map(({ text, link, disabled, onClick }) => (
          <Button
            key={text}
            className={cn({ disabled })}
            type="button"
            onClick={() => onClickItem(link, disabled)}
          >{text}</Button>
        ))}
      </ButtonWrapper>
    </Container>
  );
};

MarketArticleBanner.defaultProps = {
  buttonInfo: undefined,
  background: undefined,
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`px-[36px]`,
  tw`py-[32px]`,
  tw`relative`,
  tw`before:absolute`,
  tw`before:content-[""]`,
  tw`before:inset-0`,
  tw`before:bg-[rgba(26, 26, 26, 0.7)]`,
]);

const Tag = styled.span([
  tw`relative`,
  tw`text-white`,
  tw`text-base`,
  tw`font-bold`,
  tw`pb-[19px]`,
]);

const Title = styled.h2([
  tw`font-header`,
  tw`relative`,
  tw`font-bold`,
  tw`text-2xl`,
  tw`leading-7`,
  tw`text-white`,
  tw`pb-[59px]`,
  tw`md:text-3xl`,
  tw`md:leading-9`,
]);

const ButtonWrapper = styled.div([
  tw`relative`,
  tw`flex`,
  tw`gap-[10px]`,
  tw`flex-wrap`,
]);

const Button = styled.button(({ className }) => [
  tw`text-white`,
  tw`bg-transparent hover:bg-hover`,
  tw`border`,
  tw`border-white`,
  tw`rounded`,
  tw`py-2 px-4`,
  className?.includes('disabled') && [
    tw`hover:bg-transparent`,
    tw`text-gray-60`,
    tw`border-gray-60`,
  ],
]);
