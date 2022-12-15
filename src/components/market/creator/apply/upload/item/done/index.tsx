import styled from '@emotion/styled';
import Image from 'next/image';
import { Button } from '@components';
import { NileCDNLoader } from '@utils/image/loader';
import tw from 'twin.macro';

import IconFilePng from '@/assets/icons/common/filetype/ico_file_png.svg';
import IconFilePdf from '@/assets/icons/common/filetype/ico_file_pdf.svg';
import IconFileJpeg from '@/assets/icons/common/filetype/ico_file_jpeg.svg';
import {ReactElement, useMemo} from "react";

export type FileItemUploadDoneProps = {
  name?: string;
  size?: number;
  actions: any;
};

type FormatIconType = {
  [index: string]: ReactElement,
  png: ReactElement,
  pdf: ReactElement,
  jpg: ReactElement,
  jpeg: ReactElement,
}

const FormatIcon: FormatIconType = {
  png: <IconFilePng />,
  pdf: <IconFilePdf />,
  jpg: <IconFileJpeg />,
  jpeg: <IconFileJpeg />,
};

export const FileItemUploadDone = ({ name, size, actions }: FileItemUploadDoneProps) => {

  const checkFileType = useMemo(() => {
    const type = name?.slice(Number(name?.indexOf('.')) + 1);
    if(type) {
      return FormatIcon[type];
    }
    return false;
  }, [name])

  return (
    <Container>
      <FileInfo>
        {checkFileType}
        <Wrapper>
          <FileName>{name}</FileName>
          <FileSize>{size}</FileSize>
        </Wrapper>
      </FileInfo>
      <Button onClick={() => actions.remove()}>
        <Image src="/icons/common/ico_close.svg" loader={NileCDNLoader} width={24} height={24} />
      </Button>
    </Container>
  );
};

FileItemUploadDone.defaultProps = {
  name: undefined,
  size: 0,
}

const Container = styled.div([
  tw`flex`,
  tw`justify-between`,
]);

const FileInfo = styled.div([
  tw`flex`,
  tw`gap-[20px]`,
  tw`items-center`,
])

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const FileName = styled.span([
  tw`text-black`,
  tw`text-sm`,
]);

const FileSize = styled.span([
  tw`text-sm`,
  tw`text-gray-60`,
]);
