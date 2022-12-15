import { Address, Collection, FeeSet, Round } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface Recipient<T> extends NileContract {
  /**
   * 컨트랙트 생성자
   * @param address Fee Manager 컨트랙트 주소
   */
  init(address: Address): Promise<T>;

  /**
   * 수수료 정보 목록 조회
   * @param collection 컬렉션 주소
   * @param round 거래 방식
   * @param tid 컬렉션 아이디
   */
  getRecipient(collection: Address, round: Round, tid: number): Promise<FeeSet>;

  /**
   * 수수료 정보 설정
   * @param collection 컬렉션 정보
   */
  setRecipient(collection: Collection): Promise<boolean>;

  /**
   * 정산용 이벤트 처리
   * @param orderIndex 주문 인덱스
   * @param collection 컬렉션 주소
   * @param tid 컬렉션 ID
   * @param round 거래 방식
   * @param price NFT 거래 가격
   */
  distributionEventEmit(orderIndex: number, collection: Address, tid: number, round: Round, price: number): Promise<boolean>;

  /**
   * FeeManager 컨트랙트의 주소 조회
   */
  getFeeManagerAddress(): Promise<Address>;

  /**
   * TokenManager 컨트랙트의 주소 조회
   */
  getTokenManagerAddress(): Promise<Address>;

  /**
   * 플랫폼 수수료 확인
   */
  getPlatformFee(): Promise<number>;

  /**
   * 피처드 수수료 확인
   * @param collection 컬렉션 주소
   */
  getFeaturedFee(collection: Address): Promise<number>;

  /**
   * FeeManager 주소 설정
   * @requires Role.EDITOR
   * @param newAddress
   */
  setFeeManagerAddress(newAddress: Address): Promise<T>;

  /**
   * TokenManager 주소 설정
   * @requires Role.EDITOR
   * @param newAddress
   */
  setTokenManagerAddress(newAddress: Address): Promise<T>;

  /**
   * 플랫폼 수수료 설정
   * @requires Role.EDITOR
   * @param fee 플랫폼 수수료
   */
  setPlatformFee(fee: number): Promise<T>;

  /**
   * 피처드 수수료 설정
   * @requires Role.EDITOR
   * @param collection 컬렉션 주소
   * @param fee 피처드 수수료
   */
  setFeaturedFee(collection: Address, fee: number): Promise<T>;
}
