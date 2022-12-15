import { useCallback, useState } from 'react';
import { Checkbox, Collapse } from 'antd';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from 'twin.macro';
import { NileCDNLoader } from '@utils/image/loader';
import data from './data.json';
import { useLayoutResize } from '@utils/layout';
import { useRecoilState } from 'recoil';
import { MarketFilterState } from '@recoil/atoms/market';

export type MarketFilterProps = {
  onChangeFilter: () => void;
};

export const MarketFilter = ({ onChangeFilter }: MarketFilterProps) => {
  const { isMobile } = useLayoutResize();
  const [selected, setSelected] = useState();
  const [sharedSelected, setSharedSelected] = useRecoilState(MarketFilterState);
  const [offset, setOffset] = useState();

  const icon = useCallback(({ isActive }) => {
    return (<Image
      src="/icons/common/dropdown/icon_dropdown_arrow.svg"
      loader={NileCDNLoader}
      layout="fill"
    />);
  }, []);

  return (
    <Container>
      <Category expandIconPosition="end">
        {data.map((section) => (
          <CategoryPanel key={section.key ?? ''} header={section.name}>
            <Type accordion expandIconPosition="end" expandIcon={icon}>
              {section.children.map((category) => (
                <Collapse.Panel key={`${section.key}-${category.key}`} header={category.name}>
                  <Checkbox.Group options={category?.children?.map((type) => ({
                    label: type.name,
                    value: type.key,
                  })) ?? []} />
                </Collapse.Panel>
              ))}
            </Type>
          </CategoryPanel>
        ))}
      </Category>
    </Container>
  );
};

const Container = styled.div([]);

const Category = styled(Collapse)([
  css`
    .ant-collapse-item {
      .ant-collapse-header {
        ${tw`flex`}
        height: 52px;
        align-items: center;
        padding: 0 8px;

        .ant-collapse-expand-icon {
          ${tw`hidden`}
        }

        .ant-collapse-header-text {
          ${tw`text-black`}
        }

        &::before,
        &::after {
          display: block;
          clear: both;
          content: "";
          position: absolute;
          right: 14px;
          width: 12px;
          border-bottom: 1px solid black;
          transition: transform 300ms;
        }

        &::before {
          transform: rotate(90deg);
          transform-origin: center;
        }
      }

      .ant-collapse-item-active {
        & > .ant-collapse-header {
          &::before {
            transform: rotate(0deg);
            transform-origin: center;
          }
        }
      }

      &:last-of-type {
        border-bottom: 0;
      }
    }
  `,
]);

const CategoryPanel = styled(Collapse.Panel)([]);

const Type = styled(Collapse)([
  css`
    .ant-collapse-item {
      ${tw`border-b-0`}
    }

    & > .ant-collapse-item {
      & > .ant-collapse-header {
        display: flex;
        height: 44px;
        align-items: center;
        padding: 0 36px 0 12px;
        transition: none;

        .ant-collapse-arrow {
          right: 12px;
          font-size: 16px;
        }

        & > .ant-collapse-header-text {
        @include fontFamilyUi(lnbr);

          .filter-2depth-menu-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;

            strong {
              ${tw`text-gray-20`}
            }
          }
        }
      }

      &.ant-collapse-item-active {
        & > .ant-collapse-header {
          ${tw`bg-black`}
          & > .ant-collapse-header-text {
            ${tw`font-bold`}
            ${tw`text-white`}
          }

          .ant-collapse-expand-icon {
            font-size: 16px;

            svg {
              path {
                fill: white !important;
              }
            }
          }
        }

        .ant-collapse-content {
          ${tw`border-black`}
          border: 1px solid;
          border-top: 0;
        }
      }
    }

    .ant-collapse-content {
      border-top: 0;

      .ant-collapse-content-box {
        padding: 0;

        .ant-checkbox-group {
          width: 100%;

          .ant-checkbox-group-item {
            margin-right: 0;
          }

          .ant-checkbox-wrapper {
            display: flex;
            width: 100%;
            height: 40px;
            align-items: center;
            padding: 0 12px;

            .ant-checkbox {
              top: 0;
            }

            .ant-checkbox + span {
              padding-right: 0;
              line-height: 1.4;
              ${tw`text-black`}
            }
          }
        }
      }
    }
  `,
]);
