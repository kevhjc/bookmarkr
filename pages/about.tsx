import Link from 'next/link'

import Container from '../components/Container'

export default function About() {
  return (
    <Container title="About – Bookmarkr">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-center text-4xl font-black leading-snug tracking-tight">
          So what's Bookmarkr?
        </h1>
        <p className="mt-2 mb-6 px-6 text-center text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h1 className="text-center text-4xl font-black leading-snug tracking-tight">
          What's the tech stack?
        </h1>
        <p className="mt-2 mb-6 px-6 text-center text-lg text-gray-700">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <h1 className="text-center text-4xl font-black leading-snug tracking-tight">
          Who made it?
        </h1>
        <p className="mt-2 mb-6 px-6 text-center text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Container>
  )
}
