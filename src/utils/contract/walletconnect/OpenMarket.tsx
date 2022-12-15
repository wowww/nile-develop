import { OpenMarket } from '@utils/contract/OpenMarket';
import { TransactionReceipt } from 'web3-core';
import contract from '@contracts/OpenMarket.json';
import { Address, Order } from '@/models/nile/contract';
import { ContractInterface, ethers } from 'ethers';
import { FeeData } from '@ethersproject/providers';

export class OpenMarketWalletConnect implements OpenMarket<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;
  walletAddress: string;
  methods: any;

  constructor(walletAddress: Address) {
    this.walletAddress = walletAddress;
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.methods = new ethers.Contract(this.address, this.abi as ContractInterface, signer);
  }

  init(tokenManager: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.contructor(tokenManager, { gasPrice });
    });
  }

  addStrategy(name: string, strategy: Address, isAuction: boolean): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      const converted = ethers.utils.toUtf8Bytes(name);
      return this.methods.addStrategy(converted, strategy, isAuction, { gasPrice });
    });
  }

  cancelSellOfferBuyOrder(orderId: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.cancelSellOfferBuyOrder(orderId, { gasPrice });
    });
  }

  claimAuction(orderId: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.claimAuction(orderId, { gasPrice });
    });
  }

  closeOrder(orderId: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.closeOrder(orderId, { gasPrice });
    });
  }

  isOrderAuction(orderId: number): Promise<boolean> {
    return this.methods.isOrderAuction();
  }

  isStrategyAuction(index: number): Promise<boolean> {
    return this.methods.isStrategyAuction();
  }

  isStrategyValid(index: number): Promise<boolean> {
    return this.methods.isStrategyValid();
  }

  offerBuyOrder(orderId: number, amount: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.offerBuyOrder(orderId, amount, { gasPrice });
    });
  }

  offerSellOrder(orderId: number, amount: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.offerSellOrder(orderId, amount, { gasPrice });
    });
  }

  orderByOderId(orderId: number): Promise<Order> {
    return this.methods.orderByOderId(orderId);
  }

  registerBuyOrder(strategyIndex: number, order: Order): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.registerBuyOrder(strategyIndex, order, { gasPrice });
    });
  }

  registerSellOrder(strategyIndex: number, order: Order): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.registerSellOrder(strategyIndex, { gasPrice });
    });
  }

  setTokenManagerAddress(newAddress: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.setTokenManagerAddress(newAddress, { gasPrice });
    });
  }

  strategyByIndex(index: number): Promise<[contract: Address, name: string]> {
    return this.methods.strategyByIndex(index).then((response: { [key: number]: string }) => Object.values(response));
  }

  subStrategy(index: number, strategy: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.subStrategy(index, strategy, { gasPrice });
    });
  }
}
