import Image from 'next/image'
import Link from 'next/link'
import prisma from 'lib/prisma'
import useSWR from 'swr'
import axios from 'axios'
import { format } from 'date-fns'

export default function Bookmark() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data: bookmarks, error } = useSWR('/api/bookmark', fetcher)

  if (!bookmarks)
    return (
      <div className="mx-auto py-12 px-6">
        <h1 className="flex items-center justify-center text-2xl font-black leading-snug dark:text-gray-200">
          Loading...
        </h1>
      </div>
    )
  if (error)
    return (
      <div className="mx-auto py-12 px-6">
        <h1 className="flex items-center justify-center text-2xl font-black leading-snug dark:text-gray-200">
          Uh oh, something went wrong
        </h1>
      </div>
    )
  return (
    <div className="mt-4 space-y-8">
      {bookmarks?.map((bookmark: any) => (
        <div
          key={bookmark.id}
          className="mx-auto mt-8 w-full transform gap-4 whitespace-normal rounded border border-gray-200 bg-gray-50 p-1 duration-300 hover:shadow-sm dark:border-gray-600 dark:bg-gray-700"
        >
          <div className="px-2 py-2 sm:px-3">
            <h3>
              <Link href={bookmark.url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-lg font-medium text-blue-500 underline hover:no-underline dark:text-gray-200"
                >
                  {bookmark.url}
                </a>
              </Link>
            </h3>
            <div className="mt-3 flex flex-row border-t pt-2 dark:border-gray-600">
              <p className="mb-2 max-w-2xl tracking-tight text-gray-700 dark:text-gray-200">
                {bookmark.note}
              </p>
            </div>
            <div className="max-w-2x1 flex items-center gap-2 font-mono text-sm tracking-tight text-gray-500 dark:text-gray-400">
              {bookmark.image ? (
                <Image
                  alt="User Avatar"
                  height={22}
                  width={22}
                  src={bookmark.image}
                  className="rounded-full"
                />
              ) : null}
              {bookmark.user} –{' '}
              {format(new Date(bookmark.createdAt), "MMM d, yyyy '/' h:mm bb")}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
