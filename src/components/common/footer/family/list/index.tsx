import family from '@components/common/footer/family/links.json';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export const FooterList = () => {
  return (
    <>
      <Title>Family Sites</Title>
      <Wrapper>
        {
          family.map(({ id, name, link }) => (
            <Link key={id} href={link}>
              <LinkItem>
                {name}
              </LinkItem>
            </Link>
          ))
        }
      </Wrapper>
    </>
  )
}

const LinkItem = styled.div([
  tw`text-base`,
  tw`font-bold`,
  tw`cursor-pointer`,
]);

const Title = styled.h2([
  tw`text-[12px]`,
  tw`text-gray-40`,
  tw`leading-3`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`gap-x-5`,
]);
