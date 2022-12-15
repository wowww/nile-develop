/* eslint-disable react/require-default-props */
import React, { useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { Pagination } from 'antd';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import IconPagination from '@/assets/icons/common/ico_pagination.svg';
import styled from "@emotion/styled";
import tw from "twin.macro";
import {useLayoutResize} from "@utils/layout";

interface CustomPaginationProps {
  activate: number;
  defaultCurrent: number;
  defaultPageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
}

export const CustomPagination = ({ activate, defaultCurrent, defaultPageSize, total, onChange }: CustomPaginationProps) => {
  const { isTablet } = useLayoutResize();
  const paginationRef = useRef<HTMLDivElement>(null);

  const lastPage = total / defaultPageSize;

  const deleteFirstItem = useMemo(() => {
    return !isTablet && activate > 3;
  }, [isTablet, activate]);

  useEffect(() => {
    const lastItem = paginationRef.current?.querySelector(`.ant-pagination-item-${lastPage}`) ?? document.body;
    if(!isTablet && activate === lastPage - 3) {
      lastItem.setAttribute('style', 'display: none');
    } else {
      lastItem.removeAttribute('style');
    }
  }, [isTablet, activate, lastPage])

  const paginationCustom = (type: string, page: number) => {
    if (type === 'prev') return <IconArrow />;
    if (type === 'next') return <IconArrow />;
    if (type === 'jump-prev' || type === 'jump-next') return <IconPagination />;
    if (type === 'page') {
      if (page < 10) {
        return `0${page}`;
      }
      return page;
    }

    return false;
  };

  return (
    <Container className={classNames('pagination-wrap', { deleteFirstItem })} ref={paginationRef}>
      <Pagination
        defaultCurrent={defaultCurrent}
        defaultPageSize={defaultPageSize}
        total={total}
        showSizeChanger={false}
        responsive={false}
        size="default"
        showLessItems={false}
        itemRender={(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: React.ReactNode) =>
          paginationCustom(type, page)
        }
        onChange={onChange}
      />
    </Container>
  );
};

const Container = styled.div(({ className }) => [
  tw`w-fit`,
  className?.includes('deleteFirstItem') && [
    `
      .ant-pagination-item-1 {
        display: none;
      }
    `,
  ],
])