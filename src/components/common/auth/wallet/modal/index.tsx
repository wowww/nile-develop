import React, { useMemo, useState } from 'react';
import {
  Avatar,
  Button,
  Dropdown,
  message,
  Popover as AntdPopover,
  Tabs,
} from 'antd';
import { ModalLayout } from '@components/common/modal/layout';
import { Tag } from '@components/common/tag';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useLayoutResize } from '@utils/layout';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CryptoWallet, WalletModalState } from '@recoil/atoms';
import { useWalletUtil } from '@utils/wallet';
import { useWalletConnect } from '@utils/walletconnect';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';
import { IconLogo } from '@components/common/logo/icon';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css, Global } from '@emotion/core';

interface coinListItem {
  coinName: string;
  amount: string | null;
  convertToWemix$?: string;
  imageUrl?: string;
}

interface transactionListItem {
  type: string;
  date: string;
  content: string;
  status: string;
  statusText: string;
  statusDetail?: string;
  url: string;
}

const coinList: coinListItem[] = [
  {
    coinName: 'WEMIX',
    amount: '235.323',
    convertToWemix$: '240.5123',
  },
  {
    coinName: 'WEMIX$',
    amount: '235.323',
  },
  {
    coinName: 'USDC',
    amount: '235.323',
  },
  {
    coinName: 'KLAY',
    amount: '98.765',
  },
  {
    coinName: 'Wonder',
    amount: '43.876',
  },
  {
    coinName: 'g.Wonder',
    amount: '21.987',
  },
];

const transactionList: transactionListItem[] = [
  {
    type: 'NFT',
    date: '2022-06-24 15:44:00',
    content:
      '{NFT명}에 대한 응찰금 63.90 WEMIX$와 가스비 10 WEMIX가 결제되었습니다.',
    status: 'success',
    statusText: 'Bid 완료',
    url: '/',
  },
  {
    type: 'NFT',
    date: '2022-06-24 15:44:00',
    content:
      '{NFT명}에 대한 응찰금 63.90 WEMIX$와 가스비 10 WEMIX 결제에 실패하였습니다.',
    status: 'fail',
    statusText: 'Bid 실패',
    statusDetail: 'Network Error',
    url: '/',
  },
  // {
  //   type: 'NFT',
  //   date: '2022-06-24 15:44:00',
  //   content: '{NFT명}에 대한 응찰금 63.90 WEMIX$와 가스비 10 WEMIX가 결제되었습니다.',
  //   status: 'success',
  //   statusText: 'Bid 완료',
  //   url: '/',
  // },
  // {
  //   type: 'NFT',
  //   date: '2022-06-24 15:44:00',
  //   content: '{NFT명}에 대한 응찰금 63.90 WEMIX$와 가스비 10 WEMIX 결제에 실패하였습니다.',
  //   status: 'fail',
  //   statusText: 'Bid 실패',
  //   statusDetail: 'Network Error',
  //   url: '/',
  // },
];

