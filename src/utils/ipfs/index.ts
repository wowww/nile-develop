import axios from 'axios';
import { useCallback } from 'react';

export const useIpfs = () => {
  const server = axios.create({
    baseURL: 'https://ipfs.io/ipfs',
  });

  const fetcher = useCallback((url) => server.get(url).then(({ data }) => data), [server]);

  const scheme = 'ipfs://';

  const getData = useCallback((uri) => {
    const resourceId = uri.replace(scheme, '');
    return server.get(`/${resourceId}`);
  }, [server]);

  return {
    getData,
  };
};
