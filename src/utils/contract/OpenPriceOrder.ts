import { OrderBase } from '@utils/contract/OrderBase';
import { Address } from '@/models/nile/contract';
import { NileContract } from '@utils/contract/index';

export interface OpenPriceOrder<T> extends OrderBase<T>, NileContract {
  /**
   * 구매자의 모든 판매 제안 주문 인덱스
   * @param buyer 구매자 지갑 주소
   */
  orderIndexesByBuyer(buyer: Address): Promise<number>;

  /**
   * 판매 제안 받은 주문 인덱스 목록
   * @param seller
   * @param token
   * @param tid
   */
  getReceivedOffer(seller: Address, token: Address, tid: number): Promise<number[]>;
}
