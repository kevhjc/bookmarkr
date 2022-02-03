import Link from 'next/link'

export default function Bookmark() {
  return (
    <>
      <div className="container mx-auto mt-8 transform gap-4 rounded border border-gray-200 bg-gray-50 p-1 duration-300 hover:shadow-sm">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://www.example.com/">
              <a>https://www.example.com/</a>
            </Link>
          </h3>
          <div className="bt-1 mt-3 flex flex-col border-t pt-2">
            <div>
              <p className="max-w-2xl font-mono text-sm tracking-tight text-gray-500">
                This is an example note.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
