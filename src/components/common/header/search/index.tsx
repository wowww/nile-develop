import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import { UtilityButton } from '@components/common/utility/button';
import { HTMLAttributes } from 'react';

export type HeaderSearchButtonProps = {
  // nothing
} & HTMLAttributes<HTMLButtonElement>;

export const HeaderSearchButton = (props: HeaderSearchButtonProps) => {
  return (
    <UtilityButton {...props}>
      <Image src="/icons/common/ico_search.svg" loader={NileCDNLoader} width={32} height={32} />
    </UtilityButton>
  );
};
