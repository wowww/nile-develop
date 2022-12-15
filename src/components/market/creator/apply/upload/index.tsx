import Image from 'next/image';
import { Upload, UploadFile } from 'antd';
import { useLayoutResize } from '@utils/layout';
import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FileUploadItem } from '@components/market/creator/apply/upload/item';
import { NileCDNLoader } from '@utils/image/loader';
import tw from 'twin.macro';
import { UploadChangeParam } from 'antd/lib/upload';
import { css } from '@emotion/core';
import { ItemRender } from 'antd/lib/upload/interface';
import { useTranslation } from 'next-i18next';

export type FileUploadProps = {
  accept?: string;
  description?: string;
  callback?: (files: UploadFile<any>[]) => void;
};

export const FileUpload = ({ accept, description, callback }: FileUploadProps) => {
  const { t } = useTranslation('common');
  const [files, setFiles] = useState<UploadFile[]>([]);
  const { isTablet } = useLayoutResize();
  const fileIds = useMemo(() => files.map((exist) => exist.uid), [files]);

  const renderItem = useCallback<ItemRender>((originNode, file, fileList, actions) => {
    return (
      <ItemWrapper>
        <FileUploadItem file={file} actions={actions} />
      </ItemWrapper>
    );
  }, []);

  const check = useCallback((file: UploadFile) => {
    // TODO
    return true;
  }, []);

  const onChange = useCallback(({ fileList }: UploadChangeParam) => {
    setFiles(fileList);
  }, [setFiles]);

  useEffect(() => {
    console.table(files);
    if(callback) callback(files);
  }, [callback, files]);

  return (
    <Wrapper>
      {/* TODO: Replace Action */}
      <Uploader
        name="files"
        maxCount={1}
        accept={accept}
        showUploadList={{ showRemoveIcon: true }}
        itemRender={renderItem}
        action={`${process.env.NEXT_PUBLIC_ENV_NILE_APP}/api/image/upload`}
        fileList={files}
        beforeUpload={check}
        onChange={onChange}
      >
        {
          !isTablet ? <UploadButton>File Upload</UploadButton> : (
            <ContentsWrapper>
              <Image src="/icons/common/ico_file_upload.svg" loader={NileCDNLoader} width={60} height={40} />
              <UploadButton>{t('modalJoin.item.5.placeholder')}</UploadButton>
            </ContentsWrapper>
          )
        }
      </Uploader>
      <Description>{description}</Description>
    </Wrapper>
  );
};

FileUpload.defaultProps = {
  accept: undefined,
  description: undefined,
  callback: undefined,
};

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
]);

const Uploader = styled(Upload.Dragger)(({ fileList }) => [
  (fileList?.length ?? 0) > 0 && css`
    &.ant-upload {
      display: none;
    }

    &.ant-upload-list {
      display: block;
    }
  `,
]);

const Description = styled.div([
  tw`text-gray-60`,
]);

const ContentsWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  tw`items-center`,
  tw`gap-2`,
  tw`mt-4`,
]);

const ItemWrapper = styled.div([
  tw`w-full`,
  tw`p-4`,
  tw`border`,
  tw`rounded`,
]);

const UploadButton = styled.div([
  tw`my-2`,
  tw`text-black`,
]);

