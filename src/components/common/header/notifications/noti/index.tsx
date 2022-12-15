import React, {useState, useEffect, useMemo} from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import { RadioTabButton } from '@/components/common/button/radio';
import { InfiniteLoader } from '@/components/common/loader';
import { ModalLayout } from '@/components/common/modal/layout';
import { Button } from '@/components/common/button';
import OutlineButton from '@/components/common/button/outline';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import {useLayoutResize} from "@utils/layout";

import IconNotificationSetting from '@/assets/icons/common/ico_notification_setting.svg';
import IconClose from '@/assets/icons/common/ico_close.svg';
import IconArrowRight from "@/assets/icons/common/arrow/ico_arrow_right.svg";

export interface NotificationDataProps {
  type: string;
  menuName: string;
  imgUrl: string;
  desc: string;
  noticeTime: string;
  link: string;
  newNotice: boolean;
  majorNotice: boolean;
  detailContents?: { title: string; desc: string };
  doaGenerationContents?: { ratio: string; achieve: string; achieveUnit: string };
}

// notification 버튼 리스트
const notificationBtnList = [
  {
    text: 'All',
    value: 'all',
    count: 7,
  },
  {
    text:'Dao',
    value: 'dao',
    count: 3,
  },
  {
    text:'Marketplace',
    value: 'marketplace',
    count: 4,
  },
  {
    text:'Life',
    value: 'life',
    count: 0,
  },
  {
    text:'Community',
    value: 'community',
    count: 0,
  },
];

const notificationList: NotificationDataProps[] = [
  {
    type: 'marketplace',
    menuName: 'marketplace',
    imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg',
    desc: '축하합니다. NFT 낙찰에 성공했습니다. NFT 수령은 상세페이지에서 진행 가능합니다.',
    noticeTime: 'now',
    link: '/',
    detailContents: {
      title: 'Scarlet Jang Get 024 Hounslow West',
      desc: '0.21 WIMIX$ ($123.1)',
    },
    newNotice: true,
    majorNotice: true,
  },
  {
    type: 'marketplace',
    menuName: 'marketplace',
    imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg',
    desc: 'NFT 낙찰에 실패했습니다. 응찰 비용 환불은 상세페이지에서 진행 가능합니다.',
    noticeTime: '10minutes ago',
    link: '/',
    detailContents: {
      title: 'Acid Get 024 Hounslow West',
      desc: '0.21 WIMIX$ ($123.1)',
    },
    newNotice: true,
    majorNotice: true,
  },
  {
    type: 'dao',
    menuName: 'WONDER DAO - Station',
    imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg',
    desc: 'WONDER DAO가 개설되었습니다. DAO Token을 획득하세요.',
    noticeTime: '20minutes ago',
    doaGenerationContents: {
      ratio: 'WEMIX : WONDER = 1 : 1.618',
      achieve: '10,142,000.0000',
      achieveUnit: 'WDR',
    },
    link: '/',
    newNotice: true,
    majorNotice: true,
  },
  {
    type: 'dao',
    menuName: 'WONDER DAO - Station',
    imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg',
    desc: 'WONDER DAO가 개설되었습니다. DAO Token을 획득하세요.',
    noticeTime: '30minutes ago',
    doaGenerationContents: {
      ratio: 'WEMIX : WONDER = 1 : 1.618',
      achieve: '10,142,000.0000',
      achieveUnit: 'WDR',
    },
    link: '/',
    newNotice: false,
    majorNotice: true,
  },
  {
    type: 'marketplace',
    menuName: 'marketplace',
    imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg',
    desc: '관심 설정한 024 Hounslow West의 옥션이 시작되었습니다.',
    noticeTime: '1hours ago',
    link: '/',
    newNotice: false,
    majorNotice: false,
  },
  {
    type: 'marketplace',
    menuName: 'marketplace',
    imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg',
    desc: '내가 응찰한 NFT에 상위 응찰자가 생겼습니다.',
    noticeTime: '2hours ago',
    detailContents: {
      title: 'AcidAcidAcid outbid 024 Hounslow West Hounslow West Hounslow West Hounslow West',
      desc: '0.21 WIMIX$ ($123.1)',
    },
    link: '/',
    newNotice: false,
    majorNotice: false,
  },
  {
    type: 'dao',
    menuName: 'WEMIX.Fi DAO - Station',
    imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg',
    desc: 'WEMIX.Fi DAO Station 모집이 시작되었습니다.',
    noticeTime: '2022-10-11 11:24',
    detailContents: {
      title: 'WEMIX.Fi DAO Recruting NOW',
      desc: '2022-09-01 11:00 ~ 2022-09-30 11:00',
    },
    link: '/',
    newNotice: false,
    majorNotice: false,
  },
];

interface notificationProps {
  clickEvent: () => void;
}

