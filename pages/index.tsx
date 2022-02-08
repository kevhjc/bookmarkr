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
    <FadeIn>
      <Container>
        <Head>
          <title>{meta.title}</title>
        </Head>
        <Submit />
        <Bookmark />
      </Container>
    </FadeIn>
  )
}
