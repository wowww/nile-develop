import { CurateMarket } from '@utils/contract/CurateMarket';
import { TransactionReceipt } from 'web3-core';
import contract from '@contracts/CurateMarket.json';
import Web3 from 'web3';
import { Address, Order } from '@/models/nile/contract';
import { AbiItem } from 'web3-utils';

export class CurateMarketMetamask implements CurateMarket<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;
  walletAddress: string;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  methods: any;

  constructor(walletAddress: Address) {
    this.walletAddress = walletAddress;
    const contractInstance = new this.web3.eth.Contract(this.abi as AbiItem[], this.address, { from: walletAddress });
    console.log('curate market', contractInstance);
    this.methods = contractInstance.methods;
  }

  init(tokenManager: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.constructor(tokenManager).send({ gasPrice });
    });
  }

  addStrategy(name: string, strategy: Address, isAuction: boolean): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      const converted = this.web3.utils.stringToHex(name);
      return this.methods.addStrategy(converted, strategy, isAuction).send({ gasPrice });
    });
  }

  addWhiteList(newSeller: Address[]): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.addWhiteList(newSeller).send({ gasPrice });
    });
  }

  cancelSellOfferBuyOrder(orderId: number): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.cancelSellOfferBuyOrder(orderId).send({ gasPrice });
    });
  }

  claimAuction(orderId: number): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.claimAuction(orderId).send({ gasPrice });
    });
  }

  closeOrder(orderId: number): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.closeOrder(orderId).send({ gasPrice });
    });
  }

  isOrderAuction(orderId: number): Promise<boolean> {
    return this.methods.isOrderAuction(orderId).call();
  }

  isStrategyAuction(index: number): Promise<boolean> {
    return this.methods.isStrategyAuction(index).call();
  }

  isStrategyValid(index: number): Promise<boolean> {
    return this.methods.isStrategyValid(index).call();
  }

  isWhiteListed(seller: Address): Promise<boolean> {
    return this.methods.isWhiteListed(seller).call();
  }

  offerBuyOrder(orderId: number, amount: number): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.offerBuyOrder(orderId, amount).send({ gasPrice });
    });
  }

  offerSellOrder(orderId: number, amount: number): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.offerSellOrder(orderId, amount).send({ gasPrice });
    });
  }

  orderByOderId(orderId: number): Promise<Order> {
    return this.methods.orderByOderId(orderId).call();
  }

  registerBuyOrder(strategyIndex: number, order: Order): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.registerBuyOrder(strategyIndex, order).send({ gasPrice });
    });
  }

  registerSellOrder(strategyIndex: number, order: Order): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.registerSellOrder(strategyIndex, order).send({ gasPrice });
    });
  }

  removeWhiteList(seller: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.removeWhiteList(seller).send({ gasPrice });
    });
  }

  setTokenManagerAddress(newAddress: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.setTokenManagerAddress(newAddress).send({ gasPrice });
    });
  }

  strategyByIndex(index: number): Promise<[contract: Address, name: string]> {
    return this.methods.strategyByIndex(index).call().then((response: { [key: number]: string }) => Object.values(response));
  }

  subStrategy(index: number, strategy: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.subStrategy(index, strategy).send({ gasPrice });
    });
  }
}
