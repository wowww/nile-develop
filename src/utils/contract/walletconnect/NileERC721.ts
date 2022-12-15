import { NileERC721 } from '@utils/contract/NileERC721';
import { Address } from '@/models/nile/contract';
import contract from '@/contracts/NileERC721.json';
import { ContractInterface, ethers } from 'ethers';
import { FeeData, TransactionReceipt } from '@ethersproject/providers';

export class NileERC721WalletConnect implements NileERC721<TransactionReceipt> {
  abi = contract.abi;
  address = contract.address;
  walletAddress: string;
  methods: any;

  constructor(contractAddress: Address, walletAddress: Address) {
    this.walletAddress = walletAddress;
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(walletAddress);
    this.methods = new ethers.Contract(contractAddress, this.abi as ContractInterface, signer);
  }

  currentTokenID(): Promise<number> {
    return this.methods.currentTokenId();
  }

  mint(to: Address): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.mint(to, { gasPrice });
    });
  }

  mintBatch(to: Address, num: number): Promise<TransactionReceipt> {
    return this.methods.provider.getFeeData().then(({ gasPrice }: FeeData) => {
      return this.methods.mintBatch(to, num, { gasPrice });
    });
  }

  tokenURI(tokenId: number): Promise<string> {
    return this.methods.tokenURI();
  }
}

