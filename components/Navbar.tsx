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

function LogoNavItem({ href, text }: INavProps) {
  return (
    <NextLink href={href}>
      <a
        className={
          'flex items-center gap-2 rounded p-1 px-2 font-bold text-gray-900 transition-all hover:bg-blue-100 dark:text-gray-200 dark:hover:bg-blue-700'
        }
      >
        <Image src="/logo.svg" alt="Bookmarkr Logo" width={20} height={20} />
        {text}
      </a>
    </NextLink>
  )
}

function NavItem({ href, text }: INavProps) {
  return (
    <NextLink href={href}>
      <a
        className={
          'rounded p-2 px-2 font-medium text-gray-900 transition-all hover:bg-blue-100 dark:text-gray-200 dark:hover:bg-blue-700'
        }
      >
        <span>{text}</span>
      </a>
    </NextLink>
  )
}

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <div className="mb-8 flex flex-wrap text-lg">
      <div className="mb-4 w-full md:w-1/2 lg:w-1/2">
        <div className="md-justify-start flex h-12 items-center justify-center md:justify-start lg:justify-start">
          <nav className="space-x-4 md:block">
            <LogoNavItem href="/" text="Bookmarkr" />
          </nav>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="text-grey-dark flex h-12 items-center justify-center md:justify-end lg:justify-end">
          <nav className="space-x-4 md:block">
            <NavItem href="/about" text="About" />
            {!session ? (
              <a
                aria-label="Sign in"
                className={
                  'cursor-pointer gap-2 rounded bg-blue-500 p-2 px-2 font-medium text-white transition-all hover:bg-blue-700 hover:text-white dark:text-gray-200 dark:hover:bg-blue-700'
                }
                onClick={() => signIn('github')}
              >
                Sign in
              </a>
            ) : (
              <a
                aria-label="Sign out"
                className={
                  'cursor-pointer gap-2 rounded p-2 px-2 font-medium text-gray-900 transition-all hover:bg-red-100 dark:text-gray-200 dark:hover:bg-red-600'
                }
                onClick={() => signOut()}
              >
                Sign out
              </a>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
