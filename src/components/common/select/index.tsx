import React from 'react';
import { Select } from 'antd';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import styled from '@emotion/styled';

import { css } from '@emotion/core';
import tw from 'twin.macro';
import classNames from "classnames";

const { Option } = Select;

interface CustomSelectProps {
  size: 'small' | 'middle' | 'large';
  defaultValue?: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    text: string;
  }[];
  placeholder?: string;
}

export const CustomSelect = ({
  size,
  defaultValue,
  onChange,
  options,
  placeholder,
}: CustomSelectProps) => {
  return (
    <SelectWrapper className={classNames(`${size}` )}>
      <Select
        size={size}
        defaultValue={defaultValue}
        suffixIcon={<IconArrow />}
        onChange={(value) => {
          onChange(value);
        }}
        getPopupContainer={(triggerNode) =>
          triggerNode.parentNode as HTMLElement
        }
        placeholder={placeholder}
      >
        {options.map((item) => (
          <Option value={item.value} key={item.value}>
            {item.text}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

CustomSelect.defaultProps = {
  defaultValue: undefined,
  placeholder: undefined,
};

const SelectWrapper = styled.div(({ className }) => [
  css`
    .ant-select {
      ${tw`relative`}
      ${tw`min-w-[140px]`}
      &-item {
        &-option-selected:not(.ant-select-item-option-disabled) {
          &::after {
            background: url('https://file.mir4global.com/nile/resources/icons/common/arrow/ico_arrow_check.svg') no-repeat 50% / contain !important;
          }
        }
      }
      &-dropdown {
        ${tw`py-1`}
      }
    }
  `,
  className?.includes('small') && [
    css`
      .ant-select {
        &-selection-item, &-selection-placeholder {
          ${tw`!text-xs`}
        }
        &-dropdown {
          ${tw`!top-[27px]`}
        }
        
        &-item {
          ${tw`h-7`}
          ${tw`text-xs`}
          ${tw`leading-[16px]`}
        }
      }
    `,
  ],
  className?.includes('middle') && [
    css`
      .ant-select {
        &-dropdown {
          ${tw`!top-[35px]`}
        }
        
        &-item {
          ${tw`h-9`}
          ${tw`px-2`}
          ${tw`text-sm`}
          ${tw`leading-[20px]`}
        }
        
        &-selector {
          ${tw`!h-9`}
          ${tw`md:!h-10`}
          ${tw`xl:!h-[38px]`}
        }
      }
    `,
  ],
  className?.includes('large') && [
    css`
      .ant-select {
        &-dropdown {
          ${tw`!top-[43px]`}
        }
        
        &-item {
          ${tw`h-9`}
          ${tw`px-2`}
          ${tw`text-sm`}
          ${tw`leading-[20px]`}
        }
      }
    `,
  ],
]);

