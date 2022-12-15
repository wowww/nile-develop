import styled from "@emotion/styled";
import Image from "next/image";
import {NileCDNLoader} from "@utils/image/loader";
import tw from "twin.macro";
import classNames from "classnames";

interface MyPageOwnedListItemProps {
  title: string;
  thumbnail: string;
  isMine?: boolean;
}

export const MyPageOwnedListItem = ({ title, thumbnail, isMine }: MyPageOwnedListItemProps) => {
  return (
    <Container className={classNames({ isMine })}>
      <ImageContainer>
        <Image src={thumbnail} layout="fill" loader={NileCDNLoader} />
      </ImageContainer>
      <Title>{title}</Title>
    </Container>
  );
}

const ImageContainer = styled.div([
  tw`relative`,
  `aspect-ratio: 1/1`,
]);

const Title = styled.strong([
  tw`text-black`,
  tw`text-xs`,
  tw`leading-[20px]`,
  tw`xl:leading-[18px]`,
]);

const Container = styled.div(({ className }) => [
  tw`w-full`,
  tw`flex`,
  tw`flex-col`,
  tw`p-2`,
  tw`gap-2`,
  className?.includes('isMine') && [
    tw`relative`,
    `
      &::before {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #737373;
        content: "";
      }
      &::after {
        position: absolute;
        z-index: 1;
        top: 16px;
        left: 16px;
        display: flex;
        width: 24px;
        height: 24px;
        align-items: center;
        justify-content: center;
        background: #1a1a1a;
        border-radius: 50%;
        color: #fff;
        content: "My";
        font-size: 12px;
        font-weight: bold;
      }
    `,
  ],
]);

MyPageOwnedListItem.defaultProps = {
  isMine: false,
}