import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/core';

import { Select } from 'antd';
import { TagData } from '@/components/tagdata';
import classNames from 'classnames';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NileCDNLoader } from '@utils/image/loader';
import { useLayoutResize } from '@utils/layout';
import { RadioTabButton } from '@components/common/button/radio';
import { NileApiService } from '@/services/nile/api';
import { CustomSelect } from '@components/common/select';

const { Option } = Select;

interface RankingItemType {
  ranking: string;
  rankingChange?: number;
  name: string;
  collectionName: string;
  img: string;
  link: string;
  price?: string;
  priceChange?: number;
  transitionDay?: number;
}

interface CategoryRanking {
  value: string;
  text: string;
}

export type MarketRankingProps = {
  // TODO
}

export const MarketRanking = (props: MarketRankingProps) => {
  const api = NileApiService();
  const [currentList, setCurrentList] = useState<RankingItemType[]>([]);
  const [currentPeriod, setCurrentPeriod] = useState<string>('day');
  const { isTablet } = useLayoutResize();
  const [transactionRanks, setTransactionRanks] = useState<RankingItemType[]>([]);
  const [priceRanks, setPriceRanks] = useState<RankingItemType[]>([]);

  const [selectedTab, setSelectedTab] = useState<string>('frequent');

  useEffect(() => {
    api.marketplace.rank.transaction.getList().then(setTransactionRanks);
  }, [api, setTransactionRanks]);

  useEffect(() => {
    api.marketplace.rank.price.getList().then(setPriceRanks);
  }, [api, setPriceRanks]);

  const categoryList: CategoryRanking[] = [
    {
      value: 'frequent',
      text: 'Frequent Transactions',
    },
    {
      value: 'highest',
      text: 'Highest last sale',
    },
  ];

  useEffect(() => {
    switch (selectedTab) {
      case 'frequent':
        setCurrentList(transactionRanks);
        break;
      case 'highest':
        setCurrentList(priceRanks);
        break;
      default:
        setCurrentList(transactionRanks);
        break;
    }
  }, [selectedTab, transactionRanks, priceRanks]);

  const selectOptions = useMemo(() => ([
    {
      value: 'Day',
      text: '1Day',
    },
    {
      value: 'Week',
      text: '1Month',
    },
    {
      value: 'Month',
      text: '1Month',
    },
  ]), []);

  const onPeriodChange = useCallback((value: string) => {
    setCurrentPeriod(value);
  }, []);

  return (
    <div style={{ marginTop: '80px' }}>
      <Header>
        <Title>Ranking</Title>
        <RadioTabButton buttonList={categoryList} currentTab={selectedTab} setCurrentTab={setSelectedTab} />
        <RankingCategory>
          <Description>{selectedTab === 'frequent' ? '* 일정 기간동안 발생한 TRANSACTIONS이 많은 순으로 정산' : '* 최근 판매가가 가장 비싼 순으로 기준으로 정산'}</Description>
          <CustomSelect size="small" defaultValue="Day" options={selectOptions} onChange={onPeriodChange} />
        </RankingCategory>
      </Header>
      <RankingWrapper>
        <RankingTable>
          <RankingHead>
            <tr>
              <Col style={{ width: '62px' }}>Ranking</Col>
              <Col style={{ width: '60%' }}>NFT</Col>
              {selectedTab === 'frequent' &&
                <Col style={{ textAlign: 'right' }}>Transactions a {currentPeriod}</Col>
              }
              {selectedTab === 'highest' && (
                <>
                  <Col style={{ textAlign: 'right' }}>Price($)</Col>
                  {isTablet && <Col style={{ textAlign: 'right' }}>change(%)</Col>}
                </>
              )}
            </tr>
          </RankingHead>
          <RankingBody>
            {currentList.map((item: RankingItemType, index: number) => {
              return (
                <RankingItem key={`ranking-list-${item.ranking}`} className={classNames({ big: index < 3 })}>
                  <Link href={`${item.link}/${item.ranking}`}>
                    <>
                      <td>
                        <Ranking className={classNames({ hasChange: item.rankingChange, big: index < 3 })}>
                          <strong>{item.ranking}</strong>
                          {item.rankingChange && <TagDataWrapper><TagData number={item.rankingChange} showArrow /></TagDataWrapper>}
                        </Ranking>
                      </td>
                      <td>
                        <Art>
                          <ImageContainer>
                            <Image width="100%" height="100%" src={item.img} alt="" loader={NileCDNLoader} />
                          </ImageContainer>
                          <InfoWrapper>
                            <NftName>{item.name}</NftName>
                            <CollectionName>{item.collectionName}</CollectionName>
                          </InfoWrapper>
                        </Art>
                      </td>
                      {selectedTab === 'frequent' && (
                        <td style={{ textAlign: 'right' }}><Value>{item.transitionDay}</Value></td>
                      )}
                      {selectedTab === 'highest' && (
                        <>
                          <td style={{ textAlign: 'right' }}><Value>{item.price}</Value></td>
                          {isTablet && <PriceChange><TagData number={item.priceChange ?? 0} showArrow format="%" /></PriceChange>}
                        </>
                      )}
                    </>
                  </Link>
                </RankingItem>
              );
            })}
          </RankingBody>
        </RankingTable>
      </RankingWrapper>
    </div>
  );
};

