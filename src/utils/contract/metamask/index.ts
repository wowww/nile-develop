import Web3 from 'web3';
import BigNumber from 'bignumber.js';

export abstract class BaseMetamaskContract {
  maximum = Web3.utils.toWei('100', 'gwei');

  calc(gasPrice: number) {
    const price = Web3.utils.toWei(`${gasPrice}`, 'mwei');
    const bnPrice = new BigNumber(price);
    const bnMaximum = new BigNumber(this.maximum);
    console.log(bnPrice, bnMaximum);
    return bnPrice.isGreaterThan(bnMaximum) ? this.maximum : price;
  }
}
