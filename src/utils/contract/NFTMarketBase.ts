import { Address, Order } from '@/models/nile/contract';

export interface NFTMarketBase<T> {
  /**
   * 구매 주문 등록
   * @param strategyIndex 구매 방식 인덱스
   * @param order 주문 정보
   */
  registerBuyOrder(strategyIndex: number, order: Order): Promise<T>;

  /**
   * 판매 주문 등록
   * @param strategyIndex 판매 방식 인덱스
   * @param order 주문 정보
   */
  registerSellOrder(strategyIndex: number, order: Order): Promise<T>;

  /**
   * 구매 주문 수락
   * @param orderId 주문 아이디
   * @param amount 구매 수락할 수량(구매 방식이 옥션인 경우 입찰 금액)
   */
  offerBuyOrder(orderId: number, amount: number): Promise<T>;

  /**
   * 판매 주문 수락
   * @param orderId 주문 아이디
   * @param amount 판매 수락할 수량
   */
  offerSellOrder(orderId: number, amount: number): Promise<T>;

  /**
   * 경매 입찰 수락(판매 확정)
   * @param orderId 주문 아이디
   */
  claimAuction(orderId: number): Promise<T>;

  /**
   * 판매 주문 취소 후 구매 주문 수락
   * @param orderId 주문 아이디
   */
  cancelSellOfferBuyOrder(orderId: number): Promise<T>;

  /**
   * 주문 취소
   * @param orderId 주문 아이디
   */
  closeOrder(orderId: number): Promise<T>;

  /**
   * 주문 아이디로 주문 정보 조회
   * @param orderId 주문 아이디
   */
  orderByOderId(orderId: number): Promise<Order>;

  // strategies(): Promise<number[]>;

  /**
   * 구매 방식 추가
   * @requires Role.EDITOR
   * @param name 구매 방식 이름
   * @param strategy 구매 방식 컨트랙트 주소
   * @param isAuction 경매를 통한 구매 방식인지 여부
   */
  addStrategy(name: string, strategy: Address, isAuction: boolean): Promise<T>;

  /**
   * 구매 방식 제거
   * @param index 구매 방식 인덱스
   * @param strategy 구매 방식 컨트랙트 주소
   */
  subStrategy(index: number, strategy: Address): Promise<T>;

  /**
   * 구매 방식 유효성 확인
   * @param index 구매 방식 인덱스
   */
  isStrategyValid(index: number): Promise<boolean>;

  /**
   * 구매 방식이 경매인지 확인
   * @param index 구매 방식 인덱스
   */
  isStrategyAuction(index: number): Promise<boolean>;

  /**
   * 주문이 경매인지 확인
   * @param orderId 주문 아이디
   */
  isOrderAuction(orderId: number): Promise<boolean>;

  /**
   * 주문 방식 정보 확인
   * @param index 구매 방식 인덱스
   */
  strategyByIndex(index: number): Promise<[contract: Address, name: string]>;

  /**
   * TokenManager 컨트랙트 주소 설정
   * @param newAddress 토큰 매니저 컨트랙트 주소
   */
  setTokenManagerAddress(newAddress: Address): Promise<T>;
}
