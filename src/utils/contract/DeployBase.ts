import { Address } from '@/models/nile/contract';

export interface DeployBase<T> {
  /**
   * DeployRouter 컨트랙트 주소 설정
   * @param router
   */
  setRouter(router: Address): Promise<T>;

  /**
   * DeployRouter 컨트랙트 주소 조회
   */
  getRouter(): Promise<Address>;
}