export const WalletModal = () => {
  const wallet = useRecoilValue(CryptoWallet);
  const { shorten, logout } = useWalletUtil();
  const { disconnect } = useWalletConnect();
  const [modalState, setModalState] = useRecoilState(WalletModalState);
  const { isTablet } = useLayoutResize();
  const [isModalServiceAgree, setModalServiceAgree] = useState(false);
  const [isModalDisconnect, setModalDisconnect] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setWalletModal = useSetRecoilState(WalletModalState);
  // tab 콘텐츠
  const CoinComponent = useMemo(() => {
    return (
      <TabList>
        <TotalPrice>
          <Title>총 보유액</Title>
          <Price>$4,353.0000</Price>
        </TotalPrice>
        <Coin>
          <CoinListWrapper>
            {coinList.map((coin: coinListItem): JSX.Element => {
              return (
                <CoinList key={coin.coinName}>
                  <span className="coin-name">
                    <IconLogo
                      type={
                        coin.coinName.toLowerCase() === 'wemix$' ||
                        coin.coinName.toLowerCase() === 'wemix'
                          ? `${coin.coinName.toLowerCase()}_dark`
                          : coin.coinName.toLowerCase()
                      }
                      size={16}
                    />
                    <span>{coin.coinName}</span>
                  </span>
                  {coin.amount && (
                    <div className="amount-wrap">
                      <span className="amount">{coin.amount}</span>
                      {!!coin.convertToWemix$ && (
                        <span className="converted">
                          (${coin.convertToWemix$})
                        </span>
                      )}
                    </div>
                  )}
                </CoinList>
              );
            })}
          </CoinListWrapper>
        </Coin>
      </TabList>
    );
  }, []);

  const TransactionComponent = useMemo(() => {
    return (
      <TabList>
        <TransactionListWrapper>
          {transactionList.map((item: transactionListItem) => {
            return (
              <TransactionList key={item.type}>
                <TransactionTitleWrapper className="title-wrap">
                  <TransactionTitle>
                    {item.type}
                    <a
                      href={item.url}
                      target="_blank"
                      title="새창열림"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG src="https://file.mir4global.com/nile/resources/icons/common/ico_link.svg" />
                      <span className="a11y">더보기</span>
                    </a>
                  </TransactionTitle>
                  <TransactionData>{item.date}</TransactionData>
                </TransactionTitleWrapper>
                <TransactionDescription>{item.content}</TransactionDescription>
                <StatusWrapper className={classNames('status', item.status)}>
                  <strong>{item.statusText}</strong>
                  {!!item.statusDetail && (
                    <span className="status-detail">{item.statusDetail}</span>
                  )}
                </StatusWrapper>
              </TransactionList>
            );
          })}
        </TransactionListWrapper>
      </TabList>
    );
  }, []);

  const AccountTabs = useMemo(
    () => [
      {
        label: '보유 코인',
        key: 'coin',
        children: CoinComponent,
      },
      {
        label: '거래',
        key: 'transaction',
        children: TransactionComponent,
      },
    ],
    [CoinComponent, TransactionComponent],
  );

  // account 콘텐츠
  const AccountContents = useMemo(
    () => (
      <AccountWrapper>
        <AccountHeader>
          <ButtonWrapper>
            <DisconnectButton
              type="button"
              onClick={() => setModalDisconnect(true)}
            >
              <Tag color="#a6a6a6" border="1px solid #a6a6a6">
                Disconnect
              </Tag>
            </DisconnectButton>
          </ButtonWrapper>
          <UserInfoWrapper>
            <Avatar size={40} />
            <AccountWallet>
              <Dropdown
                overlayClassName="account-wallet-list"
                overlay={
                  <ListWrapper>
                    <List>
                      <ListButton
                        type="button"
                        onClick={() => {
                          setModalServiceAgree(true);
                        }}
                      >
                        WEMIX Wallet{' '}
                        <ReactSVG src="https://file.mir4global.com/nile/resources/icons/common/ico_link.svg" />
                      </ListButton>
                    </List>
                    <List>
                      <ListButton
                        type="button"
                        onClick={() => {
                          setModalServiceAgree(true);
                        }}
                      >
                        MetaMask{' '}
                        <ReactSVG src="https://file.mir4global.com/nile/resources/icons/common/ico_link.svg" />
                      </ListButton>
                    </List>
                  </ListWrapper>
                }
                trigger={['click']}
                placement="bottom"
                getPopupContainer={(triggerNode) =>
                  triggerNode.parentNode as HTMLElement
                }
              >
                <OpenWalletButton type="button">
                  MetaMask <IconArrow />
                </OpenWalletButton>
              </Dropdown>
              <UserIdWrapper>
                <UserId>{shorten(wallet.address)}</UserId>
                <CopyToClipboard text={wallet.address ?? ''}>
                  <CopyIdButton
                    type="button"
                    onClick={() => message.info('지갑 주소가 복사되었습니다.')}
                  >
                    <ReactSVG
                      className="copy-icon"
                      src="https://file.mir4global.com/nile/resources/icons/common/ico_copy.svg"
                    />
                    <span className="a11y">지갑 주소 복사</span>
                  </CopyIdButton>
                </CopyToClipboard>
              </UserIdWrapper>
            </AccountWallet>
          </UserInfoWrapper>
        </AccountHeader>
        <AccountBody>
          <Tabs defaultActiveKey="coin" className="tab" items={AccountTabs} />
        </AccountBody>
      </AccountWrapper>
    ),
    [AccountTabs, shorten, wallet],
  );

  // 팝업 닫기 이벤트
  const onCancel = () => {
    setIsOpen(false);
    setModalState({ open: false });
  };

  return (
    <Container className="account-container">
      <Global
        styles={css`
          .popover-wrapper {
            ${tw`min-w-[280px]`}
            top: 38px !important;
            left: inherit !important;
            right: -40px;

            @media (min-width: 1280px) {
              top: 40px !important;
              left: -126px !important;
              right: inherit;
            }

            .ant-modal-root {
              ${tw`z-[1100]`}
              ${tw`fixed`}
            }
            .account-container {
              ${tw`relative`}
            }
            .ant-popover {
              &-arrow {
                left: 64% !important;
                &-content::before {
                  ${tw`bg-black`}
                }
              }

              &-inner {
                ${tw`rounded`}
                ${tw`bg-black`}
              box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);

                &-content {
                  ${tw`text-white`}
                }
              }
            }

            .ant-tabs-tab-btn:focus,
            .ant-tabs-tab-remove:focus,
            .ant-tabs-tab-btn:active,
            .ant-tabs-tab-remove:active {
              ${tw`text-white`}
            }

            .ant-btn:hover,
            .ant-btn:focus {
              ${tw`text-black`}
              ${tw`border-black`}
            }
          }
        `}
      />
      <WalletButton onClick={() => setWalletModal({ open: true })}>
        {wallet.address ? shorten(wallet.address) : '계정 없음'}
      </WalletButton>
      {isTablet ? (
        <Popover
          overlayClassName="popover-wrapper"
          className="popover-box"
          destroyTooltipOnHide
          placement="bottom"
          content={AccountContents}
          trigger="click"
          open={modalState.open}
          onOpenChange={onCancel}
          getPopupContainer={(triggerNode) =>
            triggerNode.parentNode as HTMLElement
          }
        />
      ) : (
        <ModalLayoutWrapper
          className={`account-wrap ${modalState.open && 'active'}`}
          size="lg"
          title=""
          isOpen={modalState.open}
          setIsOpen={setIsOpen}
        >
          {AccountContents}
        </ModalLayoutWrapper>
      )}

      {/* 월렛 변경 확인 팝업 */}

      <ModalLayoutContainer
        size="sm"
        isOpen={isModalServiceAgree}
        setIsOpen={setIsOpen}
        title="Wallet 변경 확인"
        footer
        footerContent={[
          <Button
            key="ok"
            className="btn btn-bg bg-black btn-lg hover:bg-gray-10"
            onClick={() => {
              setModalServiceAgree(false);
              onCancel();
            }}
          >
            OK
          </Button>,
        ]}
      >
        <p>
          현재 연결 중인 Wallet을 해지하고, <br />
          선택한 Wallet으로 변경하시겠습니까?
        </p>
      </ModalLayoutContainer>

      {/* 월렛 연결 해제 팝업 */}

      <ModalLayoutContainer
        title="지갑 연결 해제"
        size="sm"
        isOpen={isModalDisconnect}
        setIsOpen={setIsOpen}
        footer
        footerContent={[
          <Button
            key="cancel"
            className="wallet-modal-button cancel-button"
            onClick={() => {
              setModalDisconnect(false);
              onCancel();
            }}
          >
            취소
          </Button>,
          <Button
            key="ok"
            className="wallet-modal-button clear-button"
            onClick={() => {
              logout();
              setModalDisconnect(false);
              onCancel();
            }}
          >
            해제
          </Button>,
        ]}
      >
        <p>월렛의 연결을 해제하시겠습니까?</p>
      </ModalLayoutContainer>
    </Container>
  );
};

