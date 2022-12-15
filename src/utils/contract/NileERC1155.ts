import { Address } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface NileERC1155<T> extends NileContract {
  /**
   * 토큰 발행
   * @requires Role.OWNER
   * @param to 토큰 발행 후 소유권을 부여할 주소
   * @param amount
   */
  mint(to: Address, amount: number): Promise<T>;

  /**
   * 토큰을 원하는 수량만큼 발행
   * @requires Role.OWNER
   * @param to 토큰 발행 후 소유권을 부여할 주소
   * @param amounts 발행할 토큰 수량
   */
  mintBatch(to: Address, amounts: number[]): Promise<T>;

  /**
   * 토큰을 원하는 수량만큼 반복적으로 발행 (총 발행될 수량: amount.length * repeatNum)
   * @requires Role.OWNER
   * @param to 토큰 발행 후 소유권을 부여할 주소
   * @param amount 발행할 토큰 수량
   * @param repeatNum 반복 횟수
   */
  mintMultiBatch(to: Address, amount: number[], repeatNum: number): Promise<T>;

  /**
   * 최근에 발행된 토큰 아이디 조회
   * @return {number} 가장 최근에 발행된 토큰 아이디
   */
  currentTokenID(): Promise<number>;

  /**
   * 토큰 아이디의 URI 조회
   * @param tokenId 토큰 아이디
   */
  tokenURI(tokenId: number): Promise<string>;
}
