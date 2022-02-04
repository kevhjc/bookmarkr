import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await addBookmark(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}

async function addBookmark(req: NextApiRequest, res: NextApiResponse) {
  const { name, url, note } = req.body
  try {
    const result = await prisma.bookmark.create({
      data: {
        user: name,
        url: url,
        note: note,
      },
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error adding bookmark to feed' })
  }
}
