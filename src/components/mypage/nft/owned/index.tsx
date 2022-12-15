import styled from '@emotion/styled';
import React, {useCallback, useMemo, useState} from 'react';
import tw from 'twin.macro';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import { css } from '@emotion/core';
import { MarketNftList } from '@components/market/nft/list';
import { CustomPagination } from '@components/common/pagination';
import Link from 'next/link';
import { Empty } from '@components/common/empty';
import { MyPageFilter } from '@components/mypage/filter';
import { CustomSelect } from '@components/common/select';
import {MyPageNftAlbumModal} from "@components/mypage/nft/owned/modal";
import Nft from "@/models/nile/market/nft";

type MypageNftOwnedProps = {
  nfts: Nft[];
}

export const MypageNftOwned = ({ nfts }: MypageNftOwnedProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = useCallback((page: number, pageSize: number) => {
    // TODO
  }, []);

  const onPeriodChange = useCallback((value: string) => {
    // TODO
  }, []);

  const selectOptions = useMemo(() => ([
    {
      value: 'recently',
      text: 'Recently Active',
    },
    {
      value: 'ending',
      text: 'Ending Soon',
    },
    {
      value: 'oldest',
      text: 'Oldest',
    },
    {
      value: 'highest',
      text: 'Highest price',
    },
    {
      value: 'lowest',
      text: 'Lowest price',
    },
  ]), []);

  return (
    <div>
      {nfts.length > 0 ? (
        <>
          <ListWrapper>
            <ListHeader>
              <FilterWrapper>
                <MyPageFilter />
                <UtilsWrapper>
                    <MyPageNftAlbumModal nfts={nfts}/>
                   <CustomSelect size="middle" defaultValue="recently" options={selectOptions} onChange={onPeriodChange} />
                </UtilsWrapper>
              </FilterWrapper>
            </ListHeader>
            <ListContent>
               <Count>{nfts.length} NFT</Count>
               <MarketNftList data={nfts} viewType="grid" />
            </ListContent>
          </ListWrapper>
          <PaginationWrapper>
            <CustomPagination
              activate={currentPage}
              defaultCurrent={1}
              defaultPageSize={10}
              total={150}
              onChange={onPageChange}
            />
          </PaginationWrapper>
        </>
      ) : (
        <Empty
          iconType="filter"
          subText={
            <SubText>
              참여하고 있는 DAO가 없습니다.
              <br />
              지금 모집중인 WONDER DAO에 참여해보세요!
            </SubText>
          }
          button={
            <Link href="/">
              <StyledButton>
                <span>Go DAO Home</span>
                <IconArrow />
              </StyledButton>
            </Link>
          }
        />
      )}
    </div>
  );
};

const UtilsWrapper = styled.div([
  tw`flex`,
  tw`gap-2`,
  tw`w-full`,
  tw`flex-col`,
  tw`items-end`,
  tw`md:flex-row`,
  tw`md:w-fit`,
]);

const ListContent = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`mt-5`,
  tw`md:mt-6`,
  tw`md:relative`,
  tw`xl:mt-4`,
]);

const FilterWrapper = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`justify-between`,
  tw`w-full`,
  tw`relative`,
  css`
    .filter {
      ${tw`w-[50%]`}
      ${tw`absolute`}
      ${tw`top-0`}
      ${tw`left-0`}
      ${tw`md:static`}
    }
    .middle {
      ${tw`w-full`}
      ${tw`md:w-auto`}
      > div {
        ${tw`w-full`}
        ${tw`md:w-auto`}
      }
    }
  `,
]);

const Count = styled.span([
  tw`text-base`,
  tw`leading-[100%]`,
  tw`text-black`,
  tw`md:absolute`,
  tw`md:left-[132px]`,
  tw`md:top-[-56px]`,
  tw`md:text-xl`,
  tw`xl:text-base`,
  tw`xl:top-[-46px]`,
]);

const SubText = styled.span([
  tw`text-xs`,
  tw`leading-[20px]`,
  tw`text-center`,
  tw`text-gray-60`,
]);

const StyledButton = styled.div([
  tw`cursor-pointer`,
  tw`text-black`,
  tw`text-xs`,
  tw`leading-[100%]`,
  tw`flex`,
  tw`gap-1`,
  tw`items-center`,
  `
    &:hover {
      span {
        text-decoration: underline;
      }
    }
    svg {
      transform: rotate(-90deg);
      
      path {
        fill: #1a1a1a;
      }
    }
  `,
]);

const PaginationWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`w-full`,
  tw`mb-[52px]`,
  tw`xl:mb-[100px]`,
]);

const ListHeader = styled.div([
  tw`mb-2`,
  tw`md:mb-6`,
  tw`xl:mb-4`,
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
]);

const ListWrapper = styled.div([
  tw`mb-8`,
  tw`xl:mb-10`,
  css`
    .grid {
      ${tw`grid`}
      ${tw`grid-cols-2`}
      ${tw`gap-x-4`}
      ${tw`gap-y-8`}
      ${tw`md:gap-x-6`}
      ${tw`md:gap-y-12`}
      ${tw`xl:gap-12`}
      ${tw`xl:grid-cols-4`}
      
      > div {
        ${tw`w-full`}
      }
    }
  `,
]);