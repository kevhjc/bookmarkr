import Head from 'next/head'

import Container from '../components/Container'
import Submit from '../components/Submit'
import Bookmark from '../components/Bookmark'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Bookmarkr</title>
      </Head>
      <Submit />
      <Bookmark />
    </Container>
  )
}
