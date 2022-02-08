import Head from 'next/head'
import FadeIn from 'react-fade-in'

import Container from '../components/Container'
import Submit from '../components/Submit'
import Bookmark from '../components/Bookmark'

export default function Home() {
  const meta = {
    title: 'Bookmarkr',
  }

  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <FadeIn>
        <Submit />
        <Bookmark />
      </FadeIn>
    </Container>
  )
}
