import Head from 'next/head'
import Link from 'next/link'
import FadeIn from 'react-fade-in'

import Container from '../components/Container'

export default function About() {
  return (
    <Container>
      <Head>
        <title>About – Bookmarkr</title>
      </Head>
      <FadeIn>
        <div className="container mx-auto py-12 px-6 text-neutral-900 dark:text-neutral-200">
          <h1 className="mb-6 text-center text-4xl font-black leading-snug">
            {`What's Bookmarkr?`}
          </h1>
          <p className="px-6 text-center text-lg">
            {`A social bookmarking message board to share `}
            <span className="rounded bg-yellow-200 p-1 font-mono dark:bg-yellow-500 dark:text-neutral-800">
              hyperlinks
            </span>
            {` to portfolios, tools, etc. from around the web. Sign in with GitHub to post a link!`}
          </p>
          <h1 className="mt-12 mb-2 text-center text-4xl font-black leading-snug">
            {`What's the stack?`}
          </h1>
          <ul className="px-6 text-center text-lg">
            <b>{`Language: `}</b>
            {`TypeScript`}
          </ul>
          <ul className="px-6 text-center text-lg">
            <b>{`Framework: `}</b>
            {`Next.js`}
          </ul>
          <ul className="px-6 text-center text-lg">
            <b>{`Styling: `}</b>
            {`Tailwind CSS`}
          </ul>
          <ul className="px-6 text-center text-lg ">
            <b>{`Database: `}</b>
            {`PlanetScale`}
          </ul>
          <ul className="px-6 text-center text-lg">
            <b>{`ORM: `}</b>
            {`Prisma`}
          </ul>
          <ul className="px-6 text-center text-lg">
            <b>{`Auth: `}</b>
            {`NextAuth.js`}
          </ul>
          <ul className="px-6 text-center text-lg">
            <b>{`Deployment: `}</b>
            {`Vercel`}
          </ul>
          <ul className="px-6 text-center text-lg">
            <b>{`Testing: `}</b>
            {`Cypress`}
          </ul>
          <h1 className="mt-12 mb-2 text-center text-4xl font-black leading-snug">
            {`Who made it?`}
          </h1>
          <p className="mb-6 px-6 text-center text-lg">
            {`Built by `}
            <Link href="https://www.kevc.xyz/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {`Kevin`}
              </a>
            </Link>
            {' ✌️'}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
