import { UtilityButton } from '@components/common/utility/button';
import React, {HTMLAttributes, useState} from 'react';
import { useRecoilState, atom } from 'recoil';
import {Drawer, Popover} from 'antd';
import { HeaderNotifications } from '@/components/common/header/notifications/noti';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import IconNoticeActive from "@/assets/icons/common/ico_notice_active.svg";
import IconNotice from "@/assets/icons/common/ico_notice.svg";
import cn from "classnames";
import IconArrowRight from "@/assets/icons/common/arrow/ico_arrow_right.svg";
import IconClose from '@/assets/icons/common/ico_close.svg';
import {TextButton} from "@components/common/button/textbutton";
import {useLayoutResize} from "@utils/layout";
import { headerMyPage, headerNotification, headerLang, headerAccount } from '@components/common/header/utils';

export type HeaderNotificationButtonProps = {
  // nothing
} & HTMLAttributes<HTMLButtonElement>;

export const HeaderNotificationButton = (props: HeaderNotificationButtonProps) => {
  const [isNewNotice, setIsNewNotice] = useState(false);
  const [notificationVisible, setNotificationVisible] = useRecoilState(headerNotification);
  const [moNotificationOpen, setMoNotificationOpen] = useState(false);
  const [moMenuOpen, setMoMenuOpen] = useState(false);
  const [accountVisible, setAccountVisible] = useRecoilState(headerAccount);
  const { isLargeDesktop } = useLayoutResize();
  const [myPageVisible, setMyPageVisible] = useRecoilState(headerMyPage);

  const closeNotification = () => {
    setNotificationVisible(false);
  };

  const handleNotificationVisibleChange = (newVisible: boolean) => {
    setNotificationVisible(newVisible);
  };

  const openMobileMenu = () => {
    setMoMenuOpen(true);
    setAccountVisible(false);
  };

  const closeMobileMenu = () => {
    setMoMenuOpen(false);
    setMoNotificationOpen(false);
  };

  const closeAllHeaderModal = () => {
    setMyPageVisible(false);
    setNotificationVisible(false);
    
    setAccountVisible(false);
  };

  return (
    <NotificationContainer>
      {
        isLargeDesktop ?
        <Popover
          destroyTooltipOnHide
          overlayClassName="notification header-inner-popup"
          placement="bottom"
          content={<HeaderNotifications clickEvent={closeNotification} />}
          trigger="click"
          open={notificationVisible}
          onOpenChange={handleNotificationVisibleChange}
          getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
        >
          <UtilityButton>
            {isNewNotice ? <IconNoticeActive /> : <IconNotice />}
          </UtilityButton>
        </Popover>
        :
        <div className={cn('mobile-menu')}>
          <button type="button" className={cn('btn-menu-open')} onClick={openMobileMenu}>
            <IconNotice />
            <span className={cn('a11y')}>openAllMenu</span>
          </button>
          <Drawer
            title={
              <div className={cn('mobile-menu-utils')}>
                { moNotificationOpen ? (
                  <button type="button" className={cn('btn-back')} onClick={() => setMoNotificationOpen(false)}>
                    <span className={cn('a11y')}>returnToFullMenu</span>
                    <IconArrowRight />
                  </button>
                ) : (
                  <div className={cn('notice-wrap')}>
                      {isNewNotice ? (

                        <TextButton
                          buttonText=""
                          size="40"
                          iconValue="notice"
                          onClick={() => setMoNotificationOpen(true)}
                        />
                      ) : (
                        <TextButton
                          buttonText=""
                          size="40"
                          iconValue="notice-active"
                          onClick={() => setMoNotificationOpen(true)}
                        />
                      )}
                    </div>
                )}
              </div>
            }
            placement="right"
            closable={false}
            onClose={closeMobileMenu}

            closeIcon={<TextButton iconValue="close" onClick={closeMobileMenu} buttonText="Close" size="32" />}
            open={moMenuOpen}
            extra={<TextButton iconValue="close" onClick={closeMobileMenu} buttonText="Close" size="32" />}
            className="mobile-menu-wrap"
          >
            <div className={cn('notification', moNotificationOpen && 'active')}>
              <HeaderNotifications clickEvent={closeMobileMenu} />
            </div>
          </Drawer>
        </div>
      }


    </NotificationContainer>
  );
};
//
const NotificationContainer = styled.div([]);
