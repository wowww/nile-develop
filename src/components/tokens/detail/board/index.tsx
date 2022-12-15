import {TagData} from "@components/tagdata";
import styled from "@emotion/styled";
import tw from "twin.macro";

interface InfoItemProps {
  name: string;
  figure: string;
  fluctuationRate: number;
}

export const TokensDetailPriceBoard = () => {
  const infoList: InfoItemProps[] = [
    {
      name: 'Market Cap',
      figure: '$1.66B',
      fluctuationRate: 9.66,
    },
    {
      name: 'Transaction 24h',
      figure: '$1.66B',
      fluctuationRate: -9.66,
    },
    {
      name: 'Volume 24h',
      figure: '$146.46M',
      fluctuationRate: 0,
    },
    {
      name: 'Volume 7d',
      figure: '$875.31M',
      fluctuationRate: 9.66,
    },
  ];

  return (
    <Container>
      <Top>
        <TotalAmount>$258.09 </TotalAmount>
        <TagData number={9.66} format="%" showSign backgroundType theme="light"/>
      </Top>
      <List>
        {infoList.map((item) => (
          <ListItem key={item.name}>
            <InfoName>{item.name}</InfoName>
            <Amount>{item.figure}</Amount>
            <TagData number={item.fluctuationRate} format="%" showSign backgroundType theme="light" />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const TotalAmount = styled.strong([
  tw`font-bold`,
  tw`text-2xl`,
  tw`leading-[100%]`,
  tw`text-black`,
  tw`md:text-[28px]`,
  tw`xl:text-2xl`,
]);

const Top = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`p-5`,
  tw`gap-2`,
  tw`md:flex-col`,
  tw`md:items-start`,
  tw`md:gap-3`,
  tw`md:py-6`,
  tw`md:py-5`,
  tw`xl:gap-2`,
]);

const Container = styled.div([
  tw`w-full`,
  tw`h-fit`,
  tw`border`,
  tw`border-gray-80`,
  tw`flex-shrink-0`,
  tw`box-border`,
  tw`md:w-[260px]`,
  tw`xl:w-[264px]`,
]);

const List = styled.ul([
  tw`w-full`,
  tw`py-6`,
  tw`px-5`,
  tw`grid`,
  tw`grid-cols-2`,
  tw`gap-5`,
]);

const ListItem = styled.li([
  tw`w-full`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`md:gap-3`,
]);

const InfoName = styled.span([
  tw`text-xs`,
  tw`text-gray-60`,
  tw`leading-[100%]`,
]);

const Amount = styled.strong([
  tw`font-bold`,
  tw`text-black`,
  tw`text-base`,
  tw`md:text-xl`,
  tw`xl:text-base`,
]);