import { Address } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface DeployRouter<T> extends NileContract {
  /**
   * 화이트 리스트에 추가
   * @param accounts 추가할 주소 목록
   */
  setWhiteList(accounts: Address[]): Promise<T>;

  /**
   * 화이트 리스트에서 제거
   * @param accounts 제거할 주소 목록
   */
  unsetWhiteList(accounts: Address[]): Promise<T>;

  /**
   * 화이트 리스트에 포함되어 있는지 여부 확인
   * @param address 확인할 주소
   */
  isWhiteList(address: Address): Promise<boolean>;

  /**
   * 화이트리스트 옵션 사용 여부 조회
   * @default true
   */
  useWhiteList(): Promise<boolean>;

  /**
   * 화이트 리스트 옵션 사용 여부 변경
   * @param status
   */
  setUseWhiteList(status: boolean): Promise<T>;

  /**
   * 배포 권한 사용자 등록
   * @param erc721 사용자 주소
   * @param erc1155 사용자 주소
   */
  registerDeployer(erc721?: Address, erc1155?: Address): Promise<T>;

  /**
   * 등록된 배포 권한 사용자 목록 조회
   */
  getDeployers(): Promise<[erc721: Address, erc1155: Address]>;

  /**
   * ERC721 형식의 컬렉션 생성
   * @requires isWhiteList
   * @param name 컬렉션 이름
   * @param symbol 컬렉션 심볼
   * @param baseUri 컬렉션에서 발행할 토큰의 정보가 들어갈 URI
   * @return {Address} 생성된 컬렉션의 컨트랙트 주소
   */
  create721(name: string, symbol: string, baseUri: string): Promise<T>;

  /**
   * ERC1155 형식의 컬렉션 생성
   * @requires isWhiteList
   * @param name 컬렉션 이름
   * @param symbol 컬렉션 심볼
   * @param baseUri 컬렉션에서 발행할 토큰의 정보가 들어갈 URI
   */
  create1155(name: string, symbol: string, baseUri: string): Promise<T>;
}
