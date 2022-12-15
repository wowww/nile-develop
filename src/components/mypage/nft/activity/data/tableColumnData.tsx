import { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import Link from 'next/link';
import IconTableArrow from '@/assets/icons/common/arrow/ico_table_arrow.svg';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import classNames from 'classnames';
import { css, Global } from '@emotion/core';
import { Popover } from 'antd';

export interface collectionTableDataType {
  key?: string;
  nftLink: string;
  link: string;
  img: string;
  nft: string;
  from: string;
  to: string | null;
  type: string;
  price: string;
  date: string;
  detailDate: string | null;
  whichCancel?: string;
}

const offersType = (type: string) => {
  return type === 'Canceled' || type === 'Expired';
};

const calcElapsedTime = (date: Date) => {
  // TODO
};

export const collectionTableColumns: ColumnsType<collectionTableDataType> = [
  {
    title: 'NFT',
    key: 'nft',
    align: 'left',
    render: (_, { nftLink, nft, img, type }) => (
      <Name>
        <ImageContainer>
          <Image src={img} layout="fill" loader={NileCDNLoader} />
        </ImageContainer>
        <Link href={nftLink}>
          <Text>{nft}</Text>
        </Link>
        {type === 'Expired' && (
          <RefundButton type="button">환불받기</RefundButton>
        )}
      </Name>
    ),
  },
  {
    title: 'From To',
    key: 'fromto',
    align: 'center',
    render: (_, { from, to }) => (
      <WalletInfo>
        <WalletButton type="button" onClick={() => {
          //
        }}>
          {from}
        </WalletButton>
        {to && <IconTableArrow />}
        <WalletButton type="button" onClick={() => {
          //
        }}>
          {to}
        </WalletButton>
      </WalletInfo>
    ),
  },
  {
    title: 'Type',
    key: 'type',
    align: 'center',
    render: (_, { type, whichCancel }) => (
      <Type className={classNames({ cancel: offersType(type) })}>
        {offersType(type) ? (
          <>
            <TypeText>{whichCancel}</TypeText>
            <Tag>{type}</Tag>
          </>
        ) : (
          <TypeText>{type}</TypeText>
        )}
      </Type>
    ),
  },
  {
    title: 'Price',
    key: 'price',
    align: 'right',
    className: 'align-right',
    render: (_, { type, price }) => (
      <Price className={classNames({ cancel: offersType(type) })}>
        {price}
      </Price>
    ),
  },
  {
    title: 'Date',
    key: 'date',
    align: 'right',
    className: 'align-right',
    render: (_, { link, date, detailDate }) => (
      <Link href={link}>
        <DateWrapper>
          <Global
            styles={css`
              .tooltip {
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
              }
            `}
          />
          {detailDate === null ? (
            <Date>{date}</Date>
          ) : (
            <Popover
              overlayClassName="tooltip"
              placement="top"
              content={<TooltipContent>{detailDate}</TooltipContent>}
              trigger="hover"
              getPopupContainer={(triggerNode) =>
                triggerNode.parentNode as HTMLElement
              }
            >
              <Date>{date}</Date>
            </Popover>
          )}
          <IconRight />
        </DateWrapper>
      </Link>
    ),
  },
];

const DateWrapper = styled.div([tw`flex`, tw`gap-1`]);

const IconRight = styled(IconArrow)([
  `
    transform: rotate(-90deg);
    
    path {
      fill: #1a1a1a;
    }
  `,
]);

const Date = styled.div([
  tw`text-black`,
  tw`text-xs`,
  tw`hover:underline`,
  tw`cursor-pointer`,
]);

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

const Price = styled.span(({ className }) => [
  className?.includes('cancel') && [
    tw`text-gray-70`,
    `text-decoration: line-through`,
  ],
]);

const Tag = styled.span([
  tw`flex`,
  tw`items-center`,
  tw`rounded-[20px]`,
  tw`px-2`,
  tw`text-xs`,
  tw`leading-none`,
  tw`h-5`,
  tw`border`,
  tw`border-gray-60`,
  tw`text-gray-60`,
  tw`font-bold`,
]);

const TypeText = styled.span([tw`text-black`, tw`text-xs`]);

const Type = styled.div(({ className }) => [
  tw`flex`,
  tw`gap-2`,
  tw`items-center`,
  className?.includes('cancel') && [
    css`
      ${TypeText} {
        ${tw`text-gray-70`}
        text-decoration: line-through;
      }
    `,
  ],
]);

const WalletButton = styled.button([
  tw`hover:underline`,
  tw`text-xs`,
  tw`text-black`,
]);

const WalletInfo = styled.div([tw`flex`, tw`gap-2`]);

const RefundButton = styled.button([
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`w-[61px]`,
  tw`h-[20px]`,
  tw`bg-black`,
  tw`rounded-[2px]`,
  tw`text-xs`,
  tw`text-white`,
]);

const Name = styled.div([tw`flex`, tw`gap-2`, tw`items-center`]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-10`,
  tw`h-10`,
  tw`flex-shrink-0`,
]);

const Text = styled.span([tw`text-black`, tw`text-xs`, tw`leading-[18px]`]);