const WalletButton = styled(Button)([
  tw`w-[100px] md:w-[104px]`,
  tw`h-[28px] md:h-[32px]`,
  tw`rounded-[20px]`,
  tw`bg-transparent`,
  tw`border-[2px]`,
  tw`border-black`,
  tw`text-black`,
  tw`font-bold`,
  tw`text-xs`,
  css`
    &:hover,
    &:active {
      ${tw`text-black`}
      ${tw`bg-transparent`}
    }

    span {
      display: flex !important;
      ${tw`justify-center`}
      ${tw`items-center`}
      ${tw`block`}
    }
  `,
]);

const Container = styled.div([tw`relative`, tw`w-auto`]);

const ListWrapper = styled.ul([tw`py-2`, tw`bg-white`, tw`rounded`]);

const List = styled.li([
  css`
    &:first-child {
      margin-bottom: 4px;
    }
  `,
]);

const ListButton = styled.button([
  tw`flex`,
  tw`items-center`,
  tw`justify-between`,
  tw`py-2.5 px-3`,
  tw`w-full`,
  tw`text-sm`,
]);

const Popover = styled(AntdPopover)([]);

const AccountWrapper = styled.div([tw`md:px-5 md:pt-5`]);

const AccountHeader = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-y-3`,
  tw`pt-5 px-3.5 md:p-0`,
]);

const ButtonWrapper = styled.div([tw`mr-7 md:mr-0`, tw`text-right`]);

const DisconnectButton = styled.button([
  css`
    span {
      ${tw`font-bold`}
    }
  `,
]);

const UserInfoWrapper = styled.div([
  tw`flex`,
  tw`justify-start`,
  tw`items-center`,
  tw`gap-x-3`,
  tw`pb-2`,
]);

const AccountWallet = styled.div([
  tw`relative`,
  tw`text-white`,
  css`
    .account-wallet-list {
      top: 24px !important;
      left: 0 !important;
      min-width: 158px !important;
    }
  `,
]);

const OpenWalletButton = styled.button([
  tw`flex`,
  tw`items-center`,
  tw`gap-x-1.5`,
  tw`text-base`,
  tw`font-bold`,
  css`
    svg {
      ${tw`w-4`}
      ${tw`h-4`}
      
      path {
        fill: #fff;
      }
    }
  `,
]);

const UserIdWrapper = styled.div([
  tw`flex`,
  tw`items-center`,
  css`
    svg {
      ${tw`w-4`}
      ${tw`h-4`}
    }
    path {
      stroke: #a6a6a6;
      transition: stroke 0.3s;
    }
    &:hover {
      em {
        ${tw`text-white`}
      }
      path {
        stroke: #fff;
      }
    }
  `,
]);

const UserId = styled.em([
  tw`text-xs`,
  tw`text-gray-60`,
  tw`font-normal`,
  tw`not-italic`,
  css`
    transition: color 0.3s;
  `,
]);

const CopyIdButton = styled.button([tw`flex`, tw`w-4`, tw`h-4`]);

const AccountBody = styled.div([
  tw`pb-10`,
  css`
    .ant-tabs {
      $-tab {
        $-btn {
          ${tw`text-white`}
          ${tw`bg-[transparent]`}
        }
      }

      &-content-holder {
        ${tw`px-3.5 md:px-0`}
      }

      &-nav {
        ${tw`relative`}
        ${tw`px-3.5 md:p-0`}
         
        &:after {
          ${tw`block`}
          ${tw`absolute`}
          ${tw`left-0`}
          ${tw`bottom-0`}
          content: '';
          ${tw`w-full`}
          ${tw`h-px`}
          ${tw`border-b`}
          ${tw`border-b-gray-10`}
          z-index: 0;
        }
      }

      &-nav-list {
        ${tw`w-full`}
      }

      &-ink-bar {
        ${tw`bg-white`}
      }

      &-tab {
        ${tw`justify-center`}
        ${tw`ml-0`}
        ${tw`w-1/2`}
        ${tw`text-white`}
        
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          ${tw`text-white`}
        }
      }
    }
  `,
]);

const TabList = styled.div([tw`text-white`]);

const TotalPrice = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-y-2`,
  tw`font-bold`,
  tw`leading-none`,
]);

