import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import cn from 'classnames'

interface INavProps {
  href: string
  text: string
}

function NavItem({ href, text }: INavProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'text-gray-darkest font-medium'
            : 'font-medium text-gray-500',
          'rounded p-2 text-gray-900 transition-all hover:bg-blue-100'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  )
}

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <div className="mb-8 flex flex-wrap">
      <div className="mb-4 w-full px-2 lg:w-1/2">
        <div className="text-grey-dark flex h-12 items-center justify-center lg:justify-start">
          <nav className="space-x-4 md:block">
            <NavItem href="/" text="Bookmarkr" />
          </nav>
        </div>
      </div>
      <div className="w-full px-2 lg:w-1/2">
        <div className="text-grey-dark flex h-12 items-center justify-center lg:justify-end">
          <nav className="space-x-4 md:block">
            <NavItem href="/about" text="About" />
            {!session ? (
              <button
                onClick={() => signIn('github')}
                className="rounded bg-blue-600 p-1 px-3 font-bold text-white transition-all hover:bg-blue-700"
              >
                Sign in
              </button>
            ) : (
              <button
                onClick={() => signOut()}
                className="rounded bg-red-600 p-1 px-3 font-bold text-white transition-all hover:bg-red-700"
              >
                Sign out
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
