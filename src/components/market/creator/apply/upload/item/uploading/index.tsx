import styled from '@emotion/styled';
import { Button } from '@components';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import tw from 'twin.macro';
import { width } from 'styled-system';

export type FileItemUploadingProps = {
  percent?: number;
  actions: any;
};

export const FileItemUploading = ({ percent, actions }: FileItemUploadingProps) => {
  return (
    <Container>
      <Wrapper>
        <Description>업로드 중...</Description>
        <ProgressBar>
          <Progress width={`${percent}%`} />
        </ProgressBar>
      </Wrapper>
      <Button onClick={() => actions.remove()}>
        <Image src="/icons/common/ico_close.svg" loader={NileCDNLoader} width={24} height={24} />
      </Button>
    </Container>
  );
};

FileItemUploading.defaultProps = {
  percent: 0,
};

const Container = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`gap-8`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`flex-grow`,
  tw`gap-2`,
]);

const Description = styled.span([]);

const ProgressBar = styled.span([
  tw`relative`,
  tw`block`,
  tw`w-full`,
  tw`h-1`,
  tw`bg-gray-80`,
]);

const Progress = styled.span([
  tw`absolute`,
  tw`inset-0`,
  tw`h-full`,
  tw`bg-black`,
  width,
]);
