import styled from "@emotion/styled";
import tw from "twin.macro";

import IconInfo from '@/assets/icons/common/icon_info.svg';
import { useMemo } from "react";
import { Popover } from "antd";
import { css } from '@emotion/core';
import { Global } from '@emotion/react';

interface MypageAssetProps {
  data: {
    totalAsset: number,
    totalBalance: {
      amount: number,
      dao: number,
    },
    myNftPrice: {
      amount: number,
      nft: number,
    },
  };
}

export const MypageAsset = () => {
  const data = useMemo(() => ({
    totalAsset: 45000,
    totalBalance: {
      amount: 13000,
      dao: 12,
    },
    myNftPrice: {
      amount: 32000,
      nft: 123,
    },
  }), []);

  return (
    <Container>
      <Global styles={css`
        .mypage-tooltip {
          .ant-popover-arrow-content {
            ${tw`bg-gray-10`}
            ${tw`w-2`}
            ${tw`h-2`}
            ${tw`absolute`}
            ${tw`inset-0`}
            ${tw`block`}
            &::before {
              content: none;
            }
          }
          .ant-popover-arrow {
            transform: translateY(-99%) translateX(-50%) !important;
          }
        }
      `}
      />
      <TotalAsset>
        <Name>
          Total Asset
          <Popover
            overlayClassName="mypage-tooltip"
            placement="top"
            content={<TooltipContent>DAO Balance와 NFT Price을 합산한 금액입니다.</TooltipContent>}
            trigger="click"
          >
            <IconWrapper type="button">
              <IconInfo width={16} height={16} />
            </IconWrapper>
          </Popover>
        </Name>
        <TotalAmount>${data.totalAsset}</TotalAmount>
      </TotalAsset>
      <UnitAsset>
        <Content>
          <Name>
            Total balance of included DAO
            <Popover
              overlayClassName="mypage-tooltip"
              placement="top"
              content={<TooltipContent>참여 중인 모든 DAO에서 보유하고 있는 DAO Token과 Governance Token을 달러로 환산하여 합산된 금액입니다.</TooltipContent>}
              trigger="click"
            >
              <IconWrapper type="button">
                <IconInfo width={16} height={16} />
              </IconWrapper>
            </Popover>
          </Name>
          <Value>
            <Amount>${data.totalBalance.amount}</Amount>
            <Amount>{data.totalBalance.dao}</Amount>
            <Unit>DAO</Unit>
          </Value>
        </Content>
        <Content>
          <Name>
            My NFT Price
            <Popover
              overlayClassName="mypage-tooltip"
              placement="top"
              content={<TooltipContent>My NFT Price는 내가 구매한 가격을 기준으로 합산된 금액입니다.</TooltipContent>}
              trigger="click"
            >
              <IconWrapper type="button">
                <IconInfo width={16} height={16} />
              </IconWrapper>
            </Popover>
          </Name>
          <Value>
            <Amount>${data.myNftPrice.amount}</Amount>
            <Amount>{data.myNftPrice.nft}</Amount>
            <Unit>DAO</Unit>
          </Value>
        </Content>
      </UnitAsset>
    </Container>
  )
};

const TooltipContent = styled.div([
  tw`text-xs`,
  tw`leading-[20px]`,
  tw`relative`,
  tw`bg-gray-10`,
  tw`py-[7px]`,
  tw`px-[8px]`,
  tw`rounded-[2px]`,
  tw`text-white`,
  `word-break: keep-all`,
  tw`max-w-[200px]`,
]);

const IconWrapper = styled.button([
  `
    svg {
      path {
        fill: #737373;
      }
    }
  `,
])

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`md:w-full`,
  tw`xl:flex-row`,
  tw`xl:items-center`,
  tw`xl:gap-4`,
]);

const TotalAmount = styled.strong([
  tw`text-2xl`,
  tw`text-black`,
  tw`leading-[100%]`,
  tw`font-bold`,
  tw`md:text-[32px]`,
  tw`xl:w-[200px]`,
  tw`xl:relative`,
  css`
    &::after {
      position: absolute;
      top: 0;
      right: -20px;
      content: '';
      height: 100%;
      width: 1px;
      background: #D9D9D9;
    }
  `,
]);

const UnitAsset = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`m-5`,
  tw`gap-3`,
  tw`md:flex-row`,
  tw`md:mx-8`,
  tw`xl:mr-12`,
  tw`xl:my-auto`,
]);

const Amount = styled.strong([
  tw`font-bold`,
  tw`text-xl`,
  tw`leading-[100%]`,
  tw`text-black`,
  tw`md:text-[22px]`,
  tw`xl:text-xl`,
  tw`xl:leading-[100%]`,
]);

const Unit = styled.span([
  tw`text-sm`,
  tw`leading-[100%]`,
  tw`text-black`,
  tw`ml-1`,
]);

const Value = styled.div([
  tw`flex`,
  tw`items-baseline`,
  css`
    ${Amount} {
      &:first-child {
        ${tw`mr-[13px]`}
        ${tw`relative`}
        ${tw`md:mr-[17px]`}
        ${tw`md:mr-[21px]`}
        
        &::after {
          ${tw`absolute`}
          ${tw`top-0`}
          ${tw`right-[-6px]`}
          ${tw`content-['']`}
          ${tw`h-full`}
          ${tw`w-px`}
          ${tw`bg-gray-80`}
          ${tw`md:right-[-8px]`}
          ${tw`md:right-[-10px]`}
        }
      }
    }
  `,
]);


const Name = styled.span([
  tw`text-xs`,
  tw`leading-[100%]`,
  tw`text-gray-40`,
  tw`flex`,
  tw`gap-1`,
  tw`items-center`,
]);

const TotalAsset = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`mx-5`,
  tw`mt-5`,
  tw`pb-3`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`md:flex-row`,
  tw`md:justify-between`,
  tw`md:items-center`,
  tw`md:pb-5`,
  tw`md:mx-8`,
  tw`xl:border-0`,
  tw`xl:p-0`,
  tw`xl:ml-12`,
  tw`xl:my-7`,
  tw`xl:gap-4`,
]);

const Container = styled.div([
  tw`w-full`,
  tw`rounded`,
  tw`border`,
  tw`border-gray-80`,
  tw`bg-white`,
  tw`xl:flex`,
  tw`xl:justify-between`,
  tw`xl:max-w-[1200px]`,
]);