import { OrderBase } from '@utils/contract/OrderBase';
import { Address } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface EnglishAuctionOrder<T> extends OrderBase<T>, NileContract {
  /**
   * 판매자의 모든 주문 인덱스 조회
   * @param seller
   */
  orderIndexesBySeller(seller: Address): Promise<number[]>;

  /**
   * 입찰자의 입찰 금액 목록 조회
   * @param index 주문 인덱스
   * @param bidder 입찰자
   */
  getBiddingPrice(index: number, bidder: Address): Promise<number[]>;

  /**
   * 경매 종료 시간 조회
   * @param index 주문 인덱스
   * @return 종료 시간
   */
  getEndTime(index: number): Promise<number>;
}
