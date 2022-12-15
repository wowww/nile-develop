import Link from 'next/link';
import Image from 'next/image';
import { FavoriteToggle } from "@components/market/favorite";
import { useCallback } from "react";
import styled from "@emotion/styled";
import tw from 'twin.macro';
import { NileCDNLoader } from "@utils/image/loader";

interface NftFavoriteCardsProps {
  title: string;
  link: string;
  img: string;
  count: number;
  isLike?: boolean;
  showCount?: boolean;
}

/* 22.10.11 수정: isCount prop 제거 */
export const NftFavoriteCards = ({ title, link, img, count, showCount, isLike }: NftFavoriteCardsProps) => {
  const onChangeFavorite = useCallback((active: boolean) => {
    // TODO
  }, []);

  return (
    <Link href={link}>
      <Container>
        <ImageContainer>
          <Image src={img} width="100%" height="100%" layout="responsive" loader={NileCDNLoader}/>
        </ImageContainer>
        <Wrapper>
          <Title>{title}</Title>
          <FavoriteToggle count={count} active={isLike} showCount={showCount} direction="horizontal" onChange={onChangeFavorite}/>
        </Wrapper>
      </Container>
    </Link>
  );
};

NftFavoriteCards.defaultProps = {
  isLike: false,
  showCount: false,
}

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`cursor-pointer`,
  tw`w-full`,
  tw`gap-[16px]`,
]);

const ImageContainer = styled.div([
  tw`w-full`,
  `
    aspect-ratio: 1 / 1;
  `,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
]);

const Title = styled.h3([
  tw`w-[75%]`,
  tw`text-sm`,
  tw`md:text-base`,
  tw`overflow-hidden`,
  `
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
  `,
]);