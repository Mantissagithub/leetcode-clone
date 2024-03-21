import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'POST') {
    try {
      const newProblem = req.body;
      const createdProblemId = await db.insertOne('problems', newProblem);
      return res.status(201).json({ success: true, id: createdProblemId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to create problem.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}