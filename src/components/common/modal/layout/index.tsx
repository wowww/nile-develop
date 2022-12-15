import React, { ReactElement, ReactNode } from 'react';
import {Modal} from 'antd';

import IconClose from '@/assets/icons/common/ico_close.svg';
import styled from "@emotion/styled";
import tw from "twin.macro";

import { css } from "@emotion/core";
import classNames from "classnames";
import {bool} from "prop-types";

interface ModalProps {
  className?: string;
  title?: ReactNode | string;
  size: string;
  isOpen: boolean;
  setIsOpen: (t: boolean) => void;
  children: ReactNode;
  footer?: boolean;
  footerContent?: ReactElement[];
}

export const ModalLayout = ({ className, isOpen, size, setIsOpen, title, children, footer, footerContent }: ModalProps) => {

  const handleCancel = () => {
    setIsOpen(false);
  }

  const handleOk = () => {
    setIsOpen(false);
  }

  return (
    <StyledModal
      className={classNames(`${size}`, className &&`${className}`)}
      title={title}
      closeIcon={<StyledCloseIcon />}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={footer && footerContent}
    >
      {children}
    </StyledModal>
  );
};

ModalLayout.defaultProps = {
  className: null,
  title: null,
  footer: false,
  footerContent: null,
}

const StyledModal = styled(Modal)(({ className }) => [
  tw`font-header`,
  css`
    ${tw`max-w-[100%]`}
    ${tw`h-full`}
    ${tw`!w-full`}
    ${tw`md:h-auto`}
    .ant-modal {
      &-header {
        ${tw`flex`}
        ${tw`items-center`}
      }
      &-title {
        ${tw`text-base`}
        ${tw`font-bold`}
        ${tw`text-black`}
      }
      &-close {
        ${tw`w-6`}
        ${tw`right-3`}
        ${tw`h-[56px]`}
      
        &-x {
          ${tw`w-full`}
          ${tw`h-full`}
        }
      }
      &-body {
        ${tw`py-3`}
        ${tw`px-4`}
        ${tw`text-sm`}
        word-wrap: break-word;
        ${tw`bg-white`}
      }
      &-footer {
        ${tw`flex`} 
        ${tw`justify-end`} 
      }
      
      &-content {
        ${tw`h-full`}
        ${tw`md:h-auto`}
      }
    }
  `,
  className?.includes('scroll') && [
    css`
      ${tw`md:!w-[320px]`}
      .ant-modal {
        &-body {
          ${tw`max-h-[100%]`}
          ${tw`md:max-h-[464px]`}
          ${tw`overflow-y-auto`}
        }
        &-footer {
          border-top: 1px solid #f0f0f0 !important;
          position: relative;
          
          &::before {
            display: block;
            clear: both;
            content: "";
            position: absolute;
            top: -4px;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(180deg,rgba(26,26,26,0),rgba(26,26,26,.3) 100%,rgba(26,26,26,.1) 0);
            opacity: .3;
          }
        }
      }
    `,
  ],
  className?.includes('sm') && [
    css`
      ${tw`md:!w-[320px]`}
      .ant-modal {
        &-header {
          ${tw`h-12`}
          ${tw`border-0`}
          ${tw`py-3`}
          ${tw`px-4`}
        }
        &-close {
          ${tw`h-12`}
        }
        &-footer {
          ${tw`py-3`}
          ${tw`px-4`}
          ${tw`border-0`}
        }
      }
    `,
  ],
  className?.includes('md') && [
    css`
      ${tw`md:!w-[540px]`}
      .ant-modal {
        &-header {
          ${tw`p-4`}
        }
        &-footer {
          ${tw`border-0`}
          ${tw`py-4`}
          ${tw`px-6`}
        }
      } 
    `,
  ],
  className?.includes('lg') && [
    css`
      ${tw`md:!w-[800px]`}
      .ant-modal {
        &-header {
          ${tw`border-0`}
        }
        &-footer {
          ${tw`pt-4`}
          ${tw`pb-5`}
          ${tw`px-6`}
        }
      } 
    `,
  ],
]);

const StyledCloseIcon = styled(IconClose)([
  tw`w-full`,
  tw`h-full`,
]);