import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AccountModalState, NileAccount } from '@recoil/atoms';
import tw from 'twin.macro';
import { Avatar } from 'antd';
import { css } from '@emotion/core';
import { A11y } from '@components/common/a11y';

export const AccountButton = (props: any) => {
  const { account } = useRecoilValue(NileAccount);
  const setModal = useSetRecoilState(AccountModalState);

  return (
    <Button onClick={() => setModal({ open: true })}>
      <Avatar src={account?.img ?? 'https://picsum.photos/32/32/?image=1'}>
        <A11y>프로필 열기</A11y>
      </Avatar>
    </Button>
  );
};

const Button = styled.button([
  tw`inline-flex`,
  tw`items-center`,
  tw`hover:bg-gray-80`,
  tw`rounded-full`,
  tw`p-1`,
  tw`shadow-inner`,
  css`
    &:focus {
      box-shadow: inset 0 0 0 1px black;
    }

    .ant-avatar {
      border: 1px solid white;
    }
  `,
]);
