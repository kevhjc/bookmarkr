import NextLink from 'next/link'
import cn from 'classnames'

import Container from '../components/Container'

export default function Custom404() {
  return (
    <Container>
      <div className="mx-auto py-12 px-6">
        <h1 className="flex items-center justify-center text-4xl font-black leading-snug tracking-tight">
          404 – Page not found
        </h1>
      </div>
      <div className="mx-auto py-12 px-6">
        <button className="h-12 rounded bg-gray-200 px-10 font-bold transition-all hover:bg-gray-300">
          <NextLink href="/">
            <a>Go home</a>
          </NextLink>
        </button>
      </div>
    </Container>
  )
}
