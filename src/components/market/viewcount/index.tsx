import styled from '@emotion/styled';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import tw from 'twin.macro';

export type MarketViewCountProps = {
  views: number;
}

export const MarketViewCount = ({ views }: MarketViewCountProps) => {
  return (
    <Wrapper>
      <Image src="/icons/common/ico_watch.svg" loader={NileCDNLoader} width={24} height={24} />
      <Count>{views}</Count>
    </Wrapper>
  );
};

const Wrapper = styled.div([
  tw`flex`,
  tw`gap-2`,
  tw`w-fit`,
  tw`items-center`,
]);

const Count = styled.span([
  tw`text-black dark:text-white`,
  tw`text-xs`,
]);
