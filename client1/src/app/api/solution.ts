import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'PUT') {
    const updatedSolution = req.body;
    try {
      await db.updateOne('solutions', updatedSolution);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to update solution.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}