import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'

interface IContainerProps {
  title?: string
  children: JSX.Element[] | JSX.Element
}

export default function Container(props: IContainerProps) {
  const { children } = props
  const router = useRouter()

  const meta = {
    title: 'Bookmarkr',
    description: `Social Bookmarking`,
    image: 'https://www.bookmarkr.link/banner.png',
    type: 'website',
  }

  return (
    <div className="container max-w-3xl p-8 mx-auto mb-10">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.bookmarkr.link${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.bookmarkr.link${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bookmarkr" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
