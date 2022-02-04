import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function assetHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  if (method === 'GET') {
    try {
      const bookmarks = await prisma.bookmark.findMany({
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      })
      res.status(200).json(bookmarks)
    } catch (e) {
      console.error('Request error', e)
      res.status(500).json({ error: 'Error fetching bookmarks' })
    }
  }
}
