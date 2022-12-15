import styled from "@emotion/styled";
import tw from "twin.macro";

export const LusVideo = () => {

  return (
    <Container>
      <Title>Story of LUS264</Title>
      <VideoWrapper>
        <iframe src="https://www.youtube.com/embed/fIj7YLJMvKI" title="YouTube video player" height="100%" allowFullScreen />
      </VideoWrapper>
    </Container>
  );
};

const VideoWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`bg-black`,
  tw`h-[180px]`,
  tw`mt-5`,
  tw`md:h-[386px]`,
  tw`md:mt-6`,
  tw`xl:h-[674px]`,
  tw`xl:mt-8`,
  `
    iframe {
      margin: 0 auto;
      aspect-ratio: 1200/674;
    }
  `,
]);

const Title = styled.h3([
  tw`text-2xl`,
  tw`font-header`,
  tw`font-bold`,
  tw`leading-[28px]`,
  tw`md:text-[40px]`,
  tw`md:leading-[1.2]`,
]);

const Container = styled.div([
  tw`w-full`,
  tw`py-[60px]`,
  tw`px-5`,
  tw`md:py-[80px]`,
  tw`md:px-10`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);