const Title = styled.h3([
  tw`font-header`,
  tw`text-xl`,
  tw`md:text-3xl`,
  tw`font-bold`,
]);

const Header = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[20px]`,
]);

const RankingCategory = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`justify-between`,
]);

const RankingTable = styled.table([
  tw`w-full`,
  tw`table-fixed`,
]);

const RankingHead = styled.thead([
  `
    border-top: 2px solid #1a1a1a;
    border-bottom: 1px solid #d9d9d9;
  `,
]);

const Col = styled.td([
  tw`text-black`,
  tw`text-xs`,
  tw`py-[13px]`,
  tw`px-[8px]`,
]);

const RankingBody = styled.tbody([
  `
  > tr {
    border-bottom: 1px solid #d9d9d9;
  }
  `,
]);

const Ranking = styled.div(({ className }) => [
  tw`font-header`,
  tw`text-3xl`,
  tw`flex`,
  tw`justify-center`,
  tw`h-[64px]`,
  tw`items-center`,
  tw`relative`,
  className?.includes('hasChange') && className?.includes('big') && [
    `
    @media (min-width: 1280px) {
      > strong {
        position: relative;
        padding: 2px 0;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #1A1A1A;
        }
      }

      > div {
        position: absolute;
        bottom: 22px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    `,
  ],
]);

const Art = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`items-center`,
  tw`gap-2`,
  tw`h-[64px]`,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-0.5`,
  tw`justify-center`,
  tw`w-[70%]`,
]);

const NftName = styled.span([
  tw`text-sm`,
  tw`text-black`,
  tw`w-full`,
  tw`break-all`,
  `
    @media (min-width: 768px) {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  `,
]);

const CollectionName = styled.span([
  tw`text-xs`,
  tw`text-gray-60`,
  tw`w-full`,
  tw`overflow-hidden`,
  tw`hidden`,
  tw`md:block`,
  `
    @media (min-width: 768px) {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  `,
]);

const TagDataWrapper = styled.div([
  tw`hidden`,
  tw`xl:block`,
]);

const ImageContainer = styled.div([
  tw`w-[40px]`,
  tw`h-[40px]`,
]);

const Value = styled.span([
  tw`text-sm`,
  tw`px-[8px]`,
  tw`flex`,
  tw`items-center`,
  tw`justify-end`,
  tw`h-[64px]`,
]);

const Description = styled.span([
  tw`text-sm`,
  tw`text-gray-30`,
]);

const PriceChange = styled.td([
  tw`h-[64px]`,
  `
   > div {
    height: 100%;
    align-items: center;
    justify-content: flex-end;
   }
  `,
]);

const RankingItem = styled.tr(({ className }) => [
  className?.includes('big') && [
    css`
      ${Ranking}, ${Art}, ${Value}, ${PriceChange} {
        ${tw`xl:h-[136px]`}
      }

      ${ImageContainer} {
        ${tw`xl:w-[80px]`}
        ${tw`xl:h-[80px]`}
      }
    `,
  ],
]);

const RankingWrapper = styled.div([
  tw`relative`,
  tw`mt-[15px]`,
  `
    @media (min-width: 1280px) {
      columns: 2;
      column-gap: 48px;
    }

    &:after {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(50% - 24px);
      height: 2px;
      background: #1a1a1a;
      content: "";
    }
  `,
]);
