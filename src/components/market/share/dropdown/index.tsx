import { Dropdown } from 'antd';
import { ComponentProps } from 'react';
import useShareButton from '@utils/share';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export type MarketShareDropdownProps = {
  path: string;
} & Omit<ComponentProps<typeof Dropdown>, 'overlay'>;

export const MarketShareDropdown = ({ path, ...props }: MarketShareDropdownProps) => {
  const { twitter, facebook, telegram, clipboard } = useShareButton({ title: 'Nile', url: `https://www.nile.io${path}` });

  return (
    <Dropdown
      {...props}
      overlay={
        <List>
          <Item>{twitter}</Item>
          <Item>{facebook}</Item>
          <Item>{telegram}</Item>
          <Item>{clipboard}</Item>
        </List>
      }
      trigger={['click']}
    />
  );
};

const List = styled.ul([
  tw`min-w-[156px]`,
  tw`px-2`,
  tw`rounded border`,
  tw`bg-white`,
]);

const Item = styled.li([
  tw`p-3`,
]);
