import { TransactionReceipt } from 'web3-core';
import { TokenManager } from '@utils/contract/TokenManager';
import contract from '@/contracts/TokenManager.json';
import contractProxy from '@/contracts/TokenManagerProxy.json';
import { Address, Collection } from '@/models/nile/contract';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { BaseMetamaskContract } from '@utils/contract/metamask/index';

export class TokenManagerMetamask extends BaseMetamaskContract implements TokenManager<TransactionReceipt> {
  abi = contract.abi;
  address = contractProxy.address;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  walletAddress: Address;
  methods: any;

  constructor(walletAddress: Address) {
    super();
    this.walletAddress = walletAddress;
    const contractInstance = new this.web3.eth.Contract(this.abi as AbiItem[], this.address, { from: walletAddress });
    this.methods = contractInstance.methods;
  }

  blockCollection(collection: Address): Promise<TransactionReceipt> {
    return this.methods.blockCollection(collection).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.blockCollection(collection).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  changeTokenStatus(collection: Address, tid: number, close: number): Promise<TransactionReceipt> {
    return this.methods.changeTokenStatus(collection).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.changeTokenStatus(collection).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  getClosedTokenAmount(collection: Address, closer: Address, tid: number): Promise<number> {
    return this.methods.getClosedTokenAmount(collection, closer, tid).call();
  }

  getCollectionInfo(collection: Address): Promise<Collection> {
    return this.methods.getCollectionInfo(collection).call();
  }

  getCollectionList(): Promise<Address[]> {
    return this.methods.getCollectionList().call();
  }

  getGenesis(generation: Address): Promise<Address> {
    return this.methods.getGenesis(generation).call();
  }

  getReported(): Promise<Address[]> {
    return this.methods.getReported().call();
  }

  getReportedCount(collection: Address): Promise<Collection> {
    return this.methods.getReportedCount(collection).call();
  }

  isGeneration(collection: Address): Promise<boolean> {
    return this.methods.isGeneration(collection).call();
  }

  isRegisteredCollection(collection: Address): Promise<boolean> {
    return this.methods.isRegisteredCollection(collection).call();
  }

  isWhiteList(wallet: Address): Promise<boolean> {
    return this.methods.isWhiteList(wallet).call();
  }

  modifyCollection(collection: Collection): Promise<TransactionReceipt> {
    return this.methods.modifyCollection(collection).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.modifyCollection(collection).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  registerCollection(collection: Collection): Promise<TransactionReceipt> {
    return this.methods.registerCollection(collection).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.registerCollection(collection).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  report(collection: Address): Promise<TransactionReceipt> {
    return this.methods.report(collection).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.report(collection).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  setGenesisGeneration(genesis: Address, generation: Address, genesisTid: number[], generationTid: number[], offset: number): Promise<TransactionReceipt> {
    return this.methods.setGenesisGeneration(genesis, generation, genesisTid, generationTid, offset).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.setGenesisGeneration(genesis, generation, genesisTid, generationTid, offset).send({
        from: this.walletAddress,
        gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei'),
      });
    });
  }

  setWhiteList(collection: Address): Promise<TransactionReceipt> {
    return this.methods.setWhiteList(collection).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.setWhiteList(collection).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  turnOnlyWhiteList(use: boolean): Promise<TransactionReceipt> {
    return this.methods.turnOnlyWhiteList(use).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.turnOnlyWhiteList(use).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  unsetWhiteList(collection: Address): Promise<TransactionReceipt> {
    return this.methods.unsetWhiteList(collection).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.unsetWhiteList(collection).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

}
