import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TextButton } from '@components/common/button/textbutton';
import { Dropdown } from 'antd';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';

import { IconLogo } from '@/components/iconlogo';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import IconLink from '@/assets/icons/common/ico_link.svg';

// my dao 임시 데이터
const daoList = [
  {
    name: 'WONDER DAO',
    link: '/',
    type: 'wonder',
  },
  {
    name: 'g.Wonder',
    link: '/',
    type: 'gwonder',
  },
  {
    name: 'WEMIX.FI DAO',
    link: '/',
    type: 'wemixfi',
  },
  {
    name: 'Kiaf',
    link: '/',
    type: 'kiaf',
  },
];

export type DaoSectionProps = {
  // TODO
};

export const DaoSection = (props: DaoSectionProps) => {
  const [hasDao, setHasDao] = useState(true);
  const [daoListVisible, setDaoListVisible] = useState(false);

  const handleDaoListVisibleChange = (newVisible: boolean) => {
    setDaoListVisible(newVisible);
  };

  return (
    <Container>
      <Title>My DAO</Title>

      { hasDao ? (
        <>
          <Box>
            <SmallTitle>Total Balance of included DAO</SmallTitle>
            <MyOwnInfo>
              <span>$100.34</span>
              <span>1 DAO</span>
            </MyOwnInfo>
          </Box>
          <DaoLink>
            { daoList.length > 1 ? (
              <Dropdown
                overlayClassName="doa-link-list"
                overlay={
                  <ListContainer>
                    { daoList.map((item) => (
                      <ListItem key={item.name}>
                        <Link href={item.link} passHref>
                          <Item>
                            <LinkContents>
                              <IconLogo size={20} type={item.type} />
                              <span>{item.name}</span>
                            </LinkContents>
                            <IconLink width={16} height={16} />
                          </Item>
                        </Link>
                      </ListItem>
                    ))}
                  </ListContainer>
                }
                trigger={['click']}
                open={daoListVisible}
                onOpenChange={handleDaoListVisibleChange}
                placement="bottom"
                getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
              >
                <MyDaoButton type="button">
                  My DAO
                  <IconArrow />
                </MyDaoButton>
              </Dropdown>
            ) : (
              <Link href={daoList[0].link} passHref>
                <Item>
                  <span>
                    <Image src={`/icons/dao_tokens/ico_dao_token_${daoList[0].type}.svg`} width={20} height={20} />
                    <span>{daoList[0].name}</span>
                  </span>
                  <IconLink width={16} height={16} />
                </Item>
              </Link>
            )}
          </DaoLink>
        </>
      ) : (
        <Description>
          <Text>참여하고 있는 DAO가 없습니다.</Text>
          <Text>지금 모집중인 WONDER DAO에 참여해보세요!</Text>
          <TextButton buttonText="Go DAO Home" iconValue="arrow" type="link" href="/" size="sm" />
        </Description>
      )}

    </Container>
  );
};

DaoSection.defaultProps = {
  // TODO
};

const Container = styled.section([]);

const Title = styled.h3([
  tw`text-sm`,
  tw`font-bold`,
]);

const Box = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`mt-2`,
  tw`p-3`,
  tw`bg-gray-90`,
  tw`rounded`,
]);

const SmallTitle = styled.h4([
  tw`text-xs`,
  tw`text-gray-30`,
  tw`font-normal`,
  tw`leading-none`,
]);

const MyOwnInfo = styled.div([
  tw`flex`,
  tw`gap-6`,
  css`
    span {
      ${tw`relative`}
      ${tw`font-bold`}
      ${tw`text-[16px]`}
      ${tw`leading-none`}
      
      &::before {
        ${tw`block`}
        ${tw`absolute`}
        ${tw`top-0`}
        ${tw`left-[-13px]`}
        ${tw`w-px`}
        ${tw`h-full`}
        ${tw`bg-gray-80`}
        content: "";
      }
      
      &:first-child::before {
        ${tw`hidden`}
      }
    }
  `,
]);

const DaoLink = styled.div([
  tw`relative`,
  tw`mt-2`,
  css`
    .doa-link-list {
      &:before {
        ${tw`bottom-0`}
        ${tw`left-0`}
        ${tw`border`}
        ${tw`border-black`}
        ${tw`border-t-0`}
        ${tw`bg-white`}
        ${tw`opacity-100`}
      }      
    }
  `,
]);

const MyDaoButton = styled.button([
  tw`flex`,
  tw`items-center`,
  tw`justify-between`,
  tw`p-3`,
  tw`w-full`,
  tw`text-sm`,
  tw`leading-none`,
  tw`border`,
  tw`border-gray-80`,
  tw`rounded-sm`,

  css`
    transition: border-color 0.3s;
    
    &:hover {
      ${tw`border-black`}
    } 
    
    svg {
      ${tw`w-4`}
      ${tw`h-4`}
      transform: rotate(0deg);
      transition: transform 0.3s;
       
      path {
        fill: #1a1a1a;
      }
    }
    
    &.ant-dropdown-open {
      ${tw`border-black`}
    
      svg {
        transition: transform 0.3s;
        transform: rotate(180deg);
      }
    }
    `,
]);

const ListContainer = styled.ul([
  tw`overflow-y-auto`,
  tw`pt-2`,
  tw`pb-3`,
  tw`max-h-[130px]`,
  css`
     margin-right: 1px;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-thumb {
      height: 17%;
      background-color: rgba(0,0,0,1);
      border-radius: 10px;    
    }
  `,
]);

const ListItem = styled.li([
  tw`mx-auto`,
  tw`my-0`,
  tw`rounded-none`,
])

const LinkContents = styled.span([
  tw`flex`,
  tw`gap-1`,
])

const Item = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`justify-between`,
  tw`py-[9px]`,
  tw`px-3`,

  css`
    width: calc(100% - 2px);
    transition: background-color 0.2s;
  `,
]);

const Description = styled.p([
  tw`py-5`,
  tw`px-3`,
  tw`text-center`,
  tw`rounded`,
  tw`bg-gray-90`,

  css`
    a {
      ${tw`flex`}
      ${tw`justify-center`}
      ${tw`items-center`}
      ${tw`gap-0.5`}
      ${tw`mt-3`}
      ${tw`h-auto`}
      ${tw`text-xs`}
      ${tw`text-black`}
      ${tw`border-none`}
      
      svg {
        ${tw`w-3`}
        ${tw`h-3`}
        transform: rotate(270deg);
      }
      
      &:hover {
        ${tw`mt-3`}
        ${tw`border-none`}
      }
    }
  `,
]);

const Text = styled.span([
  tw`block`,
  tw`text-xs`,
  tw`text-gray-60`,
  tw`leading-normal`,
])