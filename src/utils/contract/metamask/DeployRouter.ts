import { DeployRouter } from '@utils/contract/DeployRouter';
import { TransactionReceipt } from 'web3-core';
import contract from '@contracts/DeployRouter.json';
import contractProxy from '@contracts/DeployRouterProxy.json';
import Web3 from 'web3';
import { Address } from '@/models/nile/contract';
import { AbiItem } from 'web3-utils';
import { BaseMetamaskContract } from '@utils/contract/metamask/index';

export class DeployRouterMetamask extends BaseMetamaskContract implements DeployRouter<TransactionReceipt> {
  abi = contract.abi;
  address = contractProxy.address;
  walletAddress: string;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  methods: any;

  constructor(walletAddress: Address) {
    super();
    this.walletAddress = walletAddress;
    const contractInstance = new this.web3.eth.Contract(this.abi as AbiItem[], this.address, { from: walletAddress });
    this.methods = contractInstance.methods;
  }

  create721(name: string, symbol: string, baseUri: string): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.create721(name, symbol, baseUri).send({ gasPrice });
    });
  }

  create1155(name: string, symbol: string, baseUri: string): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.create1155(name, symbol, baseUri).send({ gasPrice });
    });
  }

  getDeployers(): Promise<[erc721: Address, erc1155: Address]> {
    return this.methods.getDeployers().call().then((response: { [key: number]: string }) => Object.values(response));
  }

  isWhiteList(address: Address): Promise<boolean> {
    return this.methods.isWhiteList(address).call();
  }

  registerDeployer(erc721?: Address, erc1155?: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.registerDeployer(erc721 ?? '', erc1155 ?? '').send({ gasPrice });
    });
  }

  setUseWhiteList(status: boolean): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.setUseWhiteList(status).send({ gasPrice });
    });
  }

  setWhiteList(accounts: Address[]): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.setWhiteList(accounts).send({ gasPrice });
    });
  }

  unsetWhiteList(accounts: Address[]): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.unsetWhiteList(accounts).send({ gasPrice });
    });
  }

  useWhiteList(): Promise<boolean> {
    return this.methods.useWhiteList().call();
  }
}
