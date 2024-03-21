import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db'; // Assuming you have a lib/db.ts module implementing DB queries.

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    const users = await db.query('SELECT * FROM users');
    return res.status(200).json({ success: true, payload: users });
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}