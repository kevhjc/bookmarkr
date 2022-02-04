import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/Container'

export default function About() {
  return (
    <Container>
      <Head>
        <title>About – Bookmarkr</title>
      </Head>
      <div className="container mx-auto py-12 px-6">
        <h1 className="mb-6 text-center text-4xl font-black leading-snug tracking-tight">
          {`What's Bookmarkr?`}
        </h1>
        <p className="px-6 text-center text-lg text-gray-700">
          {`A social bookmarking message board to share `}
          <span className="rounded bg-yellow-200 p-1 font-mono">
            hyperlinks
          </span>
          {` to portfolios, tools, etc. from around the web. Sign in with GitHub to get started!`}
        </p>
        <h1 className="mt-12 mb-2 text-center text-4xl font-black leading-snug tracking-tight">
          {`What's the Stack?`}
        </h1>
        <ul className="px-6 text-center text-lg text-gray-700">
          <b>{`Language: `}</b>
          {`TypeScript`}
        </ul>
        <ul className="px-6 text-center text-lg text-gray-700">
          <b>{`Framework: `}</b>
          {`Next.js`}
        </ul>
        <ul className="px-6 text-center text-lg text-gray-700">
          <b>{`Styling: `}</b>
          {`Tailwind CSS`}
        </ul>
        <ul className="px-6 text-center text-lg text-gray-700">
          <b>{`Database: `}</b>
          {`PlanetScale`}
        </ul>
        <ul className="px-6 text-center text-lg text-gray-700">
          <b>{`ORM: `}</b>
          {`Prisma`}
        </ul>
        <ul className="px-6 text-center text-lg text-gray-700">
          <b>{`Auth: `}</b>
          {`NextAuth.js`}
        </ul>
        <ul className="px-6 text-center text-lg text-gray-700">
          <b>{`Deployment: `}</b>
          {`Vercel`}
        </ul>
        <h1 className="mt-12 mb-2 text-center text-4xl font-black leading-snug tracking-tight">
          {`Who made it?`}
        </h1>
        <p className="mb-6 px-6 text-center text-lg text-gray-700">
          {`Built by `}
          <a
            href="https://www.kevc.xyz/"
            className="underline hover:no-underline"
          >
            Kevin
          </a>
          {' ✌️'}
        </p>
      </div>
    </Container>
  )
}
