import Link from 'next/link'

import Container from '../components/Container'

export default function About() {
  return (
    <Container title="About – Bookmarkr">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-center text-4xl font-black leading-snug tracking-tight">
          {`So what's Bookmarkr?`}
        </h1>
        <p className="mt-2 mb-6 px-6 text-center text-lg text-gray-700">
          Social bookmarking
        </p>
        <h1 className="text-center text-4xl font-black leading-snug tracking-tight">
          {`What's the tech stack?`}
        </h1>
        <p className="mt-2 mb-6 px-6 text-center text-lg text-gray-700">
          {`Next.js, NextAuth.js, TailwindCSS, TypeScript, and PlanetScale`}
        </p>
        <h1 className="text-center text-4xl font-black leading-snug tracking-tight">
          {`Who made it?`}
        </h1>
        <p className="mt-2 mb-6 px-6 text-center text-lg text-gray-700">
          {`Kevin H. Chung`}
        </p>
      </div>
    </Container>
  )
}
