import Link from 'next/link'

export default function Bookmark() {
  return (
    <>
      <div className="container mx-auto mt-8 transform gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://www.joshwcomeau.com/shadow-palette/">
              <a>https://www.joshwcomeau.com/shadow-palette/</a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            Create a set of lush, realistic CSS shadows.
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #tool
              </span>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #css
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://www.wallpaper.com/design/apple-park-behind-the-scenes-design-team-interview">
              <a>
                https://www.wallpaper.com/design/apple-park-behind-the-scenes-design-team-interview
              </a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            Inside Apple Park: first look at the design team shaping the future
            of tech
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #apple
              </span>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #office
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
