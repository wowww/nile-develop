export type Address = string;

export enum GenesisType {
  NONE,                 // 일반 컨트랙트
  GENESIS,              // genesis contract
  GENERATION            // generation contract
}

export enum Role {
  OWNER,                // 소유 권한
  EDITOR,               // 수정 권한
}

export enum OrderStatus {
  NONE = 0,                 // 상태 없음
  OPEN = 1,                 // 주문 가능
  CLOSE = 2,                // 주문 불가능
  COMPLETE = 3,             // 주문 완료
}

export enum OrderType {
  FixedPrice,           // 고정가 판매
  EnglishAuction,       // 경매
  OpenPrice,            // 가격 제안
}

export enum Round {
  FIRST = 0,                // 1차 판매(CurateMarket)
  SECOND = 1,               // 2차 판매(OpenMarket)
}

export type FeeSet = {
  recipient: Address[];     // 수수료 수령인 주소
  rate: number[];           // 수수료 분배 비율
}

export type Collection = {
  name: string;             // 컬랙션 이름(토큰 이름과 별개)
  addr: Address;            // 컬랙션 주소(컨트랙트 주소)
  owner: Address;           // 컬렉션 소유자 주소
  genesis: Address;         // (generation 컬렉션인 경우) genesis 주소
  fRecipient: Address[];    // 1차 판매에 대한 수수료 수령자 주소
  sRecipient: Address[];    // 2차 판매에 대한 수수료 수령자 주소
  fRate: number[];          // 1차 판매에 대한 수수료 비율
  sRate: number[];          // 2차 판매에 대한 수수료 비율
  genesisHolderFee: number; // (generation 컬렉션인 경우) genesis holder의 수수료 비율
  featuredFee: number;      // Featured 수수료 비율
  genesisType: GenesisType; // 해당 컬렉션이 Genesis인지 여부
};

export type Order = {
  round: Round;             // 판매 방식 구분(1, 2차 판매)
  orderStatus: OrderStatus; // 주문 상태
  seller: Address;          // 판매자 주소
  collection: Address;      // 컬렉션 주소
  payment: Address;         // 지불 화폐 주소
  buyer: Address[];         // 구매자
  orderID: number;          // 주문 아이디
  orderAmount: number;      // 주문 수량
  startTime: number;        // 시작 시간
  tid: number;              // 판매 토큰 아이디
  price: number;            // 가격
  limit: number;            // 구매 제한 수량
  totalSoldAmount: number;  // 총 판매된 수량
  soldAmount: number[];     // 각 판매된 수량
};
