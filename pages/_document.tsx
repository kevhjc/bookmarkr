import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
      </Head>
      <body className="bg-white text-white dark:bg-neutral-900 dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
