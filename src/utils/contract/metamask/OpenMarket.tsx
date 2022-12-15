import { OpenMarket } from '@utils/contract/OpenMarket';
import { TransactionReceipt } from 'web3-core';
import contract from '@contracts/OpenMarket.json';
import Web3 from 'web3';
import { Address, Order } from '@/models/nile/contract';
import { AbiItem } from 'web3-utils';

export class OpenMarketMetamask implements OpenMarket<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;
  walletAddress: string;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  methods: any;

  constructor(walletAddress: Address) {
    this.walletAddress = walletAddress;
    this.methods = new this.web3.eth.Contract(this.abi as AbiItem[], this.address).methods;
  }

  init(tokenManager: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.constructor(tokenManager).send({ gasPrice });
    });
  }

  addStrategy(name: string, strategy: Address, isAuction: boolean): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.addStrategy(name, strategy, isAuction).send({ gasPrice });
    });
  }

  cancelSellOfferBuyOrder(orderId: number): Promise<TransactionReceipt> {
    return this.methods.cancelSellOfferBuyOrder(orderId).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.cancelSellOfferBuyOrder(orderId).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  claimAuction(orderId: number): Promise<TransactionReceipt> {
    return this.methods.claimAuction(orderId).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.claimAuction(orderId).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  closeOrder(orderId: number): Promise<TransactionReceipt> {
    return this.methods.closeOrder(orderId).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.closeOrder(orderId).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  isOrderAuction(orderId: number): Promise<boolean> {
    return this.methods.isOrderAuction().call();
  }

  isStrategyAuction(index: number): Promise<boolean> {
    return this.methods.isStrategyAuction().call();
  }

  isStrategyValid(index: number): Promise<boolean> {
    return this.methods.isStrategyValid().call();
  }

  offerBuyOrder(orderId: number, amount: number): Promise<TransactionReceipt> {
    return this.methods.offerBuyOrder(orderId).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.offerBuyOrder(orderId).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  offerSellOrder(orderId: number, amount: number): Promise<TransactionReceipt> {
    return this.methods.offerSellOrder(orderId).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.offerSellOrder(orderId).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  orderByOderId(orderId: number): Promise<Order> {
    return this.methods.orderByOderId(orderId).call();
  }

  registerBuyOrder(strategyIndex: number, order: Order): Promise<TransactionReceipt> {
    return this.methods.registerBuyOrder(strategyIndex, order).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.registerBuyOrder(strategyIndex, order).send({
        from: this.walletAddress,
        gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei'),
      });
    });
  }

  registerSellOrder(strategyIndex: number, order: Order): Promise<TransactionReceipt> {
    return this.methods.registerSellOrder(strategyIndex, order).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.registerSellOrder(strategyIndex, order).send({
        from: this.walletAddress,
        gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei'),
      });
    });
  }

  setTokenManagerAddress(newAddress: Address): Promise<TransactionReceipt> {
    return this.methods.setTokenManagerAddress(newAddress).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.setTokenManagerAddress(newAddress).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }

  strategyByIndex(index: number): Promise<[contract: Address, name: string]> {
    return this.methods.strategyByIndex(index).call();
  }

  subStrategy(index: number, strategy: Address): Promise<TransactionReceipt> {
    return this.methods.subStrategy(index, strategy).estimateGas({ from: this.walletAddress }).then((gasPrice: number) => {
      return this.methods.subStrategy(index, strategy).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }
}
