import { Address } from '@/models/nile/contract';
import contract from '@/contracts/NileERC1155.json';
import { AbiItem } from 'web3-utils';
import { TransactionReceipt } from 'web3-core';
import Web3 from 'web3';
import { NileERC1155 } from '@utils/contract/NileERC1155';

export class NileERC1155Metamask implements NileERC1155<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  walletAddress: Address;
  methods: any;

  constructor(contractAddress: Address, walletAddress: Address) {
    this.walletAddress = walletAddress;
    this.methods = new this.web3.eth.Contract(this.abi as AbiItem[], contractAddress).methods;
  }

  currentTokenID(): Promise<number> {
    return this.methods.currentTokenId().call();
  }

  mint(to: Address): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.mint(to).send({ gasPrice });
    });
  }

  mintBatch(to: Address, amounts: number[]): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.mintBatch(to).send({ gasPrice });
    });
  }

  mintMultiBatch(to: Address, amount: number[], repeatNum: number): Promise<TransactionReceipt> {
    return this.web3.eth.getGasPrice().then((gasPrice) => {
      return this.methods.mintMultiBatch(to, amount, repeatNum).send({ from: this.walletAddress, gasPrice: Web3.utils.toWei(`${gasPrice}`, 'mwei') });
    });
  }


  tokenURI(tokenId: number): Promise<string> {
    return this.methods.tokenURI().call();
  }
}
