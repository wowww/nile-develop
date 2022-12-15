import { OrderBase } from '@utils/contract/OrderBase';
import { Address } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface FixedPriceOrder<T> extends OrderBase<T>, NileContract {
  /**
   * 판매자의 모든 주문 인덱스 조회
   * @param seller 판매자 주소
   * @return {number[]} 판매자 주문 인덱스 목록
   */
  orderIndexesBySeller(seller: Address): Promise<number[]>;
}
