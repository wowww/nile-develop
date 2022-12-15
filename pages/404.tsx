import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Button } from '@components';
import Link from 'next/link';
import { css } from '@emotion/core';
import { NileCDNLoader } from '@utils/image/loader';

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={NileCDNLoader({ src: '/images/img/img_404.png' })} alt="Page not found pictogram" />
        </ImageWrapper>
        <Title>Page Not Found</Title>
        <Description>The page does not exist or is unavailable.<br />Please check again if the address is correct.</Description>
        <Button marginX="auto" marginY={2} borderWidth={1} borderRadius={6} paddingX={4} paddingY={2} borderColor="gray-20">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`min-h-screen`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  tw`gap-2`,
]);

const ImageWrapper = styled.div([
  tw`h-32 md:h-60 lg:h-72`,
  css`
    img {
      height: 100%;
    }
  `,
]);

const Title = styled.h1([
  tw`text-lg`,
  tw`text-black`,
  tw`font-bold`,
  tw`text-center`,
]);

const Description = styled.p([
  tw`text-sm`,
  tw`text-gray-20`,
  tw`font-normal`,
  tw`text-center`,
]);

export default NotFound;
