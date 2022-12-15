import styled from '@emotion/styled';
import tw from 'twin.macro';
import React, { ReactNode } from 'react';

export type UtilityButtonProps = {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const UtilityButton = ({ children, type, ...props }: UtilityButtonProps) => {
  return (
    <Button {...props} type={type ?? 'button'}>
      {children}
    </Button>
  );
};

UtilityButton.defaultProps = {
  type: 'button',
};

const Button = styled.button(({ className }) => [
  tw`flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`p-0`,
  tw`w-10 h-10`,
  tw`rounded-full`,
  tw`hover:bg-gray-80`,
  tw`border-gray-0`,
  tw`border-0`,
  tw`duration-200`,

  className?.includes('active') && [
    tw`border`,
  ],
]);
