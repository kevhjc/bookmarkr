import { FormEvent, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useSWRConfig } from 'swr'
import cn from 'classnames'

export default function Submit() {
  const { data: session } = useSession()
  const { mutate } = useSWRConfig()
  const [count, setCount] = useState(0)
  const urlInput = useRef<HTMLInputElement>(null)
  const noteInput = useRef<HTMLInputElement>(null)

  const onChangeCount = (e: Event) => {
    let newVal = (e.target as HTMLInputElement).value.length
    setCount(newVal)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('/api/add', {
      body: JSON.stringify({
        name: session?.user?.name,
        image: session?.user?.image,
        url: urlInput?.current?.value,
        note: noteInput?.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const { error } = await res.json()
    if (error) {
      return
    } else {
      mutate('/api/bookmark')
      urlInput!.current!.value = ''
      noteInput!.current!.value = ''
      setCount(0)
    }
  }

  return (
    <>
      <div className="my-4 w-full rounded border border-blue-200 bg-blue-50 p-4 duration-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800">
        <form
          className="relative my-1"
          action="#"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            ref={urlInput}
            aria-label="Submit a URL"
            placeholder="Submit a URL"
            type="url"
            required
            disabled={session ? false : true}
            className={cn(
              session
                ? 'mt-1 block w-full rounded-md bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-200'
                : 'mt-1 block w-full rounded-md bg-gray-200 px-4 py-2 pr-32 dark:bg-gray-700'
            )}
          />
          {session ? (
            <button
              className="w-22 absolute right-1 top-1 flex h-8 items-center justify-center rounded bg-gray-200 px-4 font-medium text-gray-900 transition-all hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-400"
              type="submit"
            >
              Submit
            </button>
          ) : null}
          <input
            ref={noteInput}
            aria-label="Add a note"
            placeholder="Add a note"
            type="note"
            maxLength={100}
            disabled={session ? false : true}
            className={cn(
              session
                ? 'mt-2 block w-full rounded-md bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-200'
                : 'mt-2 block w-full rounded-md bg-gray-200 px-4 py-2 pr-32 dark:bg-gray-700'
            )}
            onKeyUp={() => (event ? onChangeCount(event) : 0)}
          />
          <span
            className={cn(
              count <= 75
                ? 'absolute right-1 top-12 flex h-8 items-end justify-end px-1 pt-2 font-medium text-gray-400 transition-all'
                : count > 90 && count <= 100
                ? 'absolute right-1 top-12 flex h-8 items-end justify-end px-1 pt-2 font-bold text-red-400 transition-all'
                : 'absolute right-1 top-12 flex h-8 items-end justify-end px-1 pt-2 font-bold text-orange-400 transition-all'
            )}
          >
            {count} / 100
          </span>
        </form>
        {!session ? (
          <p className="mt-4 break-words font-mono text-sm text-gray-600 dark:text-gray-200">
            Hey there! Please sign in with <b>GitHub</b> if you would like to
            add a bookmark to the message board. Your information is only used
            to display your name and avatar.
          </p>
        ) : null}
      </div>
    </>
  )
}
