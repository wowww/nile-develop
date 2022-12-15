import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import axios from 'axios';

const cors = Cors({
  methods: ['GET'],
});

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: (...params: any[]) => any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

const IpfsServiceProvider = (provider?: string | string[]) => ({
  ipfs: {
    url: 'https://ipfs.io/ipfs',
  },
  cloudflare: {
    url: 'https://cloudflare-ipfs.com/ipfs',
  },
})[`${provider}`];

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { id, provider }, method } = req;
  const serviceProvider = IpfsServiceProvider(provider);

  runMiddleware(req, res, cors).then(() => {
    if (!serviceProvider) {
      res.status(405).end(`Provider ${provider} Not Allowed`);
      return;
    }

    const request = () => {
      return axios.get(`${serviceProvider?.url}/${id}`);
    };

    switch (method) {
      case 'GET':
        request().then((response) => {
          res.status(response.status).send(response.data);
        }).catch((error) => {
          console.error(error);
          res.status(500).end(error.code);
        });
        break;
      case 'OPTION':
        res.status(200);
        break;
      default:
        res.setHeader('Allow', ['GET', 'OPTION']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  });
}

export default handler;
