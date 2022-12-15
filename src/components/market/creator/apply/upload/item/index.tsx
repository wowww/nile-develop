import { FileItemUploadDone, FileItemUploadDoneProps } from '@components/market/creator/apply/upload/item/done';
import { FileItemUploading, FileItemUploadingProps } from '@components/market/creator/apply/upload/item/uploading';
import { UploadFile } from 'antd';
import { ItemRender } from 'antd/lib/upload/interface';

export type FileUploadItemProps = {
  file: UploadFile;
  actions: any;
} & FileItemUploadDoneProps
  & FileItemUploadingProps;

export const FileUploadItem = ({ file, actions }: FileUploadItemProps) => {
  switch (file.status) {
    case 'done':
      return <FileItemUploadDone name={file.name} size={file.size} actions={actions} />;
    default:
      return <FileItemUploading percent={file.percent} actions={actions} />;
  }
};
