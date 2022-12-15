import React, { ChangeEvent, useState } from 'react';
import { MarketFilter } from '@components/market/filter';
import classNames from 'classnames';
import IconViewList from '@/assets/icons/common/ico_view_list.svg';
import IconViewCard from '@/assets/icons/common/ico_view_card.svg';
import { MarketNftList } from '@components/market/nft/list';
import { CustomPagination } from '@components/common/pagination';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useRecoilState } from 'recoil';
import { MarketNftListViewType } from '@recoil/atoms/market';
import Nft from '@/models/nile/market/nft';

export type MarketNftSectionProps = {
  items: Nft[]
};

export const MarketNftSection = ({ items }: MarketNftSectionProps) => {
  const [viewType, setViewType] = useRecoilState(MarketNftListViewType);

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <NftContainer>
      <FilterWrapper>
        <MarketFilter
          onChangeFilter={() => {
            // TODO
          }}
        />
      </FilterWrapper>
      <NftList>
        <ListHead>
          <span>{items.length} NFT</span>
          <ToggleButtonGroup
            onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setViewType(value as 'list' | 'grid')}
          >
            <Label className={classNames({ checked: viewType === 'list' })}>
              <ToggleButton
                value="list"
                type="radio"
                checked={viewType === 'list'}
              />
              <IconViewList />
            </Label>
            <Label className={classNames({ checked: viewType === 'grid' })}>
              <ToggleButton
                value="grid"
                type="radio"
                checked={viewType === 'grid'}
              />
              <IconViewCard />
            </Label>
          </ToggleButtonGroup>
        </ListHead>
        <MarketNftList data={items} viewType={viewType} />
        <PaginationWrapper>
          <CustomPagination
            activate={currentPage} defaultCurrent={1} defaultPageSize={10} total={150}
            onChange={onPageChange}
          />
        </PaginationWrapper>
      </NftList>
    </NftContainer>
  );
};

const FilterWrapper = styled.div([
  tw`min-w-[200px]`,
  tw`sticky`,
  tw`top-[120px]`,
  tw`h-fit`,
]);

const NftContainer = styled.div([
  tw`max-w-[1200px]`,
  tw`mx-auto`,
  tw`flex`,
  tw`gap-[60px]`,
  tw`relative`,
  tw`px-5`,
  tw`md:px-10`,
  tw`xl:px-0`,
]);

const NftList = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const ListHead = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`h-fit`,
  `padding: 4px 4px 4px 0`,
  tw`mb-4`,
]);

const ToggleButtonGroup = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`gap-4`,
]);

const ToggleButton = styled.input([
  tw`hidden`,
]);

const Label = styled.label(({ className }) => [
  tw`h-fit`,
  tw`cursor-pointer`,
  className?.includes('checked') && [
    `
    svg {
      path {
        fill: #1A1A1A;
      }
    }
    `,
  ],
]);

const PaginationWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`mt-7`,
]);
