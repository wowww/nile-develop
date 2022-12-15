import { DaoSection } from '@components/common/header/mypage/section/dao';
import { NftSection } from '@components/common/header/mypage/section/nft';
import { PapyrusSection } from '@components/common/header/mypage/section/papyrus';

import styled from '@emotion/styled';
import tw from 'twin.macro';

export type HeaderMypageInfoProps = {
  // TODO
};

export const HeaderMypageInfo = (props: HeaderMypageInfoProps) => {
  return (
    <Contents>
      <ConnectTime>2022-02-02 17:00 Connected wallet</ConnectTime>
      <DaoSection />
      <NftSection />
      <PapyrusSection />
    </Contents>
  );
};

HeaderMypageInfo.defaultProps = {
  // TODO
};

const Contents = styled.div([
  tw`px-2.5`,
]);

const ConnectTime = styled.p([
  tw`py-2`,
  tw`text-xs`,
  tw`text-gray-60`,
  tw`text-right`,
]);