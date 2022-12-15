import Nft from '@/models/nile/market/nft';
import { MarketNftItemStatusType } from '@components/market/nft/item/status';
import styled from '@emotion/styled';
import { MarketCountdownText } from '@components/market/countdown/text';
import tw from 'twin.macro';
import { Button } from 'antd';

export type MarketNftCoverPurchaseProps = {
  product: Nft;
  status: MarketNftItemStatusType;
};

export const MarketNftCoverPurchase = ({ product, status }: MarketNftCoverPurchaseProps) => {
  return (
    <Wrapper>
      <Divider bold />
      <SectionWrapper>
        <Section>
          <SectionTitle>Starting Bid</SectionTitle>
          <SectionText>{product.price}<SectionUnit>WEMIX$</SectionUnit></SectionText>
        </Section>
        <Divider className="flex md:hidden" />
        <Section>
          <SectionTitle>Auction Starts In</SectionTitle>
          <SectionText><MarketCountdownText expireTime={30} /></SectionText>
        </Section>
      </SectionWrapper>
      <Divider />
      <Button>Bid history</Button>
      <EtcInformation>
        KST 2022.03.02 17:00 OPEN
      </EtcInformation>
    </Wrapper>
  );
};

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-1`,
]);

const SectionWrapper = styled.div([
  tw`flex`,
  tw`flex-col md:flex-row`,
]);

const Section = styled.dl([
  tw`flex`,
  tw`flex-col`,
  tw`flex-1`,
  tw`gap-2`,
  tw`mt-3`,
]);

const SectionTitle = styled.dt([
  tw`flex`,
  tw`flex-col`,
  tw`text-gray-60`,
  tw`text-xs`,
  tw`gap-1`,
  tw`font-normal`,
]);

const SectionText = styled.dd([
  tw`font-bold`,
  tw`text-black`,
  tw`text-xl`,
]);

const SectionUnit = styled.span([
  tw`mx-1`,
  tw`text-sm`,
  tw`font-normal`,
]);

const Divider = styled.hr<{ bold?: boolean }>(({ bold }) => [
  tw`border-gray-80`,
  bold && tw`border-black`,
]);

const EtcInformation = styled.span([
  tw`text-right`,
  tw`text-gray-60`,
  tw`text-xs`,
  tw`float-right`,
]);
