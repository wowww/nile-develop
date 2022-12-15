import IconAda from '@/assets/icons/token/icon_ada.svg';
import IconBtc from '@/assets/icons/token/icon_btcb.svg';
import IconBusd from '@/assets/icons/token/icon_busd.svg';
import IconDai from '@/assets/icons/token/icon_dai.svg';
import IconDot from '@/assets/icons/token/icon_dot.svg';
import IconEth from '@/assets/icons/token/icon_eth.svg';
import IconSolana from '@/assets/icons/token/icon_sol.svg';
import IconUsdc from '@/assets/icons/token/icon_usdc.svg';
import IconUsdt from '@/assets/icons/token/icon_usdt.svg';
import IconWbnb from '@/assets/icons/token/icon_wbnb.svg';
import IconWemixDollar from '@/assets/icons/token/icon_wemix$.svg';
import IconWemix from '@/assets/icons/token/icon_wemix.svg';
import IconXrp from '@/assets/icons/token/icon_xrp.svg';
import IconKlaytn from '@/assets/icons/token/icon_klaytn.svg';
import IconWallet from '@/assets/icons/token/icon_wemix_wallet.svg';
import IconMetaMask from '@/assets/icons/token/icon_metamask.svg';
import IconPlaceholder1 from '@/assets/icons/token/icon_placeholder1.svg';
import IconPlaceholder2 from '@/assets/icons/token/icon_placeholder2.svg';
import IconWemixDark from '@/assets/icons/token/icon_dark_wemix.svg';
import IconWemixDollarDark from '@/assets/icons/token/icon_dark_wemix$.svg';
import IconWonder from '@/assets/icons/daotokens/ico_wonder.svg';
import IconWonderFull from '@/assets/icons/daotokens/ico_wonder_full.svg';
import IconGWonder from '@/assets/icons/daotokens/ico_gwonder.svg';
import IconGWonderFull from '@/assets/icons/daotokens/ico_gwonder_full.svg';
import IconWemixFi from '@/assets/icons/daotokens/ico_wemixfi.svg';
import IconKiaf from '@/assets/icons/daotokens/ico_kiaf.svg';

type Props = {
  type: string | undefined;
  size: number;
  fullType?: boolean;
};

/*
 * wemix$ : 위믹스달러
 * wemix$_dark: 위믹스달러 다크 모드
 * wemix : 위믹스
 * wemix_dark: 위믹스 다크 모드
 * sol : 솔라나
 * usdc
 * dai : 다이
 * busd
 * usdt
 * eth : 이더리움
 * btc : 비트코인
 * xrp : 리플
 * ada : 에이다
 * dot : 폴카닷
 * wbnb
 * klay
 * wallet
 * metamask
 * wonder : wonder dao token
 * g.wonder : governance token
 * wemixfi : wemixfi token
 * kiaf : kiaf token
 * dummy: 없음 토큰
 */

export const IconLogo = ({ type, size, fullType = false }: Props) => {
  const viewIcon = () => {
    switch (type) {
      case 'wemix$': // 위믹스달러
        return <IconWemixDollar width={size} height={size} />;
      case 'wemix$_dark': // 위믹스달러 다크
        return <IconWemixDollarDark width={size} height={size} />;
      case 'wemix': // 위믹스
        return <IconWemix width={size} height={size} />;
      case 'wemix_dark': // 위믹스 다크
        return <IconWemixDark width={size} height={size} />;
      case 'sol': // 솔라나
        return <IconSolana width={size} height={size} />;
      case 'usdc': // usdc
        return <IconUsdc width={size} height={size} />;
      case 'dai': // 다이
        return <IconDai width={size} height={size} />;
      case 'busd': // busd
        return <IconBusd width={size} height={size} />;
      case 'usdt': // usdt
        return <IconUsdt width={size} height={size} />;
      case 'eth': // 이더리움
        return <IconEth width={size} height={size} />;
      case 'btc': // 비트코인
        return <IconBtc width={size} height={size} />;
      case 'xrp': // 리플
        return <IconXrp width={size} height={size} />;
      case 'ada': // 에이다
        return <IconAda width={size} height={size} />;
      case 'dot': // 폴카닷
        return <IconDot width={size} height={size} />;
      case 'wbnb': // wbnb
        return <IconWbnb width={size} height={size} />;
      case 'klay': // klay
        return <IconKlaytn width={size} height={size} />;
      case 'wallet': // wemix-wallet
        return <IconWallet width={size} height={size} />;
      case 'metamask': // meta-mask
        return <IconMetaMask width={size} height={size} />;
      case 'wonder': // wonder dao token
        return fullType ? <IconWonderFull width={size} height={size} /> : <IconWonder width={size} height={size} />;
      case 'g.wonder': // governance token
        return fullType ? <IconGWonderFull width={size} height={size} /> : <IconGWonder width={size} height={size} />;
      case 'wemixfi': // wemixfi token
        return <IconWemixFi width={size} height={size} />;
      case 'kiaf': // kiaf token
        return <IconKiaf width={size} height={size} />;
      case 'placeholder1': //
        return <IconPlaceholder1 width={size} height={size} />;
      case 'placeholder2': //
        return <IconPlaceholder2 width={size} height={size} />;
      default:
        return <IconPlaceholder1 width={size} height={size} />;
    }
  };

  return <>{viewIcon()}</>;
};

IconLogo.defaultProps = {
  fullType: false,
}