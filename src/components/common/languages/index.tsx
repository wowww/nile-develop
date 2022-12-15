import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';

export type LanguagesProps = {
  currentLanguage?: string;
  path?: string;
};

export const LanguageButton = ({ currentLanguage, path }: LanguagesProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { asPath, locale } = useRouter();

  return (
    <FooterLangWrapper>
      {/* TODO: 22.11.07 수정: 언어 선택 토글 버튼으로 변경 (향후 언어 3개 이상일 시 기존 드롭다운으로 롤백) */}
      {locale === 'en' ? (
        <Link href={asPath} locale="ko">
          <a href={asPath} className="btn-open-lang">
            <ReactSVG src="https://file.mir4global.com/nile/resources/icons/common/ico_lang_en.svg" />
          </a>
        </Link>
      ) : (
        <Link href={asPath} locale="en">
          <a href={asPath} className="btn-open-lang">
            <ReactSVG src="https://file.mir4global.com/nile/resources/icons/common/ico_lang_ko.svg" />
          </a>
        </Link>
      )}
    </FooterLangWrapper>
  );
};

LanguageButton.defaultProps = {
  currentLanguage: 'en',
  path: undefined,
};

const FooterLangWrapper = styled.div([])
