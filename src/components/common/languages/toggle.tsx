import { Popover as AntdPopover } from 'antd';
import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import Link from 'next/link';
import { UtilityButton } from '@components/common/utility/button';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import { NileCDNLoader } from '@utils/image/loader';

export type LanguagesToggleProps = {
  currentLanguage?: string;
  path?: string;
};

export const LanguagesToggle = ({ currentLanguage, path }: LanguagesToggleProps) => {
  const { asPath, locale, locales } = useRouter();

  const icon = useMemo(() => {
    return {
      en: <ReactSVG src={NileCDNLoader({ src: '/icons/common/ico_lang_en.svg' })} />,
      ko: <ReactSVG src={NileCDNLoader({ src: '/icons/common/ico_lang_ko.svg' })} />,
    }[locale ?? 'en'];
  }, [locale]);

  const next = useMemo(() => {
    const data = locales ?? [];
    const item = locale ?? 'en';
    const index = data.indexOf(item);
    return data[(index + 1) % data.length];
  }, [locale, locales]);

  return (
    <UtilityButton>
      <Link href={asPath} locale={next}>
        {icon}
      </Link>
    </UtilityButton>
  );
};

LanguagesToggle.defaultProps = {
  currentLanguage: 'en',
  path: undefined,
};

const Popover = styled(AntdPopover)([
  tw`relative`,
  tw`pt-0`,
  css`
    .ant-popover {
      &-placement {
        &-bottom .ant-popover-arrow,
        &-bottomLeft .ant-popover-arrow,
        &-bottomRight .ant-popover-arrow {
          width: 18px;
          height: 18px;
          transform: translateY(-100%) translateX(6px);
        }
      }

      &-inner {
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%) !important;
      }

      &-arrow {
        display: block;
      }
    }

    & > .ant-popover-arrow-content {
      box-shadow: 2px 2px 5px rgb(0 0 0 / 3%);

      &::before {
        clip-path: inset(30% 30%);
      }
    }
  `,
]);

const List = styled.ul([
  tw`w-36`,
  tw`rounded-lg`,
  tw`py-3 px-2`,
]);

const Item = styled.li(({ className }) => [
  tw`flex`,
  tw`justify-between`,
  tw`text-base`,
  className?.includes('active') && css`
    &::after {
      content: "";
      width: 28px;
      height: 28px;
      background-image: url("https://file.mir4global.com/nile/resources/icons/common/ico_check_black.svg");
    }
  `,
]);
