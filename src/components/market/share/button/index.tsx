import { Button } from '@components';
import { useRouter } from 'next/router';
import { MarketShareDropdown } from '@components/market/share/dropdown';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';

export type MarketShareButtonProps = {
  type: 'icon' | 'text';
};

export const MarketShareButton = ({ type }: MarketShareButtonProps) => {
  const { pathname } = useRouter();

  return (
    <MarketShareDropdown path={pathname}>
      <Button>{type === 'text' ? 'Share' : <Image src="/icons/common/ico_share.svg" loader={NileCDNLoader} width={24} height={24} />}</Button>
    </MarketShareDropdown>
  );
};
