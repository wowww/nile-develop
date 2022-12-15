import styled from '@emotion/styled';
import { useWalletConnect } from '@utils/walletconnect';
import Image from 'next/image';
import tw from 'twin.macro';
import { NileCDNLoader } from '@utils/image/loader';
import { LoginModal } from '@components/common/auth/login/modal';
import { useCallback } from 'react';
import { message } from 'antd';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

export type LoginProps = {
  // TODO
};

export const LoginButton = ({ ...props }: LoginProps) => {
  const { t } = useTranslation(['common']);
  const { login } = useWalletConnect();

  const onClick = useCallback(() => {
    message.info({ content: t('unfoldingSoonWallet', { ns: 'common' }), key: 'toast' }).then(() => {
      // nothing
    });
  }, [t]);

  return (
    <Container>
      <Wrapper>
        <Button className={cn('disabled')} type="button" onClick={onClick}>
          <Image src="/icons/common/ico_wallet_white.svg" loader={NileCDNLoader} width={16} height={16} />
          Connect
        </Button>
      </Wrapper>
      <LoginModal onRefresh={login} />
    </Container>
  );
};

LoginButton.defaultProps = {
  expireTime: undefined,
};

const Container = styled.div``;
const Wrapper = styled.div``;

const Button = styled.button(({ className }) => [
  tw`flex`,
  tw`py-2 px-4`,
  tw`bg-black hover:bg-gray-10`,
  tw`items-center`,
  tw`gap-1`,
  tw`rounded-full`,
  tw`text-white`,
  tw`text-xs`,
  tw`font-bold`,
  className?.includes('disabled') && [
    tw`bg-gray-60 hover:bg-gray-60`,
    tw`text-gray-80`,
  ],
]);
