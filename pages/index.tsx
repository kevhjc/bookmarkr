import { Fragment } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Container from '../components/Container'
import Submit from '../components/Submit'
import Bookmark from '../components/Bookmark'

export default function Home() {
  const { data: session } = useSession()
  const meta = {
    title: 'Bookmarkr',
    description: `Social Bookmarking`,
    image: '',
    type: 'website',
  }

  return (
    <Container>
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
      <Submit />
      <Bookmark />
    </Container>
  )
}
