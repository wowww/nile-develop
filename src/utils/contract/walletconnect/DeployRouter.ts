import { DeployRouter } from '@utils/contract/DeployRouter';
import { TransactionReceipt } from 'web3-core';
import contract from '@contracts/DeployRouter.json';
import contractProxy from '@contracts/DeployRouterProxy.json';
import { Address } from '@/models/nile/contract';
import { ContractInterface, ethers } from 'ethers';
import { FeeData } from '@ethersproject/providers';

export class DeployRouterWalletConnect implements DeployRouter<TransactionReceipt> {
  abi = contract.abi;
  address = contractProxy.address;
  walletAddress: string;
  methods: any;

  constructor(walletAddress: Address) {
    this.walletAddress = walletAddress;
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.methods = new ethers.Contract(this.address, this.abi as ContractInterface, signer);
  }

  create721(name: string, symbol: string, baseUri: string): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.create721(name, symbol, baseUri, { gasPrice });
    });
  }

  create1155(name: string, symbol: string, baseUri: string): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.create1155(name, symbol, baseUri, { gasPrice });
    });
  }

  getDeployers(): Promise<[erc721: Address, erc1155: Address]> {
    return this.methods.getDeployers().then((response: { [key: number]: string }) => Object.values(response));
  }

  isWhiteList(address: Address): Promise<boolean> {
    return this.methods.isWhiteList(address);
  }

  registerDeployer(erc721?: Address, erc1155?: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.registerDeployer(erc721 ?? '', erc1155 ?? '', { gasPrice });
    });
  }

  setUseWhiteList(status: boolean): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.setUseWhiteList(status, { gasPrice });
    });
  }

  setWhiteList(accounts: Address[]): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.setWhiteList(accounts, { gasPrice });
    });
  }

  unsetWhiteList(accounts: Address[]): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.unsetWhiteList(accounts, { gasPrice });
    });
  }

  useWhiteList(): Promise<boolean> {
    return this.methods.useWhiteList();
  }
}