const Title = styled.p([tw`text-sm`, tw`text-gray-80`]);

const Price = styled.strong([tw`text-lg`, tw`font-bold`]);

const Coin = styled.div([tw`mt-2.5`]);
const CoinListWrapper = styled.div([]);

const CoinList = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`justify-between`,
  tw`min-h-[48px]`,
  tw`border-b`,
  tw`border-gray-10`,

  css`
    .coin-name {
      ${tw`flex`}
      ${tw`items-center`}
      ${tw`gap-1`}
      
      span {
        ${tw`text-sm`}
      }
    }

    .amount-wrap {
      ${tw`flex flex-col gap-y-1`}

      span {
        ${tw`text-right`}
        ${tw`leading-none`}
        
        &.converted {
          ${tw`text-xs`}
          ${tw`text-gray-60`}
        }
      }
    }
  `,
]);

const TransactionListWrapper = styled.ul([tw`flex flex-col`, tw`gap-2`]);

const TransactionList = styled.li([
  tw`p-4`,
  tw`bg-gray-10`,
  tw`flex flex-col gap-y-2`,
]);

const TransactionTitleWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
]);

const TransactionTitle = styled.em([
  tw`flex`,
  tw`gap-x-0.5`,
  tw`items-center`,
  tw`font-bold`,
  tw`not-italic`,

  css`
    svg {
      ${tw`w-4`}
      ${tw`h-4`}
      
      path {
        fill: #fff;
      }
    }
  `,
]);

