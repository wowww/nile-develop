import { ReactNode } from 'react';

export type A11yProps = {
  children: ReactNode;
}

export const A11y = ({ children }: A11yProps) => {
  return (
    <span className="a11y">{children}</span>
  );
};
