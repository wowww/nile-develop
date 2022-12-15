import React, { ReactNode, useMemo } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import IconInfo from '@/assets/icons/common/icon_info.svg';
import IconPapyrus from '@/assets/icons/common/icon_papyrus.svg';
import IconReset from '@/assets/icons/common/icon_reset.svg';
import IconFilter from '@/assets/icons/common/icon_filter.svg';

import ClassNames from "classnames";

import {
  background,
  margin,
  padding,
  backgroundColor,
  size,
  color,
  border,
  typography,
  layout,
  PaddingProps,
  MarginProps,
  BackgroundColorProps,
  BackgroundProps,
  DisplayProps,
  SizeProps,
  ColorProps,
  BorderProps,
  TypographyProps,
  LayoutProps, display,
} from 'styled-system';

export type ButtonProps = {
  className?: string;
  iconType?: boolean; // true -> icon button
  iconValue?: "info" | "papyrus" | "reset" | "filter";
  reverse?: boolean;
  children?: ReactNode;
  onClick?: (error?: any) => void;
  type?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  & BackgroundProps
  & MarginProps
  & PaddingProps
  & BackgroundColorProps
  & DisplayProps
  & SizeProps
  & ColorProps
  & BorderProps
  & TypographyProps
  & LayoutProps;

export const Button = ({ className, iconType, iconValue, reverse, children, onClick, type, ...rest }: ButtonProps) => {
  const viewIcon = useMemo(() => {
    if(iconType) {
      switch (iconValue) {
        case 'info': // info icon
          return <IconInfo />;
        case 'papyrus': // Papyrus icon
          return <IconPapyrus />;
        case 'reset': // reset icon
          return <IconReset />;
        case 'filter': // filter icon
          return <IconFilter />;
        default:
          return false;
      }
    }
    return false;
  }, [iconValue, iconType]);

  return (
      <StyledButton
        { ...rest }
        type={type ?? 'button'}
        className={ClassNames(className, { reverse })}
        onClick={onClick}
      >
        {viewIcon}
        {children}
      </StyledButton>
  );
};

Button.defaultProps = {
  className: '',
  iconType: false, // true -> icon button
  iconValue: null, // info papyrus reset filter
  children: null,
  reverse: false,
  type: 'button',
  onClick: null,
};

const StyledButton = styled.button(({ className }) => [
  tw`flex`,
  tw`flex-row`,
  tw`justify-center`,
  tw`items-center`,
  tw`gap-[4px]`,
  className?.includes('reverse') && [
    tw`flex-row-reverse`,
  ],
  background,
  padding,
  margin,
  typography,
  size,
  color,
  border,
  backgroundColor,
  display,
  layout,
]);