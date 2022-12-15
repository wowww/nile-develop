import { Address } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface FeeManager<T> extends NileContract {
  /**
   * 잔액 조회
   * @param token 토큰 주소(코인인 경우 zero address)
   * @return {number} 잔액
   */
  getTreasuryAmount(token: Address): Promise<number>;

  /**
   * 인출
   * @param token 토큰 주소(코인인 경우 zero address)
   * @param amount 인출할 수량
   */
  withdrawTreasury(token: Address, amount: number): Promise<T>;
}
