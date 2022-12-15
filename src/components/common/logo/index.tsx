import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useLayoutResize } from '@utils/layout';
import { NileCDNLoader } from '@utils/image/loader';

export type LogoProps = {
  // TODO
};

export const Logo = (props: LogoProps) => {
  const { isTablet } = useLayoutResize();

  return (
    <Link href="/" passHref>
      <ImageWrapper>
        {
          isTablet ?
            <img src={NileCDNLoader({ src: '/icons/common/logo/icon_logo_main.svg' })} alt="logo" /> :
            <Image src="/icons/common/logo/ico_logo_symbol.svg" loader={NileCDNLoader} width={32} height={32} />
        }
      </ImageWrapper>
    </Link>
  );
};

const ImageWrapper = styled.a([
  tw`flex`,
  tw`items-center`,
  tw`w-8 md:w-20`,
  tw`h-8`,
]);
