import styled from '@emotion/styled';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import * as https from 'https';
import { IpfsImage } from 'react-ipfs-image';

export type IpfsFileDownloadProps = {
  provider: 'ipfs' | 'cloudflare';
  contentId: string;
};

export const IpfsFileDownload = ({ contentId, provider }: IpfsFileDownloadProps) => {
  const [response, setResponse] = useState<string>('');
  const [contentType, setContentType] = useState<string>('');

  const request = useCallback(() => {
    return axios.get(`http://localhost:3001/api/ipfs/${contentId}?provider=${provider}`, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }, [provider, contentId]);

  useEffect(() => {
    request().then((result) => {
      console.log('result', result);
    });
  }, [request, setContentType, setResponse]);

  return (
    <Container>
      <IpfsImage hash={contentId} />
    </Container>
  );
};

const Container = styled.div([]);
