import { FormEvent, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useSWRConfig } from 'swr'
import cn from 'classnames'
import toast, { Toaster } from 'react-hot-toast'
import FadeIn from 'react-fade-in'

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
      toast.error(`Uh oh, ${error.toString()}`)
    } else {
      mutate('/api/bookmark')
      urlInput!.current!.value = ''
      noteInput!.current!.value = ''
      setCount(0)
      toast.success('Bookmark added')
    }
  }

  return (
    <FadeIn delay={100}>
      <div className="w-full p-4 my-4 duration-300 border border-blue-200 rounded-lg bg-blue-50 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800/80">
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
                ? 'mt-1 block w-full rounded-lg bg-white px-4 py-2 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-600 dark:text-neutral-200'
                : 'mt-1 block w-full rounded-lg bg-neutral-200 px-4 py-2 pr-32 dark:bg-neutral-700/50'
            )}
          />
          {session ? (
            <button
              className="absolute flex items-center justify-center h-8 px-4 font-medium transition-all rounded w-22 right-1 top-1 bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800/80"
              type="submit"
            >
              Submit
            </button>
          ) : null}
          <input
            ref={noteInput}
            aria-label="Add a note"
            placeholder="Add a note"
            maxLength={100}
            disabled={session ? false : true}
            className={cn(
              session
                ? 'mt-2 block w-full rounded-lg bg-white px-4 py-2 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-600 dark:text-neutral-200'
                : 'mt-2 block w-full rounded-lg bg-neutral-200 px-4 py-2 pr-32 dark:bg-neutral-700/50'
            )}
            onKeyUp={() => (event ? onChangeCount(event) : 0)}
          />
          <span
            className={cn(
              count <= 75
                ? 'absolute right-1 top-12 flex h-8 items-end justify-end px-1 pt-2 font-medium text-neutral-400 transition-all'
                : count > 90 && count <= 100
                ? 'absolute right-1 top-12 flex h-8 items-end justify-end px-1 pt-2 font-bold text-red-400 transition-all'
                : 'absolute right-1 top-12 flex h-8 items-end justify-end px-1 pt-2 font-bold text-orange-400 transition-all'
            )}
          >
            {count} / 100
          </span>
        </form>
        {!session ? (
          <p className="mt-4 font-mono text-sm break-words text-neutral-600 dark:text-neutral-200">
            Hey there! Sign in with <b>GitHub</b> to post a link to the message
            board. Your information is only used to display your name and
            profile picture.
          </p>
        ) : null}
        <Toaster />
      </div>
    </FadeIn>
  )
}