const TransactionData = styled.p([
  tw`text-xs`,
  tw`leading-none`,
  tw`text-gray-30`,
]);

const TransactionDescription = styled.p([
  tw`leading-normal`,
  tw`text-xs`,
  tw`text-gray-60`,
  tw`break-all`,
]);

const StatusWrapper = styled.div([
  tw`flex justify-between items-center`,
  css`
    strong {
      ${tw`relative`}
      ${tw`pl-2`}
      ${tw`text-[#27c683]`}
      ${tw`text-xs`}
      ${tw`leading-none`}   
      
      &:before {
        ${tw`absolute`}
        ${tw`top-[50%]`}
        ${tw`left-0`}
        ${tw`w-1`}
        ${tw`h-1`}
        ${tw`bg-[#27c683]`}    
        ${tw`rounded-full`}
        
        content: "";
        transform: translateY(-50%);
      }
    }

    &.fail {
      ${tw`text-[#fa5454]`}
      strong {
        ${tw`text-[#fa5454]`}

        &:before {
          ${tw`bg-[#fa5454]`}
        }
      }
    }

    .status-detail {
      ${tw`text-xs`}
      ${tw`leading-none`}
    }
  `,
]);

// @ts-ignore
const ModalLayoutWrapper = styled(ModalLayout)([
  css`
    ${tw`relative`}
    ${tw`min-w-full`}
    ${tw`h-[100vh]`}
    
    .ant-modal {
      &-body {
        ${tw`p-0`}

        ${tw`bg-black`}
        ${tw`rounded-t`}
      }

      &-wrap {
        ${tw`items-end`}
      }

      &-close {
        ${tw`mt-[18px]`}
        ${tw`h-auto`}
        path {
          fill: white;
        }
      }

      .ant-tabs-ink-bar {
        ${tw`relative`}
        &:before {
          ${tw`absolute`}
          ${tw`block`}
          ${tw`w-full`}
          ${tw`h-px`}
          ${tw`bg-gray-10`}
          content: '';
        }
      }
    }
    .ant-modal-content {
      ${tw`absolute`}
      ${tw`w-full`}
      ${tw`bottom-0`}
      ${tw`bg-black`}
    }
    .ant-tabs-nav-operations-hidden,
    .ant-tabs-nav-operations {
      display: none !important;
    }
  `,
]);

// @ts-ignore
const ModalLayoutContainer = styled(ModalLayout)([
  tw`max-w-[240px] lg:max-w-[320px]`,

  css`
    .ant-modal {
      &-body {
        p {
          ${tw`lg:text-[16px]`}
        }
      }
      &-content {
        ${tw`rounded-lg lg:rounded-none`}
      }
      &-header {
        ${tw`h-[56px]`}
        ${tw`bg-transparent`}
      }

      &-close {
        ${tw`mt-2.5 lg:mt-0`}
        ${tw`lg:w-[32px]`}
        ${tw`h-6 lg:h-[54px]`}
        
        svg {
          ${tw`lg:w-[32px]`}
          ${tw`lg:h-[54px]`}
        }
      }

      &-title {
        ${tw`md:text-[18px]`}
      }

      &-footer {
        ${tw`rounded-lg`}

        button {
          ${tw`w-full`}
          ${tw`lg:h-10`}
          ${tw`lg:text-[16px]`}
          ${tw`rounded`}
          ${tw`border`}
          ${tw`border-black`}
          
          &:hover {
            ${tw`bg-gray-90`}
          }

          &.clear-button {
            ${tw`text-white`}
            ${tw`bg-black`}
          }
        }
      }
    }
  `,
]);
