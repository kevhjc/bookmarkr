import NextLink from 'next/link'

import Container from '../components/Container'

export default function Custom404() {
  return (
    <Container>
      <div className="mx-auto py-12 px-6">
        <h1 className="flex items-center justify-center text-4xl font-black leading-snug tracking-tight text-neutral-900 dark:text-neutral-200">
          404 – Page not found
        </h1>
      </div>
      <div className="mx-auto py-12 px-6">
        <button className="h-12 rounded bg-neutral-200 px-10 font-bold text-neutral-900 transition-all hover:bg-neutral-300 dark:bg-neutral-500 dark:text-neutral-200 dark:hover:bg-neutral-600">
          <NextLink href="/">
            <a>Go home</a>
          </NextLink>
        </button>
      </div>
    </Container>
  )
}
