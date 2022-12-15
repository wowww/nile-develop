import styled from "@emotion/styled";
import tw from "twin.macro";
import {MypageProfile} from "@components/mypage/top/profile";
import {MypageAsset} from "@components/mypage/top/asset";

export const MypageTop = () => {
  return (
    <Container>
      <MypageProfile />
      <AssetWrapper>
        <MypageAsset />
      </AssetWrapper>
    </Container>
  )
}

const AssetWrapper = styled.div([
  tw`mx-5`,
  tw`md:mx-10`,
  tw`mt-[-80px]`,
  tw`md:mt-[-73px]`,
  tw`xl:mt-[-44px]`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);

const Container = styled.div([
  tw``,
]);