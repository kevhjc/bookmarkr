import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Submit() {
  return (
    <>
      <div className="my-4 w-full rounded border border-blue-200 bg-blue-50 p-4 transition duration-300 hover:translate-y-2 hover:shadow-lg">
        <form className="relative my-1">
          <input
            aria-label="Add a URL"
            placeholder="URL"
            type="url"
            autoComplete="url"
            required
            className="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            className="w-22 absolute right-1 top-1 flex h-8 items-center justify-center rounded bg-gray-200 px-4 font-medium transition-all hover:bg-gray-300"
            type="submit"
          >
            Add
          </button>
          <input
            aria-label="Add a tag or multiple tags"
            placeholder="Tags"
            type="hashtag"
            autoComplete="hashtag"
            required
            className="mt-3 block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
        </form>
      </div>
    </>
  )
}
