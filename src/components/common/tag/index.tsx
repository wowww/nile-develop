import React from 'react';

import styled from "@emotion/styled";
import tw from "twin.macro";
import {
  background,
  backgroundColor,
  border,
  color,
  layout,
  margin,
  padding,
  size,
  typography,
  PaddingProps,
  MarginProps,
  BackgroundColorProps,
  BackgroundProps,
  SizeProps,
  ColorProps,
  BorderProps,
  TypographyProps,
  LayoutProps,
} from "styled-system";

export type TagProps = {
  children: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  & BackgroundProps
  & MarginProps
  & PaddingProps
  & BackgroundColorProps
  & SizeProps
  & ColorProps
  & BorderProps
  & TypographyProps
  & LayoutProps;

export const Tag = ({ children, ...rest }: TagProps) => {

  return (
    <StyledTag
      { ...rest }
    >
      {children}
    </StyledTag>
  );
}

const StyledTag = styled.span([
  tw`inline-flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`px-3`,
  tw`rounded-[24px]`,
  tw`w-fit`,
  tw`text-xs md:text-sm`,
  tw`!leading-none`,
  tw`h-[24px] md:h-[26px]`,
  background,
  padding,
  margin,
  typography,
  size,
  color,
  border,
  backgroundColor,
  layout,
]);