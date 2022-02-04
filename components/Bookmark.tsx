import useSWR from 'swr'
import axios from 'axios'
import { format } from 'date-fns'
import Link from 'next/link'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export default function Bookmark() {
  const { data: bookmarks } = useSWR('/api/bookmark', fetcher)

  return (
    <div className="mt-4 space-y-8">
      {bookmarks?.map((bookmark: any) => (
        <div className="mx-auto mt-8 w-full transform gap-4 rounded border border-gray-200 bg-gray-50 p-1 duration-300 hover:shadow-sm">
          <div className="px-2 py-2 sm:px-3">
            <h3 className="break-words text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
              <Link href={bookmark.url}>
                <a>{bookmark.url}</a>
              </Link>
            </h3>
            <div className="bt-1 mt-3 flex flex-col border-t pt-2">
              <div>
                <p className="mb-2 max-w-2xl tracking-tight text-gray-700">
                  {bookmark.note}
                </p>
                <p className="max-w-2xl font-mono text-sm tracking-tight text-gray-500">
                  {bookmark.user} –{' '}
                  {format(
                    new Date(bookmark.createdAt),
                    "MMM d, yyyy '/' h:mm bb"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
