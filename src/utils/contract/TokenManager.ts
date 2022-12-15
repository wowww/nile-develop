import { Address, Collection, Role } from '@/models/nile/contract';
import { NileContract } from '@utils/contract';

export interface TokenManager<T> extends NileContract {
  /**
   * 컬렉션 등록
   * @param collection 등록할 컬렉션 정보
   */
  registerCollection(collection: Collection): Promise<T>;

  /**
   * 컬렉션 정보 수정
   * @param collection 수정할 컬렉션 정보
   */
  modifyCollection(collection: Collection): Promise<T>;

  /**
   * 컬렉션 신고
   * @param collection 신고할 컬렉션 주소
   */
  report(collection: Address): Promise<T>;

  /**
   * 컬렉션 차단
   * @requires Role.EDITOR
   * @param collection 차단할 컬렉션 주소
   */
  blockCollection(collection: Address): Promise<T>;

  /**
   * 등록된 컬렉션 목록
   * @return {Address[]} 컬렉션 주소 목록
   */
  getCollectionList(): Promise<Address[]>;

  /**
   * 컬렉션 정보 조회
   * @param collection
   */
  getCollectionInfo(collection: Address): Promise<Collection>;

  /**
   * 신고된 컬렉션 목록 조회
   * @return {Address[]} 신고된 컬렉션 주소 목록
   */
  getReported(): Promise<Address[]>;

  /**
   * 컬렉션 신고 횟수 조회
   * @param collection 신고 횟수를 확인할 컬렉션 주소
   */
  getReportedCount(collection: Address): Promise<Collection>;

  /**
   * 컬렉션을 화이트 리스트에 추가
   * @requires Role.EDITOR
   * @param collection 추가할 컬렉션 주소
   */
  setWhiteList(collection: Address): Promise<T>;

  /**
   * 컬렉션을 화이트 리스트에서 제거
   * @requires Role.EDITOR
   * @param collection 제거할 컬렉션 주소
   */
  unsetWhiteList(collection: Address): Promise<T>;

  /**
   * 화이트 리스트 사용 여부 설정
   * @requires Role.EDITOR
   * @param use ture: 등록, false: 미등록
   */
  turnOnlyWhiteList(use: boolean): Promise<T>;

  /**
   * 컬렉션의 화이트 리스트 등록 여부 조회
   * @return {boolean} true: 등록, false: 미등록
   */
  isWhiteList(wallet: Address): Promise<boolean>;

  /**
   * Genesis와 Generation 관계 설정
   * @requires Role.EDITOR
   * @param genesis Genesis 컬렉션 주소
   * @param generation Generation 컬렉션 주소
   * @param genesisTid Genesis 토큰 아이디
   * @param generationTid Generation 토큰 아이디
   * @param offset 1개의 Genesis Tid에 매핑 되는 Generation Tid 수
   */
  setGenesisGeneration(genesis: Address, generation: Address, genesisTid: number[], generationTid: number[], offset: number): Promise<T>;

  /**
   * 컬렉션의 Generation 여부 조회
   * @param collection 확인할 컬렉션의 주소
   * @return {boolean} true: Generation, false: Genesis
   */
  isGeneration(collection: Address): Promise<boolean>;

  /**
   * Generation의 Genesis Tid 확인
   * @param generation 확인할 컬렉션의 주소
   */
  getGenesis(generation: Address): Promise<Address>;

  /**
   * 토큰의 판매 가능 상태 변경
   * @param collection 컬렉션 주소
   * @param tid 상태를 변경할 토큰 아이디
   * @param close Not for sale 상태로 변경할 토큰 수량
   */
  changeTokenStatus(collection: Address, tid: number, close: number): Promise<T>;

  /**
   * Not for sale 상태 토큰 수량
   * @param collection 컬렉션 주소
   * @param closer 잠금 상태를 설정한 사용자 주소
   * @param tid 잠금 상태를 확인할 토큰 아이디
   */
  getClosedTokenAmount(collection: Address, closer: Address, tid: number): Promise<number>;

  /**
   * 컬렉션의 등록 여부 조회
   * @param collection 확인할 컬렉션 주소
   * @return {boolean} true: 등록, false: 미등록
   */
  isRegisteredCollection(collection: Address): Promise<boolean>;
}
