import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ModalLayout } from '@components/common/modal/layout';
import { useRecoilState } from 'recoil';
import { CommonModalState } from '@recoil/atoms';
import tw from 'twin.macro';

export const CommonModal = () => {
  const [modal, setModal] = useRecoilState(CommonModalState);

  return (
    <ModalLayout
      size={modal.size ?? 'md'}
      title={modal.title}
      isOpen={modal.open}
      setIsOpen={(open) => setModal((prev) => ({ ...(prev ?? {}), open }))}
      footer
      footerContent={[<Button onClick={() => setModal((prev) => ({ ...(prev ?? {}), open: false }))}>OK</Button>]}
    >
      {modal.message}
    </ModalLayout>
  );
};

CommonModal.defaultProps = {
  children: undefined,
};

const Button = styled.button([
  tw`bg-black`,
  tw`text-white`,
  tw`w-full`,
  tw`py-2`,
  tw`rounded-sm`,
]);

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;

  @keyframes popInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(40px) scale(0.75);
    }
    75% {
      opacity: 1;
      transform: translateY(-8px) scale(1);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes popOutToBottom {
    0% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(40px) scale(0.75);
    }
  }
`;

const Wrapper = styled.div<{ open: boolean }>`
  position: relative;
  z-index: 10;
  max-width: 240px;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  ${({ open }) =>
    open
      ? css`
        animation: popInFromBottom 0.2s forwards ease-in-out;
      `
      : css`
        animation: popOutToBottom 0.2s forwards ease-in-out;
      `}
`;
