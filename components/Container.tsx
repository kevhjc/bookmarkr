import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { RoomProvider, useUpdateMyPresence, useOthers } from '@liveblocks/react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface IContainerProps {
  title?: string
  children: JSX.Element[] | JSX.Element
}

interface ICursorProps {
  color: string
  x: number
  y: number
}

function useWindowLiveCursors() {
  const updateMyPresence = useUpdateMyPresence()

  useEffect(() => {
    let scroll = {
      x: window.scrollX,
      y: window.scrollY,
    }

    let lastPosition: { x: any; y: any } | null = null

    function transformPosition(point: { x: any; y: any }) {
      return {
        x: point.x / window.innerWidth,
        y: point.y,
      }
    }

    function onPointerMove(event: { pageX: any; pageY: any }) {
      const position = {
        x: event.pageX,
        y: event.pageY,
      }
      lastPosition = position
      updateMyPresence({
        cursor: transformPosition(position),
      })
    }

    function onPointerLeave() {
      lastPosition = null
      updateMyPresence({ cursor: null })
    }

    function onDocumentScroll() {
      if (lastPosition) {
        const offsetX = window.scrollX - scroll.x
        const offsetY = window.scrollY - scroll.y
        const position = {
          x: lastPosition.x + offsetX,
          y: lastPosition.y + offsetY,
        }
        lastPosition = position
        updateMyPresence({
          cursor: transformPosition(position),
        })
      }
      scroll.x = window.scrollX
      scroll.y = window.scrollY
    }

    document.addEventListener('scroll', onDocumentScroll)
    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerleave', onPointerLeave)

    return () => {
      document.removeEventListener('scroll', onDocumentScroll)
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [updateMyPresence])

  const others = useOthers()

  return others
    .toArray()
    .filter((user) => user.presence?.cursor != null)
    .map(({ connectionId, presence, id, info }) => {
      return {
        x: presence?.cursor.x * window.innerWidth,
        y: presence?.cursor.y,
        connectionId,
        id,
        info,
        presence,
      }
    })
}

function Cursor({ color, x, y }: ICursorProps) {
  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'transform 0.5s cubic-bezier(.17,.93,.38,1)',
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      width="24"
      height="36"
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
        fill={color}
      />
    </svg>
  )
}

const COLORS = ['#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777']

function Room() {
  const cursors = useWindowLiveCursors()
  return (
    <>
      {cursors.map(({ x, y, connectionId }) => (
        <Cursor
          key={connectionId}
          color={COLORS[connectionId % COLORS.length]}
          x={x}
          y={y}
        />
      ))}
    </>
  )
}

export default function Container(props: IContainerProps) {
  const { children } = props
  const router = useRouter()

  const meta = {
    title: 'Bookmarkr',
    description: `Social Bookmarking`,
    image: 'https://www.bookmarkr.link/banner.png',
    type: 'website',
  }

  return (
    <div className="container mx-auto max-w-3xl p-8">
      <RoomProvider id="live-cursors">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://www.bookmarkr.link${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://www.bookmarkr.link${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Bookmarkr" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <Navbar />
        <main className="flex flex-col justify-center">{children}</main>
        <Room />
        <Footer />
      </RoomProvider>
    </div>
  )
}
