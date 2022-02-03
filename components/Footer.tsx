import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="mx-auto mt-8 mb-8 flex w-full max-w-2xl flex-col items-center justify-center">
      <hr className="border-1 mb-8 w-full border-gray-200" />
      <Link href="https://www.kevc.xyz/">
        <a className="text-gray-500 transition hover:text-gray-800">
          Made with love in Los Angeles, CA
        </a>
      </Link>
    </footer>
  )
}
