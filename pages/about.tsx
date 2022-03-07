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
        <div className="container px-6 py-12 mx-auto text-neutral-900 dark:text-neutral-200">
          <h1 className="mb-2 text-4xl font-black leading-snug text-center">
            {`What's Bookmarkr?`}
          </h1>
          <p className="px-6 text-lg text-center">
            {`A social bookmarking message board to share `}
            <span className="p-1 font-mono bg-yellow-200 rounded dark:bg-yellow-500 dark:text-neutral-800">
              hyperlinks
            </span>
            {` to portfolios, tools, etc. from around the web. Sign in with GitHub to post a link!`}
          </p>
          <h1 className="mt-12 mb-2 text-4xl font-black leading-snug text-center">
            {`What's the stack?`}
          </h1>
          <ul className="px-6 text-lg text-center">
            <b>{`Language: `}</b>
            {`TypeScript`}
          </ul>
          <ul className="px-6 text-lg text-center">
            <b>{`Framework: `}</b>
            {`Next.js`}
          </ul>
          <ul className="px-6 text-lg text-center">
            <b>{`Styling: `}</b>
            {`Tailwind CSS`}
          </ul>
          <ul className="px-6 text-lg text-center ">
            <b>{`Database: `}</b>
            {`PlanetScale`}
          </ul>
          <ul className="px-6 text-lg text-center">
            <b>{`ORM: `}</b>
            {`Prisma`}
          </ul>
          <ul className="px-6 text-lg text-center">
            <b>{`Auth: `}</b>
            {`NextAuth.js`}
          </ul>
          <ul className="px-6 text-lg text-center">
            <b>{`Deployment: `}</b>
            {`Vercel`}
          </ul>
          <ul className="px-6 text-lg text-center">
            <b>{`Testing: `}</b>
            {`Cypress`}
          </ul>
          <h1 className="mt-12 mb-2 text-4xl font-black leading-snug text-center">
            {`Who made it?`}
          </h1>
          <p className="px-6 mb-6 text-lg text-center">
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
