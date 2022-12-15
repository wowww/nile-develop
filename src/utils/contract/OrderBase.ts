import { Order } from '@/models/nile/contract';

export interface OrderBase<T> {
  /**
   * 주문 정보 조회
   * @param index 주문 인덱스
   */
  orderByIndex(index: number): Promise<Order>;

  /**
   * 총 주문 수량 조회
   * @return {number} 주문 수량
   */
  numberOfOrder(): Promise<number>;
}
