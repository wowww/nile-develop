import { ImageLoaderProps } from 'next/image';

export const NileCDNLoader = ({ src }: Partial<ImageLoaderProps>) => {
  return src?.startsWith('http') ? src : `https://file.mir4global.com/nile/resources${src}`;
};
