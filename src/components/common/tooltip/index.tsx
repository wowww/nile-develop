import styled from "@emotion/styled";
import tw from "twin.macro";
import { css } from '@emotion/core';

export type TooltipProps = {
  tooltipText: string;
  direction?: 'top' | 'bottom' | undefined;
}

export const Tooltip = ({ tooltipText,  direction }: TooltipProps) => {
  return (
    <TooltipContent
      className={`tooltip-${direction}`}
    >
      {tooltipText}
    </TooltipContent>
  );
};

Tooltip.defaultProps = {
  direction: 'top',
}

const TooltipContent = styled.span([
  tw`block`,
  tw`absolute`,
  tw`left-[50%]`,
  tw`min-w-[110px]`,
  tw`w-[65%]`,
  tw`text-xs`,
  tw`text-white`,
  tw`py-[7px] px-[8px]`,
  tw`bg-[#404040]`,
  tw`rounded-sm`,

  css`
    transform: translateX(-50%);
    
    &:after {
      ${tw`block`}
      ${tw`absolute`}
      ${tw`left-[50%]`}
      ${tw`bottom-[-4px]`}
      ${tw`w-2`}
      ${tw`h-2`}
      ${tw`bg-[#404040]`}
      content: '';
      transform: translateX(-50%) rotate(45deg);
    }
    
    &.tooltip-top { 
      ${tw`top-[-40px]`}
      
    }
    &.tooltip-bottom {
      ${tw`top-[48px]`}
      &:after {
        ${tw`bottom-[26px]`}
      }
    }
  `,
])