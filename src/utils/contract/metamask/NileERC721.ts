import { Address } from '@/models/nile/contract';
import contract from '@/contracts/NileERC721.json';
import { AbiItem } from 'web3-utils';
import { TransactionReceipt } from 'web3-core';
import Web3 from 'web3';
import { NileERC721 } from '@utils/contract/NileERC721';
import { BaseMetamaskContract } from '@utils/contract/metamask/index';

export class NileERC721Metamask extends BaseMetamaskContract implements NileERC721<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  methods: any;

  constructor(contractAddress: Address, walletAddress: Address) {
    super();
    const contractInstance = new this.web3.eth.Contract(this.abi as AbiItem[], contractAddress, { from: walletAddress });
    this.methods = contractInstance.methods;
  }

  currentTokenID(): Promise<number> {
    return this.methods.currentTokenID().call();
  }

  mint(to: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.mint(to).send({ gasPrice });
    });
  }

  mintBatch(to: Address, num: number): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.mintBatch(to, num).send({ gasPrice });
    });
  }

  tokenURI(tokenId: number): Promise<string> {
    return this.methods.tokenURI().call();
  }

  name(): Promise<string> {
    return this.methods.name().call();
  }

  isApprovedForAll(to: Address, operator: Address): Promise<boolean> {
    return this.methods.isApprovedForAll(to, operator).call();
  }

  setApprovalForAll(operator: Address, approved: boolean): Promise<boolean> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.setApprovalForAll(operator, approved).send({ gasPrice });
    });
  }
}
