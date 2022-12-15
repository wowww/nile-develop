import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { LanguagesToggle } from '@components/common/languages/toggle';

export type HeaderLanguagesProps = {
  currentLanguage?: string;
  path?: string;
};

export const HeaderLanguageButton = ({ currentLanguage, path }: HeaderLanguagesProps) => {
  return (
    <Container>
      <LanguagesToggle />
    </Container>
  );
};

HeaderLanguageButton.defaultProps = {
  currentLanguage: 'en',
  path: undefined,
};

const Container = styled.div([
  css`
    button {
      background-color: transparent;

      &:hover {
        background-color: #d9d9d9;
      }
    }

    svg {
      width: 32px;
      height: 32px;
    }
  `,
]);
