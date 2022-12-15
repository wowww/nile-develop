import { Address } from '@/models/nile/contract';
import { NFTMarketBase } from '@utils/contract/NFTMarketBase';
import { NileContract } from '@utils/contract';

export interface CurateMarket<T> extends NFTMarketBase<T>, NileContract {
  /**
   * 컨트랙트 생성자
   * @param tokenManager TokenManager 컨트랙트의 주소
   */
  init(tokenManager: Address): Promise<T>;

  /**
   * 판매자 화이트 리스트 추가
   * @param newSeller 추가할 주소 목록
   */
  addWhiteList(newSeller: Address[]): Promise<T>;

  /**
   * 판매자 화이트 리스트 삭제
   * @param seller 삭제할 주소
   */
  removeWhiteList(seller: Address): Promise<T>;

  /**
   * 판매자 화이트 리스트에 있는지 여부 확인
   * @param seller 조회할 주소
   */
  isWhiteListed(seller: Address): Promise<boolean>;
}
