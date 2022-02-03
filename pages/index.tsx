import Link from 'next/link'
import { Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'

import Container from '../components/Container'
import Submit from '../components/Submit'

export default function Home() {
  return (
    <Container>
      <Submit />
      <div className="container mx-auto mt-8 transform gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://www.joshwcomeau.com/shadow-palette/">
              <a>https://www.joshwcomeau.com/shadow-palette/</a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            Create a set of lush, realistic CSS shadows.
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #tool
              </span>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #css
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://www.wallpaper.com/design/apple-park-behind-the-scenes-design-team-interview">
              <a>
                https://www.wallpaper.com/design/apple-park-behind-the-scenes-design-team-interview
              </a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            Inside Apple Park: first look at the design team shaping the future
            of tech
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #apple
              </span>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #office
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://headlessui.dev/react/popover">
              <a>https://headlessui.dev/react/popover</a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            Popovers are perfect for floating panels with arbitrary content like
            navigation menus, mobile menus and flyout menus.
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #ui
              </span>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #css
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4  gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://cmhb.de/minimal-email-setup">
              <a>https://cmhb.de/minimal-email-setup</a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            Some people love emails. Some people hate them. Most of us
            experience both emotions.
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #inbox-zero
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4  gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://brianlovin.com/writing/how-my-website-works">
              <a>https://brianlovin.com/writing/how-my-website-works</a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            My personal website is an over-engineered playground where I can
            tinker, learn new things, test new tools, break all the rules, and
            just scratch that itch deep in my brain that wants to understand how
            the hell web software works.
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #blog
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4  gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://www.arun.is/blog/double-queue/">
              <a>https://www.arun.is/blog/double-queue/</a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            We live in the age of never-ending content. Whether it’s essays,
            newsletters, videos, podcasts, or video games, there is far more out
            there than we could ever consume in a lifetime.
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #productivity
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4  gap-4 rounded border border-gray-200 bg-gray-50 p-1">
        <div className="px-2 py-2 sm:px-3">
          <h3 className="text-lg font-medium leading-6 text-blue-500 underline hover:no-underline">
            <Link href="https://www.jjabespoke.com/analogue-hq-hong-kong">
              <a>https://www.jjabespoke.com/analogue-hq-hong-kong</a>
            </Link>
          </h3>
          <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500">
            Analogue, a Seattle-based game console design and fabrications
            company has finally moved into their own Asia headquarters in the
            heart of Hong Kong’s busy shopping district, Causeway Bay.
          </p>
          <div className="bt-1 flex flex-col border-t pt-2">
            <div>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #interior-design
              </span>
              <span className="m-1 rounded bg-gray-200 p-1 font-mono text-sm font-medium leading-snug tracking-tight text-gray-500 transition duration-300 hover:shadow-md">
                #office
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
