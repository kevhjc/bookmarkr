import { ComponentProps, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'
import cn from 'classnames'

import { BookmarkIcon } from '@heroicons/react/outline'

import Footer from '../components/Footer'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'text-gray-darkest font-medium'
            : 'font-medium text-gray-500',
          'rounded-lg p-2 text-gray-900 transition-all hover:bg-blue-100'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  )
}

function SignUp({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'text-gray-darkest font-medium'
            : 'bg-blue-600 font-medium text-white',
          'rounded-lg p-2 text-gray-900 transition-all hover:bg-blue-700'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  )
}

export default function Container(props) {
  const { children } = props
  const router = useRouter()
  const meta = {
    title: 'Bookmarkr',
    description: `Social Bookmarking`,
    image: '',
    type: 'website',
  }

  return (
    <div className="container mx-auto min-w-[500px] max-w-[800px] p-8">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta property="og:url" content={`///${router.asPath}`} /> */}
        {/* <link rel="canonical" href={`///${router.asPath}`} /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bookmarkr" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <div className="mb-8 flex">
        <div className="mb-4 w-full px-2 lg:w-1/2">
          <div className="text-grey-dark flex h-12 items-center justify-start">
            <nav className="space-x-4 md:block">
              <NavItem href="/" text="Bookmarkr" />
            </nav>
          </div>
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <div className="text-grey-dark flex h-12 items-center justify-end">
            <nav className="space-x-4 md:block">
              <NavItem href="/about" text="About" />
              <SignUp href="#" text="Sign out" />
            </nav>
          </div>
        </div>
      </div>
      <main id="skip" className="flex flex-col justify-center">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
