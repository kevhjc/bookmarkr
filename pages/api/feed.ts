import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function getFeed(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const bookmarks = await prisma.bookmark.findMany({
          orderBy: [
            {
              createdAt: 'desc',
            },
          ],
        })
        return res.status(200).json(bookmarks)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error fetching bookmarks' })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} not allowed`)
      break
  }
}
