import {useCallback, useEffect, useMemo, useState} from 'react';

import { Checkbox, Collapse, Drawer } from 'antd';
import IconClose from '@/assets/icons/common/ico_close.svg';
import { useLayoutResize } from '@utils/layout';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Button } from '@components';
import { css } from '@emotion/core';
import { Global } from '@emotion/react';

const { Panel } = Collapse;

interface filterType {
  category: number;
  status: any[];
}

export const MyPageFilter = () => {
  const { isTablet, isLargeDesktop } = useLayoutResize();
  const [filterChecked, setFilterChecked] = useState<filterType>({
    category: 0,
    status: [],
  });

  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterSelected, setFilterSelected] = useState(0);
  const [destroyFilter, setDestroyFilter] = useState(false);

  const showDrawer = useCallback(() => {
    setOpen(true);
    setFilterOpen(false);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
    setFilterOpen(false);
  }, []);

  const filterOptions = useMemo(() => ({
    collection: [
      {
        label: 'LUS 264',
        value: 'LUS 264',
      },
      {
        label: 'Tangled Timepieces',
        value: 'Tangled Timepieces',
      },
    ],
  }), []);

  const statusFilter = useMemo(() => ([
    'Upcoming',
    'Closed',
    'Open for Offers',
    'On Auction',
    'Buy Now',
    'Now for Sale',
  ]), []);

  const onChangeCollection = (checkedValues: any) => {
    setFilterChecked({
      ...filterChecked,
      category: checkedValues.length,
    });
  };
  const onChangeStatus = (checkedValues: any) => {
    setFilterChecked({
      ...filterChecked,
      status: checkedValues,
    });
  };

  useEffect(() => {
    setFilterSelected(filterChecked.category);
  }, [filterChecked]);

  useEffect(() => {
    if (filterOpen) {
      onClose();
      setFilterChecked({ category: 0, status: [] });
      setDestroyFilter(true);
    } else {
      setDestroyFilter(false);
    }
  }, [filterOpen, onClose]);

  const filters = () => {
    return (
      <FilterWrapper>
        <Collapse expandIconPosition="end" defaultActiveKey={['1', '2']}>
          <Panel header="Collection" key="1">
            <Checkbox.Group
              options={filterOptions.collection}
              onChange={onChangeCollection}
            />
          </Panel>
          <Panel header="Type" key="2">
            <Checkbox.Group options={statusFilter} onChange={onChangeStatus} />
          </Panel>
        </Collapse>
        <StyledButton>
          <Button
            className="hover:bg-gray-90 rounded"
            width="100%"
            height="100%"
            color="black"
            iconType
            border="1px solid #1a1a1a"
            iconValue="reset"
          >
            Reset Filter
          </Button>
        </StyledButton>
        {!isTablet && (
          <StyledButton>
            <Button
              className="hover:bg-gray-10 rounded"
              width="100%"
              height="100%"
              background="#1A1A1A"
              color="white"
              onClick={onClose}
            >
              Apply
            </Button>
          </StyledButton>
        )}
      </FilterWrapper>
    );
  };

  return (
    <Container className="filter">
      <Global
        styles={css`
          .ant-drawer {
            .ant-drawer-content-wrapper {
              ${tw`!w-full`}
              ${tw`md:max-w-[260px]`}
            ${tw`xl:max-w-[240px]`}
            }
            &-header {
              ${tw`border-black`}
              ${tw`py-[13px]`}
              ${tw`px-4`}
            }
          }
        `}
      />
      <FilterButton>
        <Button
          className="hover:bg-gray-90"
          color="#1a1a1a"
          borderRadius="4px"
          border="1px solid #1a1a1a"
          width="100%"
          height="100%"
          iconType={filterSelected === 0}
          iconValue="filter"
          onClick={showDrawer}
        >
          {filterSelected > 0 && (
            <SelectedNumber>{filterSelected}</SelectedNumber>
          )}
          Filters
        </Button>
      </FilterButton>
      <Drawer
        title="Filters"
        open={open}
        placement="left"
        closable={false}
        onClose={onClose}
        key="left"
        maskClosable={false}
        mask={false}
        extra={
          <Button onClick={onClose}>
            <IconClose
              width={isTablet && !isLargeDesktop ? 32 : 24}
              height={isTablet && !isLargeDesktop ? 32 : 24}
            />
          </Button>
        }
        destroyOnClose={destroyFilter}
      >
        {filters()}
      </Drawer>
    </Container>
  );
};

const FilterButton = styled.div([
  tw`text-sm`,
  tw`h-9`,
  tw`w-full`,
  tw`md:w-[120px]`,
  tw`md:h-10`,
  tw`md:text-base`,
  tw`xl:text-sm`,
  tw`xl:h-[38px]`,
]);

const StyledButton = styled.div([
  tw`w-full`,
  tw`h-9`,
  tw`text-sm`,
  tw`rounded`,
  tw`mt-3`,
  tw`md:h-10`,
  tw`md:text-base`,
  tw`xl:h-[38px]`,
  tw`xl:text-sm`,
]);

const FilterWrapper = styled.div([
  tw`relative`,
  tw`top-auto`,
  tw`h-auto`,
  tw`overflow-y-hidden`,
  tw`w-full`,
  tw`mb-[95px]`,
  `transition: top .3s`,
  `max-height: none`,
  tw`md:top-0`,
  css`
    .ant-collapse {
      > .ant-collapse-item {
        &:not(:first-child) {
          ${tw`border-0`}
        }

        &.ant-collapse-item-active {
          .ant-collapse-header {
            &::before {
              transform: rotate(0deg);
              transform-origin: center;
            }
          }
        }
      }
      &-header {
        ${tw`!p-0`}
        ${tw`h-[52px]`}
        ${tw`flex`}
        ${tw`!items-center`}
        ${tw`relative`}
        
        &::before,
        &::after {
          ${tw`block`}
          ${tw`absolute`}
          ${tw`content-['']`}
          ${tw`right-[14px]`}
          ${tw`w-[12px]`}
          ${tw`border-b`}
          ${tw`border-black`}
          transition: transform .3s
        }

        &::before {
          transform: rotate(90deg);
        }

        &-text {
          ${tw`font-bold`}
          ${tw`text-base`}
          ${tw`md:text-xl`}
          ${tw`xl:text-base`}
        }
      }
      &-arrow {
        ${tw`!hidden`}
      }

      &-content {
        .ant-checkbox-wrapper {
          font-family: 'Roboto', sans-serif;
          ${tw`text-base`}
          ${tw`xl:text-sm`}
          .ant-checkbox-inner {
            &:before {
              ${tw`absolute`}
              ${tw`content-['']`}
              ${tw`top-[1px]`}
              ${tw`left-[1px]`}
              ${tw`w-3`}
              ${tw`h-3`}
              background: url("https://file.mir4global.com/nile/resources/icons/common/ico_check_w1.svg") 50% / cover no-repeat;
              ${tw`md:w-4`}
              ${tw`md:h-4`}
              ${tw`xl:w-3`}
              ${tw`xl:h-3`}
            }
          }
        }
        &-box {
          .ant-checkbox-group {
            ${tw`flex`}
            ${tw`flex-col`}
            ${tw`gap-[14px]`}
            ${tw`pt-[9px]`}
            ${tw`pb-[21px]`}
          }
        }
      }
    }
  `,
]);

const SelectedNumber = styled.span([
  tw`w-4`,
  tw`h-4`,
  tw`rounded-[8px]`,
  tw`bg-black`,
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`text-xs`,
  tw`leading-[100%]`,
  tw`text-white`,
]);

const Container = styled.div([tw`relative`]);
