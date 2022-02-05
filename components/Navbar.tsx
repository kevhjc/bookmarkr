import { useState, useEffect } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
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
            ? 'dar:text-gray-200 font-medium text-gray-900'
            : 'font-medium text-gray-800 dark:text-gray-300',
          'rounded p-2 px-3 text-gray-900 transition-all hover:bg-blue-100 dark:text-gray-200 dark:hover:bg-blue-700'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  )
}

function LogoNavItem({ href, text }: INavProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-bold leading-snug tracking-tight text-gray-900 dark:text-gray-200'
            : 'font-bold leading-snug tracking-tight text-gray-800 dark:text-gray-300',
          'flex items-center gap-2 rounded p-2 text-gray-900 transition-all hover:bg-blue-100 dark:text-gray-200 dark:hover:bg-blue-700'
        )}
      >
        <Image src="/logo.svg" alt="Bookmarkr Logo" width={20} height={20} />
        {text}
      </a>
    </NextLink>
  )
}

export default function Navbar() {
  const { data: session } = useSession()
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  return (
    <div className="mb-8 flex flex-wrap text-lg">
      <div className="mb-4 w-full px-2 md:w-1/2 lg:w-1/2">
        <div className="md-justify-start flex h-12 items-center justify-center md:justify-start lg:justify-start">
          <nav className="space-x-4 md:block">
            <LogoNavItem href="/" text="Bookmarkr" />
          </nav>
        </div>
      </div>
      <div className="w-full px-2 md:w-1/2 lg:w-1/2">
        <div className="text-grey-dark flex h-12 items-center justify-center md:justify-end lg:justify-end">
          <nav className="space-x-4 md:block">
            <NavItem href="/about" text="About" />
            {!session ? (
              <button
                aria-label="Sign in"
                type="button"
                className="rounded bg-blue-600 p-1 px-3 text-white transition-all hover:bg-blue-700 dark:bg-blue-700 dark:text-gray-200 dark:hover:bg-blue-900"
                onClick={() => signIn('github')}
              >
                Sign in
              </button>
            ) : (
              <button
                aria-label="Sign out"
                type="button"
                className="rounded bg-blue-600 p-1 px-3 text-white transition-all hover:bg-blue-700 dark:bg-blue-700 dark:text-gray-200 dark:hover:bg-blue-900"
                onClick={() => signOut()}
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
