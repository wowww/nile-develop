import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import ogs from 'open-graph-scraper';

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

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { url }, method } = req;

  runMiddleware(req, res, cors).then(() => {
    switch (method) {
      case 'GET':
        console.log('url', url);
        ogs({
          url: String(url),
          timeout: 4000,
        }, (error: any, results: any, response: any) => {
          res.send({ results });
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
};

export default handler;
