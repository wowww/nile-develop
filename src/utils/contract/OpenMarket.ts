import { Address } from '@/models/nile/contract';
import { NFTMarketBase } from '@utils/contract/NFTMarketBase';
import { NileContract } from '@utils/contract';

export interface OpenMarket<T> extends NFTMarketBase<T>, NileContract {
  /**
   * 컨트랙트 생성자
   * @param tokenManager TokenManager의 컨트랙트 주소
   */
  init(tokenManager: Address): Promise<T>;
}
