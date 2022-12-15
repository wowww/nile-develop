import { Address, Role } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface NileERC721<T> extends NileContract {
  /**
   * 토큰 발행
   * @requires Role.OWNER
   * @param to 토큰 발행 후 소유권을 부여할 주소
   */
  mint(to: Address): Promise<T>;

  /**
   * 토큰을 원하는 수량만큼 발행
   * @requires Role.OWNER
   * @param to 토큰 발행 후 소유권을 부여할 주소
   * @param num 발행할 토큰 수량
   */
  mintBatch(to: Address, num: number): Promise<T>;

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

