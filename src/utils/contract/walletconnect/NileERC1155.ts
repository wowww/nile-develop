import { Address } from '@/models/nile/contract';
import contract from '@/contracts/NileERC1155.json';
import { FeeData, TransactionReceipt } from '@ethersproject/providers';
import { ContractInterface, ethers } from 'ethers';
import Web3 from 'web3';
import { NileERC1155 } from '@utils/contract/NileERC1155';

export class NileERC1155WalletConnect implements NileERC1155<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;

  // @ts-ignore
  web3 = new Web3(window.ethereum);
  walletAddress: Address;
  methods: any;

  constructor(contractAddress: Address, walletAddress: Address) {
    this.walletAddress = walletAddress;
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.methods = new ethers.Contract(contractAddress, this.abi as ContractInterface, signer);
  }

  currentTokenID(): Promise<number> {
    return this.methods.currentTokenId().call();
  }

  mint(to: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.mint(to, { gasPrice });
    });
  }

  mintBatch(to: Address, amounts: number[]): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.mintBatch(to, amounts, { gasPrice });
    });
  }

  mintMultiBatch(to: Address, amount: number[], repeatNum: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.mintMultiBatch(to, amount, { gasPrice });
    });
  }

  tokenURI(tokenId: number): Promise<string> {
    return this.methods.tokenURI();
  }
}
