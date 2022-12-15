import Image from 'next/image';
import styled from "@emotion/styled";
import tw from "twin.macro";
import {NileCDNLoader} from "@utils/image/loader";

interface obj {
  image: string;
  title: string;
  cont: string;
}

interface Props {
  data: obj[];
}

export const LifeCommunityCard = ({ data }: Props) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Card key={item.title}>
            <ImageContainer>
              <Image src={item.image} alt="" layout="fill" loader={NileCDNLoader} />
            </ImageContainer>
            <Text>
              <Title>{item.title}</Title>
              <Desc>{item.cont}</Desc>
            </Text>
          </Card>
        );
      })}
    </Container>
  );
};

const Title = styled.strong([
  tw`text-xl`,
  tw`leading-[1.4]`,
  tw`font-bold`,
  `
    width: fit-content;
    background: linear-gradient(90deg, #1271ff 0%, #b338ff 74.1%, #e1b0ff 106.17%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  tw`md:text-[22px]`,
  tw`md:leading-[30px]`,
  tw`xl:text-xl`,
]);

const Desc = styled.p([
  tw`text-white`,
  tw`text-sm`,
  tw`leading-[22px]`,
  tw`md:text-base`,
  tw`md:leading-[1.5]`,
  tw`xl:text-sm`,
  tw`xl:leading-[22px]`,
]);

const Text = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
  tw`justify-center`,
  tw`bg-[rgba(255, 255, 255, 0.08)]`,
  tw`py-6`,
  tw`px-5`,
  tw`md:py-0`,
  tw`md:px-10`,
  tw`md:px-[100px]`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-auto`,
  tw`h-auto`,
  `
    flex: 0 0 auto;
    aspect-ratio: 9/6.75;
  `,
  tw`md:w-[340px]`,
  tw`md:w-[280px]`,
  `
    @media (min-width: 768px) {
      flex: 0 0 340px;
    }
  `,
  tw`xl:w-[480px]`,
  tw`xl:h-[320px]`,
  `
    @media (min-width: 768px) {
      flex: 0 0 280px;
    }
  `,
]);

const Card = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`overflow-hidden`,
  tw`border`,
  tw`border-[#FFFFFF30]`,
  tw`rounded-[16px]`,
  `word-break: keep-all`,
  tw`md:flex-row`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-5`,
  tw`mt-10`,
  tw`xl:gap-8`,
  tw`xl:mt-[60px]`,
]);