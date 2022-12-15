import { AtomEffect } from 'recoil';
import { NileApiService } from '@/services/nile/api';
import { CryptoWallet } from '@recoil/atoms';
import Web3 from 'web3';

export const saveOnLocalStorage: <T>(key?: string) => AtomEffect<T> = (key) => ({ setSelf, onSet, node }) => {
  if (typeof window !== 'undefined') {
    const itemKey = key ?? node.key;

    const savedValue = localStorage.getItem(itemKey);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(itemKey);
        return;
      }
      localStorage.setItem(itemKey, JSON.stringify(newValue));
    });
  }
};

export const handleAccount: () => AtomEffect<CryptoWallet> = () => ({ setSelf, onSet, node }) => {
  if (typeof window === 'undefined') return;
  const api = NileApiService();

  const signing = (wallet: CryptoWallet, data: string) => {
    if (wallet.address) {
      // @ts-ignore
      const web3 = new Web3(window.ethereum);
      return web3.eth.personal.sign(data, wallet.address, '');
    }
    return Promise.reject(new Error('not configured'));
  };

  const login = (wallet: CryptoWallet, nonce: string) => {
    if (wallet.address && signing) {
      const address = wallet.address.toLowerCase();
      signing(wallet, `Login to Nile : ${address}. nonce: ${nonce}`)
        .then((signature?: string) => {
          if (address && wallet.provider && signature) {
            api.user.login(address, wallet.provider, signature)
              .then(({ data }) => console.log(data))
              .catch(({ response }) => console.log(response));
          }
        })
        .catch((error) => {
          console.log('user deny sign', error);
        });
    }
  };

  const signup = (wallet: CryptoWallet) => {
    if (wallet.address) {
      api.user.signup(wallet.address)
        .then(({ data }) => login(wallet, data.nonce))
        .catch(({ response }) => console.log(response));
    }
  };

  onSet((wallet, oldWallet) => {
    if (wallet.address !== (oldWallet as CryptoWallet)?.address && wallet.address) {
      api.user.account
        .getUserInfo(wallet.address)
        .then(({ data }) => login(wallet, data.nonce))
        .catch(({ response }) => {
          switch (response.status) {
            case 404:
              signup(wallet);
              break;
            default:
              break;
          }
        });
    }
  });
};
