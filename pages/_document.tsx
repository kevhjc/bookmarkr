import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Bookmarkr',
    description: `Social Bookmarking`,
    image: 'https://bookmarkr.link/static/images/banner.png',
    type: 'website',
  }

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:site_name" content="Bookmarkr" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <body className="bg-white text-white dark:bg-neutral-900 dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