export const HeaderNotifications: React.FC<notificationProps> = ({ clickEvent }) => {
  const { isLargeDesktop } = useLayoutResize();
  const [nowTab, setNowTab] = useState<string>('all');
  const [listCount, setListCount] = useState<number>(0);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [moNotificationOpen, setMoNotificationOpen] = useState(false);

  const clearEvent = () => {
    console.log('삭제');
  };

  let filterEl = [];
  const filterList = () => {
    filterEl = notificationList.filter((item) => {
      if (nowTab === 'all') {
        return true;
      } 
        return nowTab === item.type;
      
    });

    return listCount === 0 ? (
      <div className={cn('notification-empty')}>표시할 알림이 없습니다.</div>
    ) : (
      <>
        <ListWrapper>
          {filterEl.map((item) => {
            return (
              <List className={cn('notification-item', item.newNotice && 'active', item.newNotice && item.majorNotice && 'major')} key={item.desc}>
                <Link href={{ pathname: item.link }} passHref>
                  <button onClick={clickEvent} type="button">
                    <div className={cn('img-block')}>
                      <Image src={item.imgUrl} alt="" layout="fill" quality="100" loading="eager" objectFit="cover" />
                    </div>
                    <div className={cn('text-block')}>
                      <p className={cn('default-desc')}>{item.desc}</p>
                      {(item.detailContents || item.doaGenerationContents) && (
                        <div className={cn('detail-wrap')}>
                          {item.doaGenerationContents ? (
                            <dl>
                              <div>
                                <dt>최종 교환 비율</dt>
                                <dd>{item.doaGenerationContents.ratio}</dd>
                              </div>
                              <div>
                                <dt>획득 WONDER</dt>
                                <dd>
                                  {item.doaGenerationContents.achieve} <span className={cn('unit')}>{item.doaGenerationContents.achieveUnit}</span>
                                </dd>
                              </div>
                            </dl>
                          ) : (
                            <>
                              <p className={cn('detail-title')}>{item.detailContents?.title}</p>
                              <p className={cn('detail-desc')}>{item.detailContents?.desc}</p>
                            </>
                          )}
                        </div>
                      )}
                      <div className={cn('times-wrap')}>
                        {(item.type === 'dao' || nowTab === 'all') && <div className={cn('menu')}>{item.menuName}</div>}
                        <div className={cn('time')}>{item.noticeTime}</div>
                      </div>
                    </div>
                  </button>
                </Link>
                <button
                  type="button"
                  className={cn('btn-clear')}
                  onClick={() => {
                    clearEvent();
                  }}
                >
                  <span className={cn('a11y')}>알림 삭제</span>
                  <IconClose />
                </button>
              </List>
            );
          })}
        </ListWrapper>
        <InfiniteLoader />
      </>
    );
  };

  useEffect(() => {
    setListCount(filterEl.length);
  },[filterEl.length]);

  const mobileNotiHeader = useMemo(() => {
    return ({
      mobile: (
        <button type="button" onClick={() => setMoNotificationOpen(false)}>
          <span>전체 메뉴로 돌아가기</span>
          <IconArrowRight />
        </button>
      ),
      desktop: (''),
    })[isLargeDesktop ? 'desktop' : 'mobile'];
  }, [isLargeDesktop]);

  return (
    <>
      {mobileNotiHeader}
      <TabWrapper className={cn('notification-top')}>
        <RadioTabButton buttonList={notificationBtnList} currentTab={nowTab} setCurrentTab={setNowTab} />
      </TabWrapper>
      <div className={cn('notification-body')}>
        {filterList()}
         <InfiniteLoader />
      </div>
      <div className={cn('notification-bottom')}>
        <div className={cn('btn-wrap')}>
          <button type="button" disabled={listCount === 0}>
            모두 읽음
          </button>
          <button type="button" disabled={listCount === 0} onClick={() => setIsPopupOpen(true)}>
            모두 삭제
          </button>
        </div>
        <Link href={{ pathname: '/notification' }} passHref>
          <button className={cn('link-setting')} onClick={clickEvent} type="button">
            알림 설정
            <IconNotificationSetting />
          </button>
        </Link>
      </div>
      <ModalLayout
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        size="sm"
        title="알림 삭제 확인"
        footer
        // destroyOnClose={true}
        footerContent={[
          <OutlineButton
            buttonText="닫기"
            color="black"
            size="md"
            onClick={() => {
              setIsPopupOpen(false);
            }}
            key="cancel"
          />,
          <Button
            color="black"
            size="md"
            key="Save"
            onClick={() => {
              setIsPopupOpen(false);
            }}
          >예, 삭제합니다.</Button>,
        ]}
      >
        <p>알림을 모두 삭제하시겠습니까?</p>
      </ModalLayout>
    </>
  );
};


const TabWrapper = styled.div([]);

const ListWrapper = styled.div([]);

const List = styled.div([
  tw`relative`,
]);