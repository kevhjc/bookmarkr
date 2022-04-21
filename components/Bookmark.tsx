import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'
import FadeIn from 'react-fade-in'
import { format } from 'date-fns'

export default function Bookmark() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data: bookmarks, error } = useSWR('/api/bookmark', fetcher)

  const [bookmarkNum, setBookmarkNum] = useState<number>(10)

  const handleLoadMoreBookmarks = () => {
    setBookmarkNum((prevBookmarkNum) => prevBookmarkNum + 10)
  }

  if (!bookmarks)
    return (
      <FadeIn delay={200}>
        <div className="px-6 py-12 mx-auto">
          <h1 className="flex items-center justify-center text-2xl font-black leading-snug text-neutral-900 dark:text-neutral-200">
            Loading...
          </h1>
        </div>
      </FadeIn>
    )
  if (error)
    return (
      <FadeIn delay={200}>
        <div className="px-6 py-12 mx-auto">
          <h1 className="flex items-center justify-center text-2xl font-black leading-snug text-neutral-900 dark:text-neutral-200">
            Uh oh, something went wrong
          </h1>
        </div>
      </FadeIn>
    )
  return (
    <FadeIn>
      <div className="mt-4 space-y-8">
        {bookmarks?.slice(0, bookmarkNum).map((bookmark: any) => (
          <div
            key={bookmark.id}
            className="w-full gap-4 p-1 mx-auto mt-8 whitespace-normal transition-all duration-300 transform border rounded-lg border-neutral-200 bg-neutral-50 hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800/40"
          >
            <div className="px-4 py-2 mt-2">
              <h3>
                <Link href={bookmark.url}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-500 underline break-words hover:no-underline dark:text-blue-400"
                  >
                    {bookmark.url}
                  </a>
                </Link>
              </h3>
              <div className="flex flex-row pt-2 my-2">
                <p className="max-w-2xl mb-2 tracking-tight text-neutral-700 dark:text-neutral-200">
                  {bookmark.note}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 pb-2 font-mono text-sm tracking-tight border-t max-w-2x1 text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                {bookmark.image && (
                  <Image
                    alt="User Avatar"
                    height="22"
                    width="22"
                    src={bookmark.image}
                    className="rounded-full"
                  />
                )}
                {bookmark.user}
                {` – `}
                {format(new Date(bookmark.createdAt), 'MMM d, yyyy')}
              </div>
            </div>
          </div>
        ))}
        {bookmarkNum < bookmarks.length && (
          <div className="flex justify-center">
            <button
              className="p-2 px-6 text-sm font-medium transition-all rounded cursor-pointer bg-neutral-200 text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
              onClick={handleLoadMoreBookmarks}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </FadeIn>
  )
}
