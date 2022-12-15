import styled from '@emotion/styled';
import React, { useCallback, useMemo, useState } from 'react';
import tw from 'twin.macro';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import { css } from '@emotion/core';
import { CustomPagination } from '@components/common/pagination';
import Link from 'next/link';
import { Empty } from '@components/common/empty';
import { MyPageFilter } from '@components/mypage/filter';
import { NftFavoriteCards } from '@components/market/nft/card';
import { CustomSelect } from '@components/common/select';

export const MypageNftFavorites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = useCallback((page: number, pageSize: number) => {
    // TODO
  }, []);

  const data = useMemo(
    () => [
      {
        id: 1,
        title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
        link: '/',
        img: '/img/banner/img_A02_Aldgate.png',
        count: 1000,
        isLike: true,
      },
      {
        id: 2,
        title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
        link: '/',
        img: '/img/banner/img_A02_Aldgate.png',
        count: 1000,
        isLike: true,
      },
      {
        id: 3,
        title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
        link: '/',
        img: '/img/banner/img_A02_Aldgate.png',
        count: 1000,
        isLike: true,
      },
      {
        id: 4,
        title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
        link: '/',
        img: '/img/banner/img_A02_Aldgate.png',
        count: 1000,
        isLike: true,
      },
      {
        id: 5,
        title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
        link: '/',
        img: '/img/banner/img_A02_Aldgate.png',
        count: 1000,
        isLike: true,
      },
      {
        id: 6,
        title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
        link: '/',
        img: '/img/banner/img_A02_Aldgate.png',
        count: 1000,
        isLike: true,
      },
      {
        id: 7,
        title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
        link: '/',
        img: '/img/banner/img_A02_Aldgate.png',
        count: 1000,
        isLike: true,
      },
    ],
    [],
  );

  const onPeriodChange = useCallback((value: string) => {
    // TODO
  }, []);

  const selectOptions = useMemo(
    () => [
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
    ],
    [],
  );

  return (
    <div>
      {data.length > 0 ? (
        <>
          <Container>
            <ListHeader>
              <FilterWrapper>
                <MyPageFilter />
                <CustomSelect
                  size="middle"
                  defaultValue="recently"
                  options={selectOptions}
                  onChange={onPeriodChange}
                />
              </FilterWrapper>
            </ListHeader>
            <ListContent>
              <Count>{data.length} NFT</Count>
              <ListWrapper>
                {data.map((item) => (
                  <NftFavoriteCards {...item} key={item.id} />
                ))}
              </ListWrapper>
            </ListContent>
          </Container>
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

const ListWrapper = styled.div([
  tw`grid`,
  tw`grid-cols-2`,
  tw`gap-x-4`,
  tw`gap-y-8`,
  tw`md:gap-x-6`,
  tw`md:gap-y-12`,
  tw`xl:gap-12`,
  tw`xl:grid-cols-4`,
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
  tw`gap-2`,
  tw`w-full`,
  css`
    > div {
      ${tw`w-full`}
      ${tw`md:w-auto`}
    }

    .middle {
      > div {
        ${tw`w-full`}
        ${tw`md:w-auto`}
      }
    }
  `,
  tw`md:justify-between`,
  tw`md:gap-4`,
  tw`xl:gap-3`,
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

const Container = styled.div([
  tw`mb-8`,
  tw`xl:mb-10`,
]);
