import Head from 'next/head'

import Container from '../components/Container'
import Submit from '../components/Submit'
import Bookmark from '../components/Bookmark'

export default function Home() {
  const meta = {
    title: 'Bookmarkr',
    description: `Social Bookmarking`,
    type: 'website',
  }

  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
        <link href="../public/favicon.ico" rel="shortcut icon" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content="Bookmarkr" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <Submit />
      <Bookmark />
    </Container>
  )
}
