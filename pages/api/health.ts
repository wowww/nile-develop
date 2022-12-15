import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.end(JSON.stringify({
    uptime: process.uptime(),
    message: 'ok',
    timestamp: Date.now(),
  }));
}