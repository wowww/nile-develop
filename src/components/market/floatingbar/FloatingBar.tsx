import { useState } from 'react';
import cn from 'classnames';

export type MarketFloatingBarProps = {
  data: {
    state: 'upcoming' | 'auction-start' | 'auction-ing' | 'closed' | 'buy-now' | 'offer-open' | 'offer-ing' | 'not-sale';
    myCollection: boolean;
    collectionName: string;
    productTitle: string;
    price: number;
    image: string;
    creatorName: string;
    likeCount: number;
    startTime?: string;
    endTime?: string;
    winnerName?: string;
    ownerName?: string;
    editionTotalNum?: number;
    editionNum?: number;
  };
  dealType: 'buy' | 'sell';
  type: 'auction' | 'buyNow' | 'openForBid' | 'notForSale' | 'listing';
  progress: 'before' | 'after' | 'success' | 'fail' | 'expired';
  active: boolean;
  watching?: boolean;
};

export const MarketFloatingBar = ({ data, dealType, type, progress, active, watching = false }: MarketFloatingBarProps) => {
  const [restTimeRatio, setRestTimeRatio] = useState<number>(0);

  return (
    <div className={cn('marketplace-floating-bar-wrap', { active })}>
      {/* <div className={cn('marketplace-floating-bar-inner')}> */}
      {/*  <div className={cn('info-area')}> */}
      {/*    <div className={cn('img-block')}> */}
      {/*      <Image src={data.imgUrl} alt="" layout="fill" quality={100} loading="eager" /> */}
      {/*    </div> */}
      {/*    <div className={cn('info-detail')}> */}
      {/*      /!* 22.10.06 수정: 구매 옥션 중인 NFT 상세 (비딩 후) 플로팅바 애니메이션을 위한 클래스 추가 *!/ */}
      {/*      <strong className={cn(dealType === 'buy' && type === 'auction' && progress === 'after' && 'active')}>{data.collectionName}</strong> */}
      {/*      <span>{data.price.toLocaleString()} WEMIX$</span> */}
      {/*    </div> */}
      {/*  </div> */}
      {/*  <div className={cn('interactive-area')}> */}
      {/*    {dealType === 'buy' ? ( */}
      {/*      <> */}
      {/*        {type === 'auction' ? ( */}
      {/*          <> */}
      {/*            {progress === 'before' ? ( */}
      {/*              <div className={cn('amount-block')}> */}
      {/*                <NumberInput unit="WEMIX$" /> */}
      {/*                <BgButton */}
      {/*                  buttonText="Place Bid" */}
      {/*                  color="white" */}
      {/*                  size="lg-f" */}
      {/*                  onClick={() => { */}
      {/*                    openPaymentModal('placeBid'); */}
      {/*                  }} */}
      {/*                /> */}
      {/*              </div> */}
      {/*            ) : progress === 'after' ? ( */}
      {/*              <> */}
      {/*                <div className={cn('amount-block')}> */}
      {/*                  <NumberInput unit="WEMIX$" /> */}
      {/*                  <BgButton */}
      {/*                    buttonText="Place Bid" */}
      {/*                    color="white" */}
      {/*                    size="lg-f" */}
      {/*                    onClick={() => { */}
      {/*                      openPaymentModal('placeBid'); */}
      {/*                    }} */}
      {/*                  /> */}
      {/*                </div> */}
      {/*              </> */}
      {/*            ) : progress === 'success' ? ( */}
      {/*              <BgButton */}
      {/*                buttonText="Complete Checkout" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                onClick={() => { */}
      {/*                  openPaymentModal('completeCheckout'); */}
      {/*                }} */}
      {/*              /> */}
      {/*            ) : progress === 'fail' ? ( */}
      {/*              <BgButton */}
      {/*                buttonText="Get My Money Back" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                onClick={() => { */}
      {/*                  openPaymentModal('retractingBid'); */}
      {/*                }} */}
      {/*              /> */}
      {/*            ) : ( */}
      {/*              <span>잘못된 progress 입력</span> */}
      {/*            )} */}
      {/*          </> */}
      {/*        ) : type === 'buyNow' ? ( */}
      {/*          <> */}
      {/*            {progress === 'before' || progress === 'after' ? ( */}
      {/*              <div className={cn('two-btn-wrap')}> */}
      {/*                <OutlineButton */}
      {/*                  buttonText="Make Offer" */}
      {/*                  color="white" */}
      {/*                  size="lg-f" */}
      {/*                  onClick={() => { */}
      {/*                    setIsMakeOfferModal(true); */}
      {/*                  }} */}
      {/*                /> */}
      {/*                <BgButton */}
      {/*                  buttonText="Buy Now" */}
      {/*                  color="white" */}
      {/*                  size="lg-f" */}
      {/*                  onClick={() => { */}
      {/*                    openPaymentModal('placeBid'); */}
      {/*                  }} */}
      {/*                /> */}
      {/*              </div> */}
      {/*            ) : progress === 'expired' ? ( */}
      {/*              <div className={cn('two-btn-wrap')}> */}
      {/*                <OutlineButton */}
      {/*                  buttonText="Get My Money Back" */}
      {/*                  color="white" */}
      {/*                  size="lg-f" */}
      {/*                  onClick={() => { */}
      {/*                    openPaymentModal('retractingBid'); */}
      {/*                  }} */}
      {/*                /> */}
      {/*                <BgButton */}
      {/*                  buttonText="Buy Now" */}
      {/*                  color="white" */}
      {/*                  size="lg-f" */}
      {/*                  onClick={() => { */}
      {/*                    openPaymentModal('placeBid'); */}
      {/*                  }} */}
      {/*                /> */}
      {/*              </div> */}
      {/*            ) : ( */}
      {/*              <span>잘못된 progress 입력</span> */}
      {/*            )} */}
      {/*          </> */}
      {/*        ) : type === 'openForBid' ? ( */}
      {/*          <> */}
      {/*            {progress === 'before' || progress === 'after' ? ( */}
      {/*              <BgButton */}
      {/*                buttonText="Make Offer" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                onClick={() => { */}
      {/*                  setIsMakeOfferModal(true); */}
      {/*                }} */}
      {/*              /> */}
      {/*            ) : progress === 'expired' || progress === 'fail' ? ( */}
      {/*              <BgButton */}
      {/*                buttonText="Get My Money Back" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                onClick={() => { */}
      {/*                  openPaymentModal('retractingBid'); */}
      {/*                }} */}
      {/*              /> */}
      {/*            ) : progress === 'success' ? ( */}
      {/*              <BgButton */}
      {/*                buttonText="Complete Checkout" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                onClick={() => { */}
      {/*                  openPaymentModal('completeCheckout'); */}
      {/*                }} */}
      {/*              /> */}
      {/*            ) : ( */}
      {/*              <span>잘못된 progress 입력</span> */}
      {/*            )} */}
      {/*          </> */}
      {/*        ) : type === 'notForSale' ? ( */}
      {/*          <> */}
      {/*            {progress === 'before' ? ( */}
      {/*              <OutlineButton */}
      {/*                buttonText="Set Alarm it appears on Market" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                iconType */}
      {/*                iconValue="alarm" */}
      {/*                onClick={() => message.info('알림 신청되었습니다.')} */}
      {/*              /> */}
      {/*            ) : progress === 'after' ? ( */}
      {/*              <OutlineButton */}
      {/*                buttonText="Cancel Sales Alarm" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                iconType */}
      {/*                iconValue="alarm" */}
      {/*                onClick={() => message.info('알림 취소되었습니다.')} */}
      {/*              /> */}
      {/*            ) : progress === 'expired' ? ( */}
      {/*              <BgButton */}
      {/*                buttonText="Complete Checkout" */}
      {/*                color="white" */}
      {/*                size="lg-f" */}
      {/*                onClick={() => { */}
      {/*                  openPaymentModal('completeCheckout'); */}
      {/*                }} */}
      {/*              /> */}
      {/*            ) : ( */}
      {/*              <span>잘못된 progress 입력</span> */}
      {/*            )} */}
      {/*          </> */}
      {/*        ) : ( */}
      {/*          <span>잘못된 type 입력</span> */}
      {/*        )} */}
      {/*      </> */}
      {/*    ) : dealType === 'sell' ? ( */}
      {/*      <> */}
      {/*        {type === 'listing' ? ( */}
      {/*          <BgButton buttonText="List for Sale" color="white" size="lg-f" /> */}
      {/*        ) : type === 'buyNow' ? ( */}
      {/*          <> */}
      {/*            {progress === 'before' ? ( */}
      {/*              <BgButton buttonText="Edit or Cancel Listing" color="white" size="lg-f" /> */}
      {/*            ) : ( */}
      {/*              <div className={cn('two-btn-wrap')}> */}
      {/*                <OutlineButton buttonText="Edit or Cancel Listing" color="white" size="lg-f" /> */}
      {/*                <BgButton */}
      {/*                  buttonText="Sell at Offer price" */}
      {/*                  color="white" */}
      {/*                  size="lg-f" */}
      {/*                  onClick={() => { */}
      {/*                    openHistoryModal('sell'); */}
      {/*                  }} */}
      {/*                /> */}
      {/*              </div> */}
      {/*            )} */}
      {/*          </> */}
      {/*        ) : type === 'openForBid' ? ( */}
      {/*          <> */}
      {/*            {progress === 'before' ? ( */}
      {/*              <BgButton buttonText="List for Sale" color="white" size="lg-f" /> */}
      {/*            ) : ( */}
      {/*              <div className={cn('two-btn-wrap')}> */}
      {/*                <OutlineButton buttonText="List for Sale" color="white" size="lg-f" /> */}
      {/*                <BgButton */}
      {/*                  buttonText="Sell at Offer price" */}
      {/*                  color="white" */}
      {/*                  size="lg-f" */}
      {/*                  onClick={() => { */}
      {/*                    openHistoryModal('sell'); */}
      {/*                  }} */}
      {/*                /> */}
      {/*              </div> */}
      {/*            )} */}
      {/*          </> */}
      {/*        ) : type === 'notForSale' ? ( */}
      {/*          <BgButton buttonText="List for Sale" color="white" size="lg-f" /> */}
      {/*        ) : ( */}
      {/*          <span>wrong type</span> */}
      {/*        )} */}
      {/*      </> */}
      {/*    ) : ( */}
      {/*      <span>wrong dealtype</span> */}
      {/*    )} */}
      {/*  </div> */}
      {/*  {watching && ( */}
      {/*    <div className={cn('tooltip', { active })}> */}
      {/*      <div className={cn('profile-img')}> */}
      {/*        /!* 불러온 프로필 이미지로 변경 *!/ */}
      {/*        <Image src={data.imgUrl} width={20} height={20} /> */}
      {/*      </div> */}
      {/*      현재 2명이 작품 확인 중 */}
      {/*    </div> */}
      {/*  )} */}
      {/* </div> */}
      {/* /!* 남은 시간 표시 *!/ */}
      {/* {dealType === 'buy' && type === 'auction' && progress === 'after' && ( */}
      {/*  <div className={cn('progress-bar')}> */}
      {/*    <div className={cn('progress-filled')} style={{ width: `${restTimeRatio}%` }}></div> */}
      {/*  </div> */}
      {/* )} */}
        </div>
        );
      };

MarketFloatingBar.defaultProps = {
  watching: false,
}
