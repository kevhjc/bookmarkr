import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Layout from '../components/Layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
