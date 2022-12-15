import React, {useCallback, useMemo} from 'react';
import Image from "next/image";
import {NileCDNLoader} from "@utils/image/loader";
import styled from "@emotion/styled";
import tw from "twin.macro";

interface TangledMarqueePropsType {
  itemLength: number;
  type: string;
}

export const TangledMarquee: React.FC<TangledMarqueePropsType> = ({ itemLength, type }) => {
  const images: React.ReactElement[] = useMemo(() => ([]), []);

  const imageGenerator = useCallback((idx: number) => {
    for (let i = 1; i <= itemLength; i += 1) {
      images.push(
        <ImageContainer key={`${type}-${i}-${idx}`}>
          <Image src={`/img/tangled/nfts/img_life_${type}${i}.png`} layout="fill" loader={NileCDNLoader}/>
        </ImageContainer>,
      );
    }
    return images;
  }, [images, itemLength, type]);

  const copyEvt = useMemo(() => {
    for (let idx = 0; idx < 2; idx += 1) {
      imageGenerator(idx);
    }
    return images;
  }, [images, imageGenerator]);

  return (
    <Container>
      <Wrapper>
        {copyEvt}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div([
  tw`mt-[40px]`,
  tw`mx-[-20px]`,
  tw`overflow-hidden`,
  tw`md:mt-[48px]`,
  tw`md:mx-[-32px]`,
  tw`xl:mt-[60px]`,
  tw`md:mx-0`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`h-[200px]`,
  tw`md:h-[260px]`,
  tw`xl:h-[282px]`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`block`,
  tw`w-auto`,
  tw`h-full`,
  `aspect-ratio: 1/1`,
  tw`animate-scrollingR`,
]);