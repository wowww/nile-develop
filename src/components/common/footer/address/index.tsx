import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export const FooterAddressSection = () => {
  return (
    <Address>
      © WEMIX PTE. LTD. All rights reserved.
    </Address>
  )
}

const Address = styled.address([
  tw`text-white`,
  tw`text-xs md:text-sm`,
  tw`opacity-30`,
  tw`mb-0`,
])