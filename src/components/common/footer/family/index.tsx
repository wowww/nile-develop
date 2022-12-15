import React, {useCallback, useLayoutEffect, useState} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {FooterDropdown} from "@components/common/footer/family/dropdown";
import {FooterList} from "@components/common/footer/family/list";
import { useLayoutResize } from "@utils/layout";

export type FooterFamilySectionProps = {
  //
};

export const FooterFamilySection = (props: FooterFamilySectionProps) => {
  const { isLargeDesktop } = useLayoutResize();

  return (
    <Container>
      {
        isLargeDesktop ? (
          <FooterList />
        ) : (
          <FooterDropdown />
        )
      }
    </Container>
  );
};

FooterFamilySection.defaultProps = {
  //
};

const Container = styled.div([
  tw`relative`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-y-4`,
]);
