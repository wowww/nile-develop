import React from 'react';
import family from "@components/common/footer/family/links.json";
import Link from "next/link";
import {Dropdown} from "antd";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {css} from "@emotion/core";
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';

export const FooterDropdown = () => {
  return (
    <Dropdown
      overlayClassName="familysite-list-wrap"
      trigger={['click']}
      placement="bottom"
      getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
      overlay={
        <LinkWrapper>
          {family.map(({ id, name, link }) => {
            return (
              <Link key={id} href={link}>
                <LinkItem>
                  {name}
                </LinkItem>
              </Link>
            );
          })}
        </LinkWrapper>
      }
    >
      <SelectButton type="button">
        Family Sites
        <IconWrapper>
          <IconArrow />
        </IconWrapper>
      </SelectButton>
    </Dropdown>
  )
}

const LinkWrapper = styled.ul([
  tw`flex`,
  tw`w-full`,
  tw`flex-col`,
  tw`px-[12px]`,
  tw`py-[20px]`,
  tw`gap-y-[20px]`,
  tw`border border-white`,
  tw`bg-black`,
  css` 
    transition: margin-top 0.3s;
  `,
])

const LinkItem = styled.li([
  tw`text-base`,
  tw`font-bold`,
  tw`cursor-pointer`,
  tw`text-white`,
  tw`text-sm`,
  tw`font-normal`,
  tw`leading-3`,
  css`
    transition: color 0.3s;
  `,
]);

const SelectButton = styled.button(({ className }) => [
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`px-[7px]`,
  tw`py-[8px]`,
  tw`w-[140px]`,
  tw`text-gray-10`,
  tw`text-left`,
  tw`border`,
  tw`border-gray-10`,
  tw`rotate-0`,
  className?.includes('ant-dropdown-open') && [
    tw`text-gray-60`,
    tw`border-gray-60`,
    css`
    transition: color 0.3s, border-color 0.3s;
    i {
        transform: rotate(180deg);
        
        path {
          fill: #a6a6a6;
        }
      }
    `,
  ],
]);

const IconWrapper = styled.i([
  css`
  transition: transform 0.3s;
  
    path {
      fill: #404040;
    }
  `,
])