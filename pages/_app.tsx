import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { createClient } from '@liveblocks/client'
import { LiveblocksProvider } from '@liveblocks/react'

import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import '../styles/global.css'

const client = createClient({
  publicApiKey: 'pk_live_RXQOl5ozctxElQPZuOzQ8nTM',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <LiveblocksProvider client={client}>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </LiveblocksProvider>
    </SessionProvider>
  )
}
