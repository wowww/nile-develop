import { TransactionReceipt } from 'web3-core';
import { TokenManager } from '@utils/contract/TokenManager';
import contract from '@/contracts/TokenManager.json';
import { Address, Collection } from '@/models/nile/contract';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { FeeData } from '@ethersproject/providers';

export class TokenManagerWalletConnect implements TokenManager<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;
  walletAddress: string;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  methods: any;

  constructor(walletAddress: Address) {
    this.walletAddress = walletAddress;
    const contractInstance = new this.web3.eth.Contract(this.abi as AbiItem[], this.address);
    this.methods = contractInstance.methods;
  }

  blockCollection(collection: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.blockCollection(collection, { gasPrice });
    });
  }

  changeTokenStatus(collection: Address, tid: number, close: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.changeTokenStatus(collection, tid, close, { gasPrice });
    });
  }

  getClosedTokenAmount(collection: Address, closer: Address, tid: number): Promise<number> {
    return this.methods.getClosedTokenAmount(collection, closer, tid);
  }

  getCollectionInfo(collection: Address): Promise<Collection> {
    return this.methods.getCollectionInfo(collection);
  }

  getCollectionList(): Promise<Address[]> {
    return this.methods.getCollectionList();
  }

  getGenesis(generation: Address): Promise<Address> {
    return this.methods.getGenesis(generation);
  }

  getReported(): Promise<Address[]> {
    return this.methods.getReported();
  }

  getReportedCount(collection: Address): Promise<Collection> {
    return this.methods.getReportedCount(collection);
  }

  isGeneration(collection: Address): Promise<boolean> {
    return this.methods.isGeneration(collection);
  }

  isRegisteredCollection(collection: Address): Promise<boolean> {
    return this.methods.isRegisteredCollection(collection);
  }

  isWhiteList(wallet: Address): Promise<boolean> {
    return this.methods.isWhiteList(wallet);
  }

  modifyCollection(collection: Collection): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.modifyCollection(collection, { gasPrice });
    });
  }

  registerCollection(collection: Collection): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.registerCollection(collection, { gasPrice });
    });
  }

  report(collection: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.report(collection, { gasPrice });
    });
  }

  setGenesisGeneration(genesis: Address, generation: Address, genesisTid: number[], generationTid: number[], offset: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.setGenesisGeneration(genesis, generation, genesisTid, generationTid, offset, { gasPrice });
    });
  }

  setWhiteList(collection: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.setWhiteList(collection, { gasPrice });
    });
  }

  turnOnlyWhiteList(use: boolean): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.turnOnlyWhiteList(use, { gasPrice });
    });
  }

  unsetWhiteList(collection: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.unsetWhiteList(collection, { gasPrice });
    });
  }
}
