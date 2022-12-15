import {useEffect, useMemo, useState} from 'react';

import Image from 'next/image';
import {NileCDNLoader} from "@utils/image/loader";

import styled from "@emotion/styled";
import tw from "twin.macro";
import classNames from "classnames";

export const TangledJennis = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const DELAY = 1000;

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === 6) {
          return 0;
        }
        return prev + 1;
      });
    }, DELAY);

    return () => clearInterval(timer);
  }, []);

  const imageGenerator = useMemo(() => {
    const images: React.ReactElement[] = [];
    for (let i = 1; i <= 7; i += 1) {
      images.push(
        <ImageContainer key={i} className={classNames({ 'active': i === activeIndex })}>
          <Image src={`/img/tangled/nfts/img_tangled_jennis_${i}.png`} layout="fill" width="100%" height="100%" loader={NileCDNLoader}/>
        </ImageContainer>,
      );
    }
    return images;
  }, [activeIndex]);

  return (
    <Container>
      {imageGenerator}
    </Container>
  );
};

const ImageContainer = styled.div(({ className }) => [
  tw`relative`,
  tw`w-[200px]`,
  tw`h-[200px]`,
  tw`md:w-[260px]`,
  tw`md:h-[260px]`,
  tw`xl:w-[282px]`,
  tw`xl:h-[282px]`,
  tw`hidden`,
  tw`mx-auto`,
  className?.includes('active') && [
    tw`block`,
    `
      animation: bounce 1s infinite linear;

      @keyframes bounce {
        0% { transform: scale(0.7); }
        8% { transform: scale(115%); }
        14% { transform: scale(1); }
        to { transform: scale(1); }
      }
    `,
  ],
]);

const Container = styled.div([
  tw`mt-10`,
  tw`md:mt-11`,
  tw`xl:mt-[60px]`,
]);