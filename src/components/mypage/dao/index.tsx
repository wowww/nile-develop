import { useCallback, useState } from 'react';
import { Empty } from '@components/common/empty';
import { Select } from 'antd';

import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import { CustomPagination } from '@components/common/pagination';
import classNames from "classnames";

const { Option } = Select;

interface historyType {
  id: number;
  text: string;
  date: string;
  link?: string;
}

export const MypageDAOTab = () => {
  const [history, setHistory] = useState<historyType[]>([
    {
      id: 1,
      text: 'Joined WONDER DAO (Recruiting 94%)',
      date: '2022-07-01 13:30',
    },
    {
      id: 2,
      text: 'Joined WONDER DAO (Recruiting 94%)',
      date: '2022-07-01 13:30',
      link: '/',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = useCallback((page: number, pageSize: number) => {
    // TODO
  }, []);

  return (
    <div>
      <Wrapper>
      {history.length > 0 ? (
        <>
          <SelectWrapper>
            <Select
              defaultValue="1"
              bordered={false}
              getPopupContainer={(triggerNode) =>
                triggerNode.parentNode as HTMLElement
              }
              suffixIcon={<IconArrow />}
            >
              <Option value="1">WONDER DAO</Option>
              <Option value="2">DAO 1</Option>
              <Option value="3">DAO 2</Option>
              <Option value="4">DAO 3</Option>
            </Select>
          </SelectWrapper>
          <History>
            <HistoryTitle>History</HistoryTitle>
            <HistoryList>
              {history.map((item) => (
                <HistoryItem key={item.id}>
                  {item.link ? (
                    <Link href={item.link}>
                      <Text className={classNames({ link: item.link })}>{item.text}</Text>
                    </Link>
                  ) : (
                    <Text>{item.text}</Text>
                  )}
                  <Text>{item.date}</Text>
                </HistoryItem>
              ))}
            </HistoryList>
          </History>
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
      </Wrapper>
    </div>
  );
};

const PaginationWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`w-full`,
  tw`mt-8`,
  tw`xl:mt-10`,
]);

const Text = styled.span(({ className }) => [
  tw`text-sm`,
  tw`leading-[22px]`,
  tw`text-black`,
  tw`md:text-base`,
  tw`md:leading-[24px]`,
  tw`xl:text-sm`,
  tw`xl:leading-[22px]`,
  className?.includes('link') && [
    tw`cursor-pointer`,
    tw`font-bold`,
    tw`underline`,
  ],
]);

const HistoryItem = styled.li([
  tw`flex`,
  tw`flex-col`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`py-4`,
  tw`md:py-6`,
  tw`md:flex-row`,
  tw`md:justify-between`,
  tw`md:py-[25px]`,
]);

const HistoryList = styled.ul([tw`border-t`, tw`border-black`]);

const Wrapper = styled.div([
  tw`w-full`,
  tw`pb-[52px]`,
  tw`pt-[26px]`,
  tw`px-5`,
  tw`md:px-10`,
  tw`md:pt-[30px]`,
  tw`xl:pb-[100px]`,
  tw`xl:pt-[38px]`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
  tw`xl:px-0`,
]);

const HistoryTitle = styled.h3([
  tw`text-base`,
  tw`text-black`,
  tw`font-bold`,
  tw`leading-[100%]`,
  tw`md:text-xl`,
]);

const History = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-4`,
  tw`md:gap-7`,
  tw`mt-12`,
  tw`md:mt-[54px]`,
  tw`xl:mt-[58px]`,
]);

const SelectWrapper = styled.div([
  css`
    .ant-select {
      &-selector {
        ${tw`!p-0`}
      }
      &-selection-item {
        ${tw`!text-xl`}
        ${tw`font-bold`}
        ${tw`text-black`}
        ${tw`leading-[100%]`}
        ${tw`!pr-8`}
        ${tw`md:!text-2xl`}
      }
      &-arrow {
        ${tw`right-2`}
        ${tw`text-[19px]`}
        transition: all .3s;

        svg {
          path {
            fill: #1a1a1a;
          }
        }
      }

      &-open {
        .ant-select-selection-item {
          ${tw`!text-[#875cff]`}
          transition: all .3s;
        }
        .ant-select-arrow {
          transform: rotate(180deg);
          transition: transform 0.3s;
          will-change: transform;
        }
      }

      &-dropdown {
        ${tw`!top-[38px]`}
        ${tw`!min-w-[170px]`}
        ${tw`py-3`}
        ${tw`border`}
        ${tw`border-gray-80`}
        ${tw`rounded`}
        ${tw`md:!top-[42px]`}
        ${tw`md:!min-w-[200px]`}
        box-shadow: 0 5px 20px rgb(0 0 0 / 20%);
      }

      .ant-select-item {
        ${tw`py-[14px]`}
        ${tw`pr-[36px]`}
        ${tw`pl-3`}
      }

      .ant-select-item-option-selected {
        ${tw`after:right-3`}
      }

      &-item-option-selected:not(.ant-select-item-option-disabled) {
        ${tw`bg-transparent`}
        font-weight: inherit;
        ${tw`after:content-['']`}
        ${tw`after:block`}
        ${tw`after:absolute`}
        ${tw`after:top-0`}
        ${tw`after:right-2`}
        ${tw`after:w-[13px]`}
        ${tw`after:h-full`}
    
        &::after {
          background: url('https://file.mir4global.com/nile/resources/icons/common/arrow/ico_arrow_check.svg')
            no-repeat 50% / contain !important;
        }
      }
    }
  `,
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
