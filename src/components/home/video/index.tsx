import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';


export const NileVisual = () => {
  const videoURL = 'https://file.mir4global.com/nile/resources/public/video/nile_main.mp4';

  return (
    <Container>
      <VideoWrapper autoPlay loop muted playsInline>
        <source src={videoURL} type="video/mp4" />
      </VideoWrapper>
    </Container>
  );
};

const Container = styled.div([
  tw`h-auto`,
  tw`pt-[50px]`,
  tw`pb-[70px]`,
  tw`overflow-hidden`,
  tw`md:pt-[92px]`,
  tw`md:pb-[143px]`,
  tw`xl:h-[560px]`,
  tw`xl:p-0`,
]);

const VideoWrapper = styled.video([
  tw`relative`,
  tw`z-10`,
  tw`mx-auto`,
  tw`object-cover`,
  tw`top-0`,
  tw`w-auto`,
  tw`h-[280px]`,
  tw`md:h-[640px]`,
  tw`xl:h-[560px]`,
]);
