import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    const admins = await db.query('SELECT * FROM admins WHERE role = \'superadmin\'');
    return res.status(200).json({ success: true, payload: admins });
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